module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
              @import "@/assets/scss/variables.scss";
            `,
      },
    },
  },
  pwa: {
    name: 'Board games helpers',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
  },
};
