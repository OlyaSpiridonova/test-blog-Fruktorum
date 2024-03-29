// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "vue3-carousel-nuxt"],
  runtimeConfig: {
    public: {
      apiBase: "https://devtwit8.ru/api/v1/page/?path=",
    },
  },
});
