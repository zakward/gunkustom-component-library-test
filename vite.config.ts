import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    emptyOutDir: false, // Prevent Vite from clearing out declaration files if needed
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'GunkustomComponentLibrary',
      formats: ['es', 'cjs'],
      fileName: (format) => `gunkustom-component-library.${format}.js`,
    },
    // Optionally configure asset directory
    assetsDir: 'assets',
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
});
