module.exports = {
    publicPath: "",
    devServer: {
      port: 8081,
      disableHostCheck: true,
    },
    chainWebpack: (config) => {
      config.plugins.delete("prefetch");
    }
};

