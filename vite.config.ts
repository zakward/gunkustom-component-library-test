import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    emptyOutDir: false, // Prevent Vite from deleting the dist folder contents
    lib: {
      // Single entry that re-exports everything
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'GunkustomComponentLibrary',
      formats: ['es', 'cjs'],
      fileName: (format) => `gunkustom-component-library.${format}.js`,
    },
    rollupOptions: {
      // Mark React and ReactDOM as external so they won't be bundled
      external: ['react', 'react-dom'],
    },
  },
});
