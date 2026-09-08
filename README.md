# Thomas Nardone — Engineering Portfolio

A static, responsive engineering portfolio featuring CameraPlane 1800, an optical-alignment gimbal, and professional experience.

## Contents

- Home: selected work, experience, background, and professional contact.
- CameraPlane case study: Rev E CAD imagery, a separately labeled Rev B interactive assembly, and MATLAB/SU2 section CFD.
- Gimbal case study: native assembly, exploded view, drawing, and recorded motion samples.
- Evidence downloads: original MATLAB driver/replay source, section results, replay verification, and gimbal documentation.

All displayed CAD images and CFD plots come from the actual project artifacts. Personal CAD projects are identified as AI-assisted. Physical validation limits are stated in the case studies. Employer experience is summarized from the existing application resume; no employer files are included.

## Local development

Requires Node.js 22.13 or later and npm.

```sh
npm ci
npm run dev
```

## Static build and checks

```sh
npm run build
npm run check
```

The complete deployable site is in `dist/client`. The build includes a small postprocessing step to provide directory-index URLs on GitHub Pages. It does not require a Node server at runtime. Page navigation uses standard HTML links, and the CAD explorer's Three.js dependency is vendored locally with its MIT license.

The check command runs TypeScript and verifies the local links/assets in the home page, both case studies, and the CAD explorer.

## GitHub Pages

The intended repository is `deucenardone212/deucenardone212.github.io`. After creating it, choose **Settings → Pages → Source → GitHub Actions**. The included workflow builds, checks, and deploys on pushes to `main`.

The intended public address is `https://deucenardone212.github.io/`. This README does not assert that publication has completed; check the workflow and live URL.

The site uses root-relative paths for this user-site repository. If deploying under a repository subpath, configure that base path before publishing.

## Moving to Cloudflare

The same static output can be hosted without a framework server. Build with `npm run build` and publish `dist/client`. When using a custom domain, update `metadataBase` in `app/layout.tsx`. No domain or paid service has been purchased.

## Editing

- Home and experience: `app/page.tsx`
- Drone case: `app/projects/cameraplane/page.tsx`
- Gimbal case: `app/projects/alignment-gimbal/page.tsx`
- Shared navigation: `app/shared.tsx`
- Styling and breakpoints: `app/globals.css`
- Project assets and downloadable evidence: `public/`

Do not claim aircraft-level drag, range, endurance, or flight validation from the section study. Do not present the gimbal's sampled static interference checks as continuous motion or physical testing.

## Source provenance

See `CONTENT_SOURCES.md`. Native CAD files, complete solver cases, private chat histories, local filesystem paths, and resume contact details beyond the professional email/LinkedIn are intentionally excluded from this repository.

The lint command checks authored app/scripts code and permits standard image tags for a static host. Generated Shadcn components are retained unchanged.
