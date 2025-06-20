import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import legacy from '@vitejs/plugin-legacy';

interface ViteConfigInput {
  mode: string;
  command: string;
}

function viteConfig(args: ViteConfigInput) {
  // Production mode
  if (args.mode === 'production')
    return defineConfig({
      plugins: [
        react(),
        tsconfigPaths(),
        legacy({
          targets: ['defaults', 'not IE 11'],
        }),
      ],
      css: {
        modules: {
          localsConvention: 'camelCase',
          generateScopedName: '[hash:base64:5]',
        },
      },
      build: {
        minify: 'esbuild',
        cssMinify: true,
        emptyOutDir: true, // also necessary
        rollupOptions: {
          output: {
            entryFileNames: `assets/[name].js`,
            chunkFileNames: `assets/[name].js`,
            assetFileNames: `assets/[name].[ext]`,
          },
        },
      },
    });

  // Development mode
  return defineConfig({
    plugins: [react(), tsconfigPaths()],
  });
}

export default viteConfig;
