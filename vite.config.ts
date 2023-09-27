import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";

export default defineConfig(() => ({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
    ],
  },
  server: {
    https: true,
  },
  plugins: [
    react(),
    mkcert({
      source: "coding",
    }),
  ],
  build: {
    outDir: "./dist",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        "oauth-callback": resolve(__dirname, "oauth-callback.html"),
      },
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
}));
