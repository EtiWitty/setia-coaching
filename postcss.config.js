// Tailwind 4 writes modern CSS (cascade layers, oklch colours, color-mix). Browsers
// before iOS 15.4 / Chrome 99 ignore everything inside @layer, which leaves the
// page unstyled, so postcss-preset-env rewrites it into CSS they understand.
export default {
  plugins: {
    "@tailwindcss/postcss": {},
    "postcss-preset-env": {
      browsers: ["iOS >= 14", "Safari >= 14", "Chrome >= 88", "ChromeAndroid >= 88", "Samsung >= 15", "Firefox >= 78"],
      features: {
        "cascade-layers": true,
        "oklab-function": true,
        "color-mix-function": true,
        "logical-properties-and-values": false,
      },
    },
  },
};
