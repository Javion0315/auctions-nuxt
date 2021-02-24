<template>
  <div>
      
      <div class="sectionBg">
          <section class="selling container waypoint" v-waypoint="{ active: true, callback: onWaypoint_selling, options: intersectionOptions }">
              <h2 class="heading-l txtCenter">Buying on GemCard</h2>
              <div class="stepList selling__stepList">
                  <div class="item selling__item">
                    <div class="icon-cricle">
                        <i class="icon icon-Authentication"></i>
                    </div>   
                    <div class="text">
                        <h3 class="title-l">Register as a Member</h3>
                        <p class="summary">Once registered as a member, you can access all the great cards and valuable market information on GemCard in just a few clicks.</p>
                    </div>
                  </div>
                  <div class="item selling__item">
                    <div class="icon-cricle">
                        <i class="icon icon-EarnMoney"></i>
                    </div>   
                    <div class="text">
                        <h3 class="title-l">View Updated Market Trends</h3>
                        <p class="summary">Information is gathered from many different marketplaces. These trends can help you make smart purchasing decisions.</p>
                    </div>
                  </div>
                  <div class="item selling__item">
                    <div class="icon-cricle">
                        <i class="icon icon-graded-cards"></i>
                    </div>   
                    <div class="text">
                        <h3 class="title-l">Shop with Confidence</h3>
                        <p class="summary">Every card on GemCard is graded by the world’s two largest third-party sports card authentication services. By cards directly or place a bid on an auction.</p>
                    </div>
                  </div>
                  <div class="item selling__item">
                    <div class="icon-cricle">
                        <i class="icon icon-getcards"></i>
                    </div>   
                    <div class="text">
                        <h3 class="title-l">Get Gem Mint Cards</h3>
                        <p class="summary">After you buy a card or place a winning bid, you can choose to have it mailed to you in 7-10 business days.</p>
                    </div>
                  </div>
              </div>
          </section>
      </div>


  </div>
</template>

<script>

  export default {
    layout: 'no_header_footer',
    head() {
        const Breadcrumb = {
            '@context': 'https://schema.org/',
            '@type': 'BreadcrumbList',
            'itemListElement': [
                {
                    '@type': 'ListItem',
                    position: 1 ,
                    'name' : 'Home' , 
                    'item' : process.env.HOST_NAME
                },{
                    '@type' : 'ListItem' , 
                    'position' : 2 , 
                    'name' : 'How It Works',
                    'item' : process.env.HOST_NAME + 'howitworks' 
                }
            ],
        };
        return {
             __dangerouslyDisableSanitizers: ['script'],//不對 script 標籤中內容做轉譯處理
            script: [
                { innerHTML: JSON.stringify(Breadcrumb), type: 'application/ld+json' }
            ],
            title: 'How to Sell Basketball Cards on GemCard | GemCard',
            meta: [
                // Primary Meta Tags
                { hid: 'description',name: 'description',content: 'This is the best marketplace for you to buy and sell sports cards. Free to join as a member. You can purchase, sell, and manage sports cards in a few clicks.' },
                { name: 'thumbnail', content: '' },
                // Facebook
                { property: 'og:url', content: process.env.HOST_NAME + 'howitworks'},
                { property: 'og:title', content: 'How to Sell Your Basketball Cards on GemCard | GemCard' },
                { property: 'og:description', content: 'This is the best marketplace for you to buy and sell sports cards. Free to join as a member. You can purchase, sell, and manage sports cards in a few clicks.' },
                { property: 'og:image', content: '/img/meta_ogImage_howitworks.jpg'},
                //等行銷部建置好再開啟：在Facebook for Developers 開設一個 App 並將 app_id 填入
                // { property: 'fb:app_id', content: ''}, 
                // Twitter
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:url', content: process.env.HOST_NAME + 'howitworks'},
                { name: 'twitter:title', content: 'How to Sell Your Basketball Cards on GemCard | GemCard' },
                { name: 'twitter:description', content: 'This is the best marketplace for you to buy and sell sports cards. Free to join as a member. You can purchase, sell, and manage sports cards in a few clicks.' },
                { name: 'twitter:image', content: process.env.HOST_NAME + 'img/meta_ogImage_howitworks.jpg'},
            ]
        }
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
        setTimeout(function() {
                var $loading = $('.loading');
                // $loading.addClass('fadeIn animated');
                $loading.delay( 100 ).queue(function () {
                    $(".slantMask-item:first-child .def,.slantMask-item:first-child .cover").addClass('fadeIn animated');
                    $(this).dequeue();
                });
                $loading.delay( 105 ).queue(function () {
                    $(".slantMask-item:last-child .def,.slantMask-item:last-child .cover").addClass('fadeIn animated');
                    $(this).dequeue();
                });
        }, 500);
    },
    methods: {
      onWaypoint_mainV ({ going, direction }) {
        if (going === this.$waypointMap.GOING_IN) {
          $(".mainV").addClass('fadeInUp animated').css('opacity','1');
        }
      },
      onWaypoint_buying ({ going, direction }) {
        if (going === this.$waypointMap.GOING_IN) {
          $(".buying").addClass('fadeInUp animated').css('opacity','1');
        }
      },
       onWaypoint_selling ({ going, direction }) {
        if (going === this.$waypointMap.GOING_IN) {
          $(".selling").addClass('fadeInUp animated').css('opacity','1');
        }
      },

    },
      
  }
</script>

<style lang="scss">
  @import "assets/css/base/default.scss";
  @import "assets/css/pages/main.scss";
  @import "assets/css/pages/subPage_howitworks_forapp.scss";
 
</style>