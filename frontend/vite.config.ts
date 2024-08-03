import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svg from "@neodx/svg/vite";
import path from "path";

export default defineConfig({
  base: "/logos/",
  plugins: [
    react(),
    svg({
      root: "src/assets/svg/svgSprite.svg",
      output: "public",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      app: path.resolve(__dirname, "src/app"),
      entities: path.resolve(__dirname, "src/entities"),
      features: path.resolve(__dirname, "src/features"),
      pages: path.resolve(__dirname, "src/pages"),
      assets: path.resolve(__dirname, "src/assets"),
      widgets: path.resolve(__dirname, "src/widgets"),
      shared: path.resolve(__dirname, "src/shared"),
    },
  },
});
