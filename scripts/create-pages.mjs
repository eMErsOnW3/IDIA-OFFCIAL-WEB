import { copyFile, mkdir, writeFile } from 'node:fs/promises';

// GitHub Pages has no SPA rewrite rules. Give each public route its own
// static entry so direct links and refreshes work with BrowserRouter.
for (const route of ['download', 'pricing', 'about']) {
  await mkdir(`dist/${route}`, { recursive: true });
  await copyFile('dist/index.html', `dist/${route}/index.html`);
}
await copyFile('dist/index.html', 'dist/404.html');
await writeFile('dist/.nojekyll', '');
console.log('Created GitHub Pages route entries and 404 fallback.');

