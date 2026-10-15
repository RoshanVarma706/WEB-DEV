import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Freebuff requires HMR to stay disabled and the dev server to bind 0.0.0.0.
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: Number(process.env.PORT) || 5173,
    strictPort: false,
    hmr: false,
    // Freebuff serves the preview from a managed, generated host, so allow it
    // (and any other externally provided host) to reach the dev server.
    allowedHosts: true,
  },
  preview: {
    host: "0.0.0.0",
    port: Number(process.env.PORT) || 4173,
    allowedHosts: true,
  },
  build: {
    outDir: "dist",
  },
});
