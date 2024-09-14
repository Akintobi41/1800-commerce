import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@reusables': path.resolve(__dirname, 'src/components/reusables'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@appwrite': path.resolve(__dirname, 'src/appwrite'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@contentful': path.resolve(__dirname, 'src/contentful'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@src': path.resolve(__dirname, 'src/'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
}
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: '/src/vitest-setup.ts',
  },
 checkJs: true
})
