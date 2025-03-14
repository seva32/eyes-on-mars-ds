import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [
    react(),
    dts({
      exclude: ["**/*.stories.tsx"],
    }),
    cssInjectedByJsPlugin(),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "EomDesignSystem",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `eom-design-system.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
      treeshake: {
        moduleSideEffects: (id) => {
          if (id.endsWith(".stories.tsx")) {
            return false;
          }
          return true;
        },
      },
    },
  },
});
