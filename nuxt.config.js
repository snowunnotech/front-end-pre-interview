module.exports = {
  mode: "spa",
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  env: {
    url: "https://demo.api-platform.com"
  },
  loading: { color: "#fff" },
  css: [{ src: "~/assets/scss/all.scss", lang: "scss" }],
  plugins: [],
  buildModules: [],
  modules: ["bootstrap-vue/nuxt", "@nuxtjs/axios"],
  axios: {},
  build: {
    extend(config, ctx) {}
  }
};
