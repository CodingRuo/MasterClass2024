import { fileURLToPath, URL } from "node:url";
import VueRouter from "unplugin-vue-router/vite";
import AutoImport from "unplugin-auto-import/vite";
import { VueRouterAutoImports } from "unplugin-vue-router";
import Components from "unplugin-vue-components/vite";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
    css: {
        postcss: {
            plugins: [
                tailwind(),
                autoprefixer(),
            ],
        },
    },
    plugins: [
        Components({/* options */}),
        VueRouter(),
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => tag.startsWith("iconify-icon"),
                },
            },
        }),
        vueDevTools(),
        AutoImport({
            include: [
                /\.[tj]sx?$/,
                /\.vue$/,
                /\.vue\?vue/,
                /\.md$/,
            ],
            imports: [
                // presets
                "vue",
                VueRouterAutoImports,
                {
                    "pinia": [
                        "defineStore",
                        "createPinia",
                        "storeToRefs",
                        "acceptHMRUpdate",
                    ],
                },
            ],
            dts: true,
            viteOptimizeDeps: true,
            dirs: ["src/stores", "src/lib", "src/utils"],
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
