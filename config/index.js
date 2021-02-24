import en from '../lang/en-us.js'
import tw from '../lang/zh-tw.js'
import cn from '../lang/zh-cn.js'


const messages = {
   en, 
  'en-us' : {
    ...en
  },
  'zh-tw' : {
    ...tw
  },
  'zh-cn' : {
    ...cn
  }
}

export const I18N = {
  locales: [
    {
      code: 'en',
      iso: 'en-us',
      name: 'English'
    },
    {
      code: 'en-us',
      iso: 'en-us',
      name: 'English'
    },
    {
      code: 'zh-tw',
      iso: 'zh-tw',
      name: '繁體中文'
    },
    {
      code: 'zh-cn',
      iso: 'zh-cn',
      name: '簡體中文'
    }
  ],
  // parsePages: false,
  // pages: {
  //   'product_ranking/hot_sales/silver': {
  //     'en-us': '/product_ranking/hot_sales/silver',
  //     'zh-tw': '/product_ranking/hot_sales/silver',
  //     'zh-cn': '/product_ranking/hot_sales/silver',
  //   },
  // },
  defaultLocale: 'en',
  seo: true,
  vueI18n: {
    fallbackLocale: 'en',
    messages
  }
}
