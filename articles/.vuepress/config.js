module.exports = {
  base: '/',
  title: '个人站点',
  host: '0.0.0.0',
  port: 8080,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Linux', link: 'https://cn100800.tk/ilinux.book' },
      { text: 'mail', link: 'mailto:freecracy1024@gmail.com' },
      { text: 'google', link: 'https://google.com.hk' },
    ],
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
    ['@vuepress/back-to-top'],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-129359790-1'
      }
    ]
  ]
}
