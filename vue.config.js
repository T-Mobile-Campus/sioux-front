module.exports = {
  devServer: {
    proxy: {
      "/server": {
        target: "http://localhost:5000/",
        changeOrigin: true,
        ws: true,
        // pathRewrite: {'/server': ''}
      },
    },
  }
}