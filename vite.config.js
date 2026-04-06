import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const base =
  repositoryName && !repositoryName.endsWith('.github.io')
    ? `/${repositoryName}/`
    : '/';

export default defineConfig(({ command }) => {
  return {
    base,
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: '.',
    build: {
      sourcemap: true,
      cssCodeSplit: true,
      minify: 'esbuild',
      cssMinify: true,
      rollupOptions: {
        input: glob.sync('./*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('swiper')) {
              return 'vendor-swiper';
            }
            if (id.includes('izitoast')) {
              return 'vendor-izitoast';
            }
            if (id.includes('accordion-js')) {
              return 'vendor-accordion';
            }
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: chunkInfo => {
            if (chunkInfo.name === 'commonHelpers') {
              return 'commonHelpers.js';
            }
            return '[name].js';
          },
          assetFileNames: assetInfo => {
            if (assetInfo.name && assetInfo.name.endsWith('.html')) {
              return '[name].[ext]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
      outDir: 'dist',
      emptyOutDir: true,
    },
    plugins: [
      injectHTML(),
      FullReload(['./src/**/**.html']),
      SortCss({
        sort: 'mobile-first',
      }),
    ],
  };
});
