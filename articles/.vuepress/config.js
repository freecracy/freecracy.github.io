module.exports = {
  base: '/',
  title: '个人站点',
  host: '0.0.0.0',
  port: 8080,
  themeConfig: {
    lastUpdated: '最后更新', 
  },
  plugins: [
    [ 'autobar' ],
    [ '@vuepress/medium-zoom',
      { 
       selector: 'img.zoom-custom-imgs',
       options: {
         margin: 16
       }
      }
    ],
     ['@vuepress/back-to-top']
  ]
}
