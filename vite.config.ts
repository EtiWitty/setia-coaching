import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Relative base so the build works on GitHub Pages or any static host.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
