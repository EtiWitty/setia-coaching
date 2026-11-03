import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Older phones (and in-app browsers on Android) are common among visitors, so
// JavaScript and CSS are built for browsers back to iOS 14 / Chrome 88.
// Tailwind runs through PostCSS; see postcss.config.js.
const legacyTargets = ["es2020", "chrome88", "safari14", "firefox78", "edge88"];

// Relative base so the build works on GitHub Pages or any static host.
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    target: legacyTargets,
    cssTarget: legacyTargets,
  },
});
