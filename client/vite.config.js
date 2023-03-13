import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import preload from "vite-plugin-preload";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svgr(), react(), preload()],
    build: {
        outDir: "../server/public",
    },
});
