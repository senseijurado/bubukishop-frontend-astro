import { defineConfig } from "astro/config";
// Third parte libs integrations:
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
    integrations: [
        // Tailwind Configurations:
        tailwind({
            config: {
                applyBaseStyles: true,
                path: "./tailwind.config.cjs",
            },
        }),
        // Svelte Configuration:
        svelte({
            compilerOptions: {
                cssOutputFilename: "[name].[chunkhash].css",
                enableSourcemap: true,
                hydratable: true,
            },
            experimental: {
                sendWarningsToBrowser: true,
            },
            emitCss: true,
        }),
    ],
});
