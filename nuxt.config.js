import { I18N } from './config'


const axios = require('axios')
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name | '',
    meta: [
      { name:'google-site-verificatio', conetnt: 'ILNs1GKYkBtDmZ8LJgKBO05gKa3tLqMmgxi1kHHrNIU' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:site_name', content: process.env.npm_package_name },
      { property: 'og:type', content: 'website' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Sanchez:400i&display=swap' },
    ],
    script: [
      /*
      ** Global JS
      */
     { src:'https://code.jquery.com/jquery-3.4.1.min.js', type: "text/javascript" },
    //  { src: 'https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js', /*mode: 'server',*/    mode: 'client' ,  type: "text/javascript" },
    //  { src: 'https://www.gstatic.com/firebasejs/7.18.0/firebase-analytics.js', /*mode: 'server',*/    mode: 'client' , type: "text/javascript" },
     { src: 'https://www.googletagmanager.com/gtag/js', /*mode: 'server', */   mode: 'client' , type: "text/javascript" },
    //  { src: 'https://static.zdassets.com/ekr/snippet.js?key=aef67e78-1c8e-4d1d-8ce0-31aced0255c9' , id:'ze-snippet' , type: "text/javascript" },/* Zendesk Widget */
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#fff' },
  /*
  ** Global CSS
  */
 css: [
    'swiper/swiper-bundle.css' ,
    'element-ui/lib/theme-chalk/index.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
 plugins: [
    // { src: '~plugins/pixel', type: 'text/javascript', mode: 'client', ssr: false },
    // { src: '~plugins/mixpanel'},
    { src: '~plugins/hotjar' },
    { src: "~/plugins/v-waypoint.client.js",  mode: 'client' },
    { src: "~/plugins/vue-tabs-component.js", ssr: false },
    { src: "~/plugins/vue-awesome-swiper.js", ssr: false },
    { src: '~/plugins/currency', ssr: false },
    { src: '~/plugins/vue-infinite-scroll.js', ssr: false },
    { src: '~/plugins/vue-isotope.js', ssr: false },
    { src: '~/plugins/vue-images-loaded.js', ssr: false },
    { src: '~/plugins/vue-mq.js', ssr: false },//Handle Media Queries and Responsive Design
    { src: '~/plugins/vue-social-sharing.js', ssr: false },//for sharing links to social networks
    { src: '~/plugins/firebase.js', ssr: false ,/*mode: 'server' ,*/  mode: 'client' },//Firebase SDK
    { src: '~/plugins/element-ui/element-ui' },
    { src: '~/plugins/font-awesome' },
    { src: '~/plugins/vue-ics' },
 ],
 /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    ['@nuxtjs/dotenv'],
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/dotenv',
    ['nuxt-i18n', I18N],
    'nuxt-fontawesome',
  ],
  axios: {
    proxy: true,
    prefix: '/api/',
    credentials: true,
  },
  proxy: {
    
  },
  /*
  ** Build configuration
  */
  // build: {
  //   /*
  //   ** You can extend webpack config here
  //   */
  //   extend (config, ctx) {
  //   }
  // },
  build: {
    /*
    ** You can extend webpack config here
    */
    vendor: ['element-ui']
  },
  server: { //Nuxt Server    
    port: 8000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  },
  sitemap: {
    i18n: true,
    i18n: {
      locales: ['en', 'zh-tw', 'zh-cn'],
      routesNameSeparator: '___'
    },
    path: '/sitemap.xml', // sitemap???????????????????????????
    hostname: 'https://www.gemcard.co/', // ??????
    // hostname: 'http://localhost:8000/', // ??????
    cacheTime: 1000 * 60 * 15, // ????????????????????????????????? generate: false??????
    generate: false, // ??????????????? nuxt generate ?????????????????? route path??????
    sitemaps: [
      {
        path: '/sitemap-product.xml',
        // gzip: true,// ?????? .xml.gz ???gzip??????????????? sitemap 
        exclude: [  // ?????????????????????
          '/',
          '/download',
          '/howitworks',
          '/howitworks_BK20200804',
          '/howitworks_forapp',
          '/payment_failed',
          '/payment_success',
          '/policy',
          '/product_ranking',
          '/product_ranking_BK20200318',
          '/rookie_showAll',
        ],
        routes(callback) {//???sitemap.xml????????????????????????
              axios.all([//axios.all ?????? axios.spread ???????????????????????????
                // ?????????:??????????????????????????????API????????????????????????5??????SKU??????????????????
                axios.get(`https://jydhwhxskv.gemcard.co/api/site/product_sitemap`),
              ])
              .then(axios.spread(function (Product) {//axios callback
                const ProductRoutes = Product.data.map((data) => ({
                    url: `/product/${data.product_id}`,
                    changefreq: 'daily', // ?????????????????????
                    priority: 0.9, //????????????????????????0.1 - 1
                    lastmod: new Date(data.updated_at), //yyyy-mm-dd
                    lastmodrealtime: true, //yyyy-mm-ddTHH:MON:SSZ
                    payload: data,
                }));
                callback(null, ProductRoutes);
              }), (err) => { next(err); });
        },
      },
    ]
    
  },
  fontawesome: {
    component: 'fa',
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['far']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },

}
