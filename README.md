# Nurse Pay

Minimal offline-first nurse pay, bills, and shift schedule PWA. Data stays in the browser and the app is designed for iPhone Safari and GitHub Pages.

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

Generate all PNG icons from the SVG with `npm run generate-icons`. The Vite base is `/portfolio/`; change the single `base` constant in `vite.config.js` when deploying under another repository name.

## GitHub Pages

Create a repository, set the Vite base to match its name, enable **Settings > Pages > Source: GitHub Actions**, and push to `main`. The workflow runs tests, builds `dist/`, and deploys it with the official Pages actions.

## iPhone installation and updates

Open the Pages URL in Safari, use **Share > Add to Home Screen**, then launch the standalone app. The service worker caches the app shell for offline use after the first load. When an update is available, tap the in-app update banner, then close and reopen the app.

Manual iPhone checklist: open in Safari; install to Home Screen; launch standalone; add a pay entry and shift; close and reopen; enable Airplane Mode and verify data/screens still work; test an overnight shift and Apple Maps link; verify the update banner after a new deployment.
