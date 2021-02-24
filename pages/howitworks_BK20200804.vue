<template>
  <div>
      <section class="mainV clearfix waypoint" v-waypoint="{ active: true, callback: onWaypoint_mainV, options: intersectionOptions }">
        <div class="mainV-bg">
            <div class="container">
                <div class="mainV-innerBox">
                    <div class="clip"></div>
                    <div class="mainV__img">
                        <img src="~assets/images/mainV2.png">
                    </div>
                    <div class="mainV__text">
                        <h1 class="title loading">
                            <div class="slantMask-item">
                                <span class="def">Sell Your</span>
                                <span class="cover"></span>
                            </div>
                            <div class="slantMask-item">
                                <span class="def">Cards Faster</span>
                                <span class="cover"></span>
                            </div>
                        </h1>
                        <h2 class="summary">
                            - Lower Commission<br>- Faster Trading<br>- Daily Market Trends
                        </h2>
                        <!-- <a href="#" class="btn btn-white">Learn More</a> -->
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      <div class="sectionBg">
          <section class="buying container waypoint" v-waypoint="{ active: true, callback: onWaypoint_buying, options: intersectionOptions }">
              <h2 class="heading-l txtCenter">Buying on GemCard</h2>
              <div class="stepList buying__stepList">
                  <div class="floatLeft">
                      <div class="item buying__item">
                        <div class="icon-cricle">
                            <i class="icon icon-buy"></i>
                        </div>
                        <div class="text">
                            <h3 class="title-l">Buy Or Bid</h3>
                            <p class="summary">Purchase immediately at the lowest ask or place a bid.</p>
                        </div>
                      </div>
                  </div>
                  <div class="floatRight">
                      <div class="item buying__item">
                        <div class="icon-cricle">
                            <i class="icon icon-getcards"></i>
                        </div>
                        <div class="text">
                            <h3 class="title-l">Get Cards</h3>
                            <p class="summary">Have the cards shipped to you, keep them consigned in your wallet, or put them back up for sale.</p>
                        </div>    
                      </div>
                      <span class="or">OR</span>
                      <div class="item buying__item">
                        <div class="icon-cricle">
                            <i class="icon icon-EarnMoney"></i>
                        </div>
                        <div class="text">
                            <div class="betterChoice">Better Choice</div>
                            <h3 class="title-l">Earn Money</h3>
                            <p class="summary">Store your cards on GemCard and trade at competitive prices at any time.</p>
                        </div>    
                      </div>
                  </div>
              </div>
          </section>

          <section class="selling container waypoint" v-waypoint="{ active: true, callback: onWaypoint_selling, options: intersectionOptions }">
              <h2 class="heading-l txtCenter">Selling on GemCard</h2>
              <div class="stepList selling__stepList">
                  <div class="item selling__item">
                    <div class="icon-cricle">
                        <i class="icon icon-shipping"></i>
                    </div>   
                    <div class="text">
                        <h3 class="title-l">Shipping</h3>
                        <p class="summary">Upload your cards for sale to the GemCard app and ship them to the designated shop for consignment.</p>
                    </div>
                  </div>
                  <div class="item selling__item">
                    <div class="icon-cricle">
                        <i class="icon icon-Authentication"></i>
                    </div>   
                    <div class="text">
                        <h3 class="title-l">Authentication</h3>
                        <p class="summary">GemCard confirms the authenticity of all items.</p>
                    </div>
                  </div>
                  <div class="item selling__item">
                    <div class="icon-cricle">
                        <i class="icon icon-discount"></i>
                    </div>   
                    <div class="text">
                        <h3 class="title-l">Set Price & Sell Cards</h3>
                        <p class="summary">Set your price for each card and edit your prices any time. When you sell cards you can review your transactions in your Wallet on the GemCard app.</p>
                    </div>
                  </div>
                  <div class="item selling__item">
                    <div class="icon-cricle">
                        <i class="icon icon-EarnMoney"></i>
                    </div>   
                    <div class="text">
                        <h3 class="title-l">Earn Money</h3>
                        <p class="summary">Withdraw part or all of your GemCard balance to PayPal at any time, or keep an active balance to shop for more cards.</p>
                    </div>
                  </div>
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
  @import "assets/css/pages/subPage_howitworks.scss";
 
</style>