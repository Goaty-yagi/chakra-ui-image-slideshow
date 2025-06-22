import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./", // this means the folder where vite.config.ts is: playground
  plugins: [react()],
  publicDir: path.resolve(__dirname, "../public"),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"), // go outside playground to root src
    },
  },
  server: {
    fs: {
      allow: [".."], // allow access outside playground for imports
    },
  },
});
