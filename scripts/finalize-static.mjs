import { mkdir, readFile, writeFile, copyFile } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('dist/client');
// vinext's current exporter prerenders without trailing-slash redirects.
// Provide directory indexes for portable, clean URLs on GitHub Pages.
for (const route of ['projects/cameraplane', 'projects/alignment-gimbal']) {
  await mkdir(path.join(root, route), { recursive: true });
  await copyFile(
    path.join(root, route + '.html'),
    path.join(root, route, 'index.html'),
  );
}
await writeFile(path.join(root, '.nojekyll'), '');
const expected = [
  'index.html',
  'projects/cameraplane/index.html',
  'projects/alignment-gimbal/index.html',
  'explorer/index.html',
];
for (const file of expected) {
  const html = await readFile(path.join(root, file), 'utf8');
  if (!html.includes('<html') || html.length < 1000)
    throw new Error('Missing or incomplete export: ' + file);
}
console.log('Static export ready: home, two case studies, and CAD explorer.');
