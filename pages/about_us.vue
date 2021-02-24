<template>
  <div>

      <div class="aboutUs sectionBg mainContent">
          <section class="keyCards waypoint" v-waypoint="{ active: true, callback: onWaypoint_keyCards, options: intersectionOptions }">
            <div class="fullWidthBg">
                <div class="container flexRow flexCenter">
                  <div class="img"><img :src="require(`~/assets/images/about_us/keycards.jpg`)"></div>
                  <div class="text">
                    <h2 class="heading-l txtCenter">掌握市場趨勢</h2>
                    <p class="summary">GemCard是一款球員卡電商平台，有鑑於市場上假球卡氾濫以及層出不窮的交易糾紛，我們希望打造一個透明化且有保障的球員卡購買市場，並只販售市場上的"Key Card"重點球員卡，讓就算是新入圈的卡迷，也能快速掌握市場趨勢，做出最合理的買賣。</p>
                  </div>
                </div>
            </div>
          </section>
          <section class="marketTrend waypoint" v-waypoint="{ active: true, callback: onWaypoint_marketTrend, options: intersectionOptions }">
            <div class="fullWidthBg">
              <div class="container flexRow flexCenter">
                <div class="img"><img :src="require(`~/assets/images/about_us/marketTrend.jpg`)"></div>
                <div class="text">
                  <h2 class="heading-l txtCenter">AI 技術</h2>
                  <p class="summary">GemCard透過AI技術抓取球卡的市場成交價，讓買家在購買球卡時，能以球卡「價格趨勢圖」做為參考，以合理的價格買入球員卡。</p>
                </div>
              </div>
            </div>
          </section>
          <section class="marketTrend container flexCenter">
              <div class="text">
                <h2 class="heading-l txtCenter">省去物流時間</h2>
                <p class="summary">所有在GemCard交易的球員卡均被妥善保存在我們的倉儲中，當買家在平台上購買球員卡時，卡片擁有權立刻轉移至該買家，省去漫長的貨物流通時間。</p>
              </div>
          </section>
      </div>


  </div>
</template>

<script>

  export default {
    head() {
        const Breadcrumb = {
            '@context': 'https://schema.org/',
            '@type': 'BreadcrumbList',
            'itemListElement': [
                {
                    '@type': 'ListItem',
                    'position' : 1 ,
                    'name' : 'Home' , 
                    'item' : process.env.HOST_NAME, 
                },{
                    '@type' : 'ListItem' , 
                    'position' : 2 , 
                    'name' : 'About Gemcard',
                    'item' : process.env.HOST_NAME + 'howitworks' 
                },{
                    '@type' : 'ListItem' , 
                    'position' : 3 , 
                    'name' : 'About Us',
                    'item' : process.env.HOST_NAME + 'about_us' 
                }
            ],
        };
        // return {
        //      __dangerouslyDisableSanitizers: ['script'],//不對 script 標籤中內容做轉譯處理
        //     script: [
        //         { innerHTML: JSON.stringify(Breadcrumb), type: 'application/ld+json' }
        //     ],
        //     title: 'How to Buy & Sell Sports Cards on GemCard | GemCard',
        //     meta: [
        //         // Primary Meta Tags
        //         { hid: 'description',name: 'description',content: 'This is the best marketplace for you to buy and sell sports cards. Free to join as a member. You can purchase, sell, and manage sports cards in a few clicks.' },
        //         { name: 'thumbnail', content: '' },
        //         // Facebook
        //         { property: 'og:url', content: process.env.HOST_NAME + 'howitworks'},
        //         { property: 'og:title', content: 'How to Sell Your Sports Cards on GemCard | GemCard' },
        //         { property: 'og:description', content: 'This is the best marketplace for you to buy and sell sports cards. Free to join as a member. You can purchase, sell, and manage sports cards in a few clicks.' },
        //         { property: 'og:image', content: '/img/meta_ogImage_howitworks.jpg'},
        //         //等行銷部建置好再開啟：在Facebook for Developers 開設一個 App 並將 app_id 填入
        //         // { property: 'fb:app_id', content: ''}, 
        //         // Twitter
        //         { name: 'twitter:card', content: 'summary_large_image' },
        //         { name: 'twitter:url', content: process.env.HOST_NAME + 'howitworks'},
        //         { name: 'twitter:title', content: 'How to Sell Your Sports Cards on GemCard | GemCard' },
        //         { name: 'twitter:description', content: 'This is the best marketplace for you to buy and sell sports cards. Free to join as a member. You can purchase, sell, and manage sports cards in a few clicks.' },
        //         { name: 'twitter:image', content: process.env.HOST_NAME + 'img/meta_ogImage_howitworks.jpg'},
        //     ]
        // }
    },
    data () {
      return {				
        intersectionOptions: {
          root: null,
          rootMargin: '0px 0px 0px 0px',
          // threshold: [0, 1] // [0.25, 0.75] if you want a 25% offset!
          threshold: [0.25, 0.75] 
        },
      }
    },
    mounted () {  
      
      },
    methods: {
      open_popup_DowloadApp(){
        open_popup_DowloadApp();
      },
      onWaypoint_keyCards ({ going, direction }) {
        if (going === this.$waypointMap.GOING_IN) {
          $(".keyCards").addClass('fadeInUp animated').css('opacity','1');
          $(".keyCards .img").addClass('img_anime animated');
          $(".keyCards .text").addClass('text_anime animated');
        }
      },
      onWaypoint_marketTrend ({ going, direction }) {
        if (going === this.$waypointMap.GOING_IN) {
          $(".marketTrend").addClass('fadeInUp animated').css('opacity','1');
          $(".marketTrend .img").addClass('img_anime animated');
          $(".marketTrend .text").addClass('text_anime animated');
        }
      },
      //  onWaypoint_selling ({ going, direction }) {
      //   if (going === this.$waypointMap.GOING_IN) {
      //     $(".selling").addClass('fadeInUp animated').css('opacity','1');
      //   }
      // },
    },
      
  }
</script>

<style lang="scss">
  @import "assets/css/base/default.scss";
  @import "assets/css/pages/subPage_aboutus.scss";
 
</style>