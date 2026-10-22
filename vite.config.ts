import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, loadEnv, Plugin} from 'vite';

function githubPagesRootDeploy(): Plugin {
  return {
    name: 'github-pages-root-deploy',
    buildStart() {
      const rootAssets = path.resolve(__dirname, 'assets');
      if (fs.existsSync(rootAssets)) {
        fs.rmSync(rootAssets, {recursive: true, force: true});
      }
    },
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        // Ensure Vite always sees the source entry point even when root index.html holds built output
        const cleaned = html
          .replace(/^\s*<script type="module" crossorigin src="\/assets\/[^"]+"><\/script>\r?\n?/gm, '')
          .replace(/^\s*<link rel="stylesheet" crossorigin href="\/assets\/[^"]+">\r?\n?/gm, '');
        if (!cleaned.includes('/src/main.tsx')) {
          return cleaned.replace(
            '<div id="root"></div>',
            '<div id="root"></div>\n    <script type="module" src="/src/main.tsx"></script>',
          );
        }
        return cleaned;
      },
    },
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const rootDir = path.resolve(__dirname);
      if (!fs.existsSync(distDir)) return;

      // Copy built index.html to root index.html and 404.html (for GitHub Pages SPA routing)
      const distIndex = path.join(distDir, 'index.html');
      if (fs.existsSync(distIndex)) {
        fs.copyFileSync(distIndex, path.join(rootDir, 'index.html'));
        fs.copyFileSync(distIndex, path.join(rootDir, '404.html'));
      }

      // Sync assets/ and image/ folders to root
      for (const folder of ['assets', 'image']) {
        const srcFolder = path.join(distDir, folder);
        const destFolder = path.join(rootDir, folder);
        if (fs.existsSync(srcFolder)) {
          fs.rmSync(destFolder, {recursive: true, force: true});
          fs.cpSync(srcFolder, destFolder, {recursive: true});
        }
      }
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [githubPagesRootDeploy(), react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
