import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from 'vite-plugin-node-polyfills';  

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills()
  ],

  build: {
    rollupOptions: {
      external: ['bcryptjs'] // Exclude bcryptjs from Rollup processing
    },
    chunkSizeWarningLimit: 1000, // Adjust chunk size warning limit
  },

  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8800",
        changeOrigin: true,
      },
    },
  },
});
