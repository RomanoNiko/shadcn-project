// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: false },
    modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxt/content"],
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: "",
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: "./components/ui",
    },
    css: ["~/assets/css/tailwind.css"],
    content: {
        build: {
            markdown: {
                highlight: {
                    theme: "vitesse-dark",
                    numberLines: true,
                },
            },
        },
    },
});
