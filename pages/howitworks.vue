<template>
  <div>

      <section class="mainV clearfix waypoint" v-waypoint="{ active: true, callback: onWaypoint_mainV, options: intersectionOptions }">
        <div class="mainV-bg">
          <div class="swiper swiperBox" v-swiper:swiper="swiperOption_banner" ref="swiperBox">
              <div class="swiper-wrapper container">
                  <div class="swiper-slide" v-for="(item,i) in banners" :key="i">
                      <div class="mainV-innerBox">
                          <div class="clip"></div>
                          <div class="mainV__img">
                              <img :src="require(`~/assets/images/${item.banner}`)">
                          </div>
                          <div class="mainV__text">
                              <h1 class="title loading">
                                <div class="slantMask-item">
                                    <span class="def def1">{{ item.title_line1 }}</span>
                                    <span class="cover cover1"></span>
                                </div>
                                <div class="slantMask-item">
                                    <span class="def def2">{{ item.title_line2 }}</span>
                                    <span class="cover cover2"></span>
                                </div>
                              </h1>
                              <h2 class="summary">
                                  <span class="displayBlock">{{ item.summary1 }}</span>
                                  <span class="displayBlock">{{ item.summary2 }}</span>
                                  <span class="displayBlock">{{ item.summary3 }}</span>
                              </h2>
                              <div class="btn btn-white" v-on:click="open_popup_DowloadApp() ; gtagTrack('Download_SellNow')">{{ item.btn }}</div>
                              <!-- <nuxt-link :to="item.btn_link" class="btn btn-white">{{ item.btn }}</nuxt-link> -->
                          </div>
                      </div>
                  </div>
              </div>
              <div class="swiper-pagination swp_banner"  slot="pagination"></div>
          </div>
        </div>
        <!-- <div class="mainV-bg">
            <div class="container">
                <div class="mainV-innerBox">
                    <div class="clip"></div>
                    <div class="mainV__img">
                        <img src="~assets/images/mainV.png">
                    </div>
                    <div class="mainV__text">
                        <h1 class="title loading">
                            <div class="slantMask-item">
                                <span class="def">Invest</span>
                                <span class="cover"></span>
                            </div>
                            <div class="slantMask-item">
                                <span class="def">Your Heroes</span>
                                <span class="cover"></span>
                            </div>
                        </h1>
                    </div>
                </div>
            </div>
        </div> -->
      </section>
      
      <div class="sectionBg">
          <section class="selling container waypoint" v-waypoint="{ active: true, callback: onWaypoint_selling, options: intersectionOptions }">
              <h2 class="heading-l txtCenter">{{ $t('howitworks.heading') }}</h2>
              <div class="stepList selling__stepList">
                  <div class="item selling__item">
                    <div class="icon-cricle">
                        <i class="icon icon-Authentication"></i>
                    </div>   
                    <div class="text">
                        <h3 class="title-l">{{ $t('howitworks.title_1') }}</h3>
                        <p class="summary">{{ $t('howitworks.summary_1') }}</p>
                    </div>
                  </div>
                  <div class="item selling__item">
                    <div class="icon-cricle">
                        <i class="icon icon-EarnMoney"></i>
                    </div>   
                    <div class="text">
                        <h3 class="title-l">{{ $t('howitworks.title_2') }}</h3>
                        <p class="summary">{{ $t('howitworks.summary_2') }}</p>
                    </div>
                  </div>
                  <div class="item selling__item">
                    <div class="icon-cricle">
                        <i class="icon icon-graded-cards"></i>
                    </div>   
                    <div class="text">
                        <h3 class="title-l">{{ $t('howitworks.title_3') }}</h3>
                        <p class="summary">{{ $t('howitworks.summary_3') }}</p>
                    </div>
                  </div>
                  <div class="item selling__item">
                    <div class="icon-cricle">
                        <i class="icon icon-getcards"></i>
                    </div>   
                    <div class="text">
                        <h3 class="title-l">{{ $t('howitworks.title_4') }}</h3>
                        <p class="summary">{{ $t('howitworks.summary_4') }}</p>
                    </div>
                  </div>
              </div>
          </section>
      </div>


  </div>
</template>

<script>
import {open_popup_DowloadApp} from 'assets/js/common.js';

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
            title: 'How to Buy & Sell Sports Cards on GemCard | GemCard',
            meta: [
                // Primary Meta Tags
                { hid: 'description',name: 'description',content: 'This is the best marketplace for you to buy and sell sports cards. Free to join as a member. You can purchase, sell, and manage sports cards in a few clicks.' },
                { name: 'thumbnail', content: '' },
                // Facebook
                { property: 'og:url', content: process.env.HOST_NAME + 'howitworks'},
                { property: 'og:title', content: 'How to Sell Your Sports Cards on GemCard | GemCard' },
                { property: 'og:description', content: 'This is the best marketplace for you to buy and sell sports cards. Free to join as a member. You can purchase, sell, and manage sports cards in a few clicks.' },
                { property: 'og:image', content: '/img/meta_ogImage_howitworks.jpg'},
                //等行銷部建置好再開啟：在Facebook for Developers 開設一個 App 並將 app_id 填入
                // { property: 'fb:app_id', content: ''}, 
                // Twitter
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:url', content: process.env.HOST_NAME + 'howitworks'},
                { name: 'twitter:title', content: 'How to Sell Your Sports Cards on GemCard | GemCard' },
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
        banners: [
          { 
            banner: 'mainV.png',
            title_line1: 'Invest',
            title_line2: 'Your Heroes',
            summary: '', 
            btn: 'Join Now',
            btn_link: '/howitworks' 
          },
        ],
        swiperOption_banner: {
            autoplay: {
              // delay: 6000,
              disableOnInteraction: false
            },
            loop: false,
            speed: 500,
            // notNextTick: true,
            slidesPerView: 1,
            // spaceBetween : 35,
            centeredSlides: false,
            pagination: {
                el: '.swiper-pagination.swp_banner',
                clickable: true
            },
            on: {
              slideChange() {
                // console.log('onSlideChangeEnd', this);
              },
              tap() {
                // console.log('onTap', this);
              },
              transitionStart: function(){
                setTimeout(function() {
                        var $loading = $('.swiper-slide-active');
                        $loading.delay( 100 ).queue(function () {
                            $(this).find(".def1,.cover1").addClass('fadeIn animated');//文字動畫
                            $(this).dequeue();
                        });
                        $loading.delay( 105 ).queue(function () {
                            $(this).find(".def2,.cover2").addClass('fadeIn animated');//文字動畫
                            $(this).dequeue();
                        });
                }, 500);
              },
              transitionEnd: function(){
              },
              init:function(){
                this.emit('transitionStart');//在初始化時觸發一次transitionStart事件
              },
            },
            autoplayDisableOnInteraction:false,
            // mousewheel: true,
            preloadImages: false,
            lazy: true
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
      open_popup_DowloadApp(){
          open_popup_DowloadApp();
      },
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