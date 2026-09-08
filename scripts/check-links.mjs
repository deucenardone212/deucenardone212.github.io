import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('dist/client');
const pages = [
  'index.html',
  'projects/cameraplane/index.html',
  'projects/alignment-gimbal/index.html',
  'explorer/index.html',
];
let checked = 0;
for (const page of pages) {
  const html = await readFile(path.join(root, page), 'utf8');
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const value = match[1].replaceAll('&amp;', '&');
    if (!value.startsWith('/') || value.startsWith('//')) continue;
    const [file, fragment] = value.split('#');
    let target = path.join(root, decodeURIComponent(file.split('?')[0]));
    try {
      if ((await stat(target)).isDirectory())
        target = path.join(target, 'index.html');
      await stat(target);
    } catch {
      throw new Error(page + ': missing local asset or route ' + value);
    }
    if (fragment && target.endsWith('.html')) {
      const body = await readFile(target, 'utf8');
      if (!body.includes('id="' + fragment + '"'))
        throw new Error(page + ': missing anchor ' + value);
    }
    checked++;
  }
}
console.log(
  'Verified ' + checked + ' local links/assets across all four pages.',
);
