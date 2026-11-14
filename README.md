# Nurse Pay

Minimal offline-first nurse pay, bills, and shift schedule PWA. Data stays in the browser and the app is designed for iPhone Safari and Vercel.

## Structure

`src/lib` contains pure calculations and local-date helpers; `src/store` owns versioned localStorage state; `src/pages` contains the four HashRouter screens; `src/components` contains shared UI; `public/icon.svg` is the icon source.

## Development

```bash
npm install
npm run dev
npm test
npm run build
npm run preview
```

Generate all PNG icons from the SVG with `npm run generate-icons`. Vercel builds use the domain root by default. Leave `VITE_BASE_PATH` unset for the standard Vercel deployment; only set it when hosting the app under a subpath on another platform.

## Vercel deployment

Import `MBA329/nurse-pay-pwa` into Vercel with the repository root as the project root. Use the default build settings: Vercel detects the Vite app, runs `npm run build`, and serves the generated `dist/` directory. Deployments should track `main`. No GitHub Pages workflow or Pages configuration is required.

## iPhone installation and updates

Open the Vercel URL in Safari, use **Share > Add to Home Screen**, then launch the standalone app. The service worker caches the app shell for offline use after the first load. When an update is available, tap the in-app update banner, then close and reopen the app.

Manual iPhone checklist: open in Safari; install to Home Screen; launch standalone; add a pay entry and shift; close and reopen; enable Airplane Mode and verify data/screens still work; test an overnight shift and Apple Maps link; verify the update banner after a new deployment.
