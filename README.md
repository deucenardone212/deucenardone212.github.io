# Thomas Nardone — Engineering Portfolio

A static, responsive engineering portfolio featuring CameraPlane 1800, an optical-alignment gimbal, and professional experience.

## Contents

- Home: selected work, experience, background, and professional contact.
- CameraPlane case study: Rev E CAD imagery, a separately labeled Rev B interactive assembly, and MATLAB/SU2 section CFD.
- Gimbal case study: native assembly, exploded view, drawing, and recorded motion samples.
- Evidence downloads: original MATLAB driver/replay source, section results, replay verification, and gimbal documentation.

All displayed CAD images and CFD plots come from the actual project artifacts. Project pages highlight the design process, analysis workflow, and supporting evidence. Employer experience is summarized from the existing application resume; employer files are not included.

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

The live public address is `https://michaelnardone.com/`, published through GitHub Pages.

The site uses root-relative paths for this user-site repository. If deploying under a repository subpath, configure that base path before publishing.

## Deployment

The site is published through GitHub Pages with DNS managed in Cloudflare. The static build is generated with `npm run build` and published from `dist/client`; the custom domain is configured in `app/layout.tsx`.

## Editing

- Home and experience: `app/page.tsx`
- Drone case: `app/projects/cameraplane/page.tsx`
- Gimbal case: `app/projects/alignment-gimbal/page.tsx`
- Shared navigation: `app/shared.tsx`
- Styling and breakpoints: `app/globals.css`
- Project assets and downloadable evidence: `public/`

The case studies distinguish section-level analysis from aircraft performance and document the evidence behind each design conclusion.

## Source provenance

See `CONTENT_SOURCES.md`. The repository includes selected project artifacts and professional links; private and proprietary materials remain outside the repository.

The lint command checks authored app/scripts code and permits standard image tags for a static host. Generated Shadcn components are retained unchanged.
