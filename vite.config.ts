import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    Vue({
      isProduction: mode === 'production',
      template: {
        compilerOptions: {
          // to keep vue2 behaviour where spaces between html tags are preserved
          whitespace: 'preserve',
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@composables': path.resolve(__dirname, './src/composables'),
      '@stores': path.resolve(__dirname, './src/stores'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@types': path.resolve(__dirname, './src/types'),
    },
  },
  build: {
    target: 'esnext',
    sourcemap: true,
    minify: mode === 'production' ? 'esbuild' : false,
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'MOJS',
      fileName: (format) => `mojs.${format}.js`,
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  server: {
    port: 3000,
    strictPort: true,
  },
  define: {
    'import.meta.env.PACKAGE_VERSION': JSON.stringify(process.env.npm_package_version),
  },
}));
