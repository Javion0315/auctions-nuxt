<template>
  <div>
     <section class="mainV clearfix waypoint" v-waypoint="{ active: true, callback: onWaypoint_mainV, options: intersectionOptions }">
            <div class="mainV-bg">
                <div class="swiper swiperBox" v-swiper:swiper="swiperOption_banner" ref="swiperBox">
                    <div class="swiper-wrapper container">
                        <div class="swiper-slide" v-for="(item,i) in carouseList" :key="i">
                            <div class="mainV-innerBox">
                                <div class="clip"></div>
                                <div class="mainV__img">
                                    <img :src="imgPath + item.image">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination swp_banner"  slot="pagination"></div>
                </div>
            </div>
     </section>

    <section> 
          <div class="container">
            <h1 class="heading-l txtCenter">GemCard Auction</h1>
            <!-- Featuring Auction Items -->
              <div class="mvp hotProduct__section">
                  <div class="hotProduct__section__head flexBetween">
                    <div>
                      <h2 class="title-m" style="font-weight: bold; font-size: 1.8rem; margin-bottom: 0.5rem;">Featuring Auction Items</h2>
                      <h5>BASEBALL CARDS / SPORT COLLECTIBLES / MEMORABILIA</h5>
                    </div>
                      
                      <div class="showall">
                        
                        <nuxt-link :to="localePath('featuring_items')" class="showall">
                            Show all <i class="icon icon-arrow-right"></i>
                        </nuxt-link>
                      </div>
                  </div>
                  <div class="mvpList slideList">
                      <div class="swiper swiperBox" v-swiper:swiper2="swiperOption_Items" ref="swiperBox2">
                          <div class="swiper-wrapper">
                              <div class="swiper-slide" v-for="(item, index) in items" :key="index">
                                  <div class="mvpList__item productList__item" v-if="index === 10">
                                      <nuxt-link :to="localePath('/product_ranking/hot_sales/silver')" class="seeMore">
                                          <span class="seeMore__text">See More</span>
                                      </nuxt-link>
                                  </div>
                                   <div class="mvpList__item productList__item" v-else>
                                      <nuxt-link :to="localePath({ name: 'product-pid', params: { pid: item.id }})" 
                                      @click.native="gtagTrack('HomePage_HotSale_Player')">
                                          <div class="productList__item__img product__imgMask">
                                              <img :src="imgPath + item.images[0]" :alt="item.title">
                                              <svg class="clip-svg imgMask" width="0" height="0">
                                                <defs>
                                                  <clipPath id="clip-shape" clipPathUnits="objectBoundingBox" >
                                                    <polygon points="0.02 0.06, 0.98 0.06, 0.98 0.93, 0.02 0.93" />
                                                  </clipPath>
                                                </defs>
                                              </svg>
                                          </div>
                                          <div class="text">
                                            <h4 class="title ellipsis" style="color: #001939">{{ item.title }}</h4>
                                            <div class="row">
                                              <div class="price" style="margin-bottom: 8px"><span class="lastSale">預估價: US{{ item.estimated_price }}</span>
                                              </div>
                                              <div style="display: flex; justify-content: space-between; width: 86%; height: 30px;">
                                                <div class="btn btn-solid" v-if="item.status === 1"
                                                  style="background-color: #C9B57E;
                                                    height: 25px;
                                                    display: flex;
                                                    justify-content: center;
                                                    align-items: center;
                                                    font-size: 12px;
                                                    margin: 10px 0px">
                                                  Bidding
                                                </div>
                                                <div class="btn btn-solid"
                                                  style="background-color: lightgray;
                                                    height: 25px;
                                                    display: flex;
                                                    justify-content: center;
                                                    align-items: center;
                                                    font-size: 12px;
                                                    margin: 10px 0px">
                                                  {{ item.bids }} Bids
                                                </div>
                                              </div>
                                              <div>
                                                <span class="lastSale" style="color: darkgray">{{ item.special_name }}                                          
                                                </span>
                                              </div>
                                              
                                            </div>
                                        </div>
                                      </nuxt-link>
                                  </div>
                              </div>
                          </div>
                          <div class="swiper-button-prev swp_Items" slot="button-prev"></div>
                          <div class="swiper-button-next swp_Items" slot="button-next"></div> 
                      </div>
                  </div>
              </div>
              <!-- Current Auctions -->
              <div class="rookie hotProduct__section">
                  <div class="hotProduct__section__head flexBetween">
                      <h3 class="title-m" style="font-weight: bold; font-size: 1.8rem; margin-bottom: 0.5rem;">Current Auctions</h3>
                      <div class="showall">
                        <nuxt-link :to="localePath('current_auction')" class="showall">
                            Show all <i class="icon icon-arrow-right"></i>
                        </nuxt-link>
                      </div>
                  </div>
                  <div class="rookieList slideList">
                      <div class="swiper swiperBox" v-swiper:swiper3="swiperOption_Current" ref="swiperBox3" style="height: 310px">
                          <div class="swiper-wrapper">
                              <div class="swiper-slide" v-for="(item, index) in currentList" :key="index">
                                  <div class="rookieList__item productList__item" v-if="index == 10">
                                    <nuxt-link :to="localePath('/product_ranking/rookie/silver')" class="seeMore">
                                      <span class="seeMore__text">See More</span>
                                    </nuxt-link>
                                  </div>
                                  <div class="rookieList__item productList__item" v-else>
                                    <nuxt-link :to="localePath({ name: 'auction-id', params: { id: item.id }})">
                                      <div class="product__imgMask"><img :src="imgPath + item.image" :alt="item.title"></div>
                                      <div class="text">
                                        <h4 class="title ellipsis" style="color: #001939">{{ item.title }}</h4>
                                        <div class="row">
                                          <div class="price" style="margin-bottom: 8px">
                                            <span class="lastSale" style="color: darkgray">{{ item.start_time }}-{{ item.end_time }}                                              
                                            </span>
                                          </div>
                                        </div>
                                      </div> 
                                    </nuxt-link>
                                  </div>
                              </div>
                          </div>
                          <div class="swiper-button-prev swp_Current" slot="button-prev"></div>
                          <div class="swiper-button-next swp_Current" slot="button-next"></div> 
                      </div>
                  </div>
              </div>

              <!-- Upcoming Auctions -->
               <div class="rookie hotProduct__section">
                  <div class="hotProduct__section__head flexBetween">
                      <h3 class="title-m" style="font-weight: bold; font-size: 1.8rem; margin-bottom: 0.5rem;">Upcoming Auctions</h3>
                      <div class="showall">
                        <nuxt-link :to="localePath('upcoming_auctions')" class="showall">
                            Show all <i class="icon icon-arrow-right"></i>
                        </nuxt-link>
                      </div>
                  </div>
                  <div class="rookieList slideList">
                      <div class="swiper swiperBox" v-swiper:swiper4="swiperOption_Upcoming" ref="swiperBox4" style="height: 310px">
                          <div class="swiper-wrapper">
                              <div class="swiper-slide" v-for="(item, index) in upcomingList" :key="index">
                                  <div class="rookieList__item productList__item" v-if="index == 10">
                                    <nuxt-link :to="localePath('/product_ranking/rookie/silver')" class="seeMore">
                                      <span class="seeMore__text">See More</span>
                                    </nuxt-link>
                                  </div>
                                  <div class="rookieList__item productList__item" v-else>
                                    <nuxt-link :to="localePath({ name: 'auction-id', params: { id: item.id }})">
                                      <div class="product__imgMask"><img :src="imgPath + item.image" :alt="item.title"></div>
                                      <div class="text">
                                        <h4 class="title ellipsis" style="color: #001939">{{ item.title }}</h4>
                                        <div class="row">
                                          <div class="price" style="margin-bottom: 8px">
                                            <span class="lastSale" style="color: darkgray">{{ item.start_time }}-{{ item.end_time }}                                              
                                            </span>
                                          </div>
                                        </div>
                                      </div> 
                                    </nuxt-link>
                                  </div>
                              </div>
                          </div>
                          <div class="swiper-button-prev swp_Upcoming" slot="button-prev"></div>
                          <div class="swiper-button-next swp_Upcoming" slot="button-next"></div> 
                      </div>
                  </div>
              </div>
          </div>
      </section>
  </div>
</template>

<script>

import 'assets/js/common.js'
import {open_popup_DowloadApp} from 'assets/js/common.js';

const moment = require('moment');

  export default {
    async fetch({ store }) {
      await store.dispatch("homePage/GET_HOMEPAGE_DATA");
    }, 
    components: {
    },
    head() {
        const Organization = {
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            'name': 'GemCard',
            'logo':process.env.HOST_NAME + '_nuxt/img/88fa1f4.svg',
            'description': 'GemCard app is a card trading platform that helps sports card collectors to access market trends and trade with confidence. This is the new future of sports cards trading. GemCard uses A.I. to collect market trends and help users to manage their collection & portfolio in a few clicks.',
            'url': process.env.HOST_NAME,
            //等行銷部建置好再開啟
            // 'sameAs': [
            //     'https://www.facebook.com/gemcard.official/',
            //     'https://www.instagram.com/gemcard_official/',
            //     '(GemCard Twitter 連結)',
            //     'https://gemcard.medium.com/'
            // ]
        };
        return {
            __dangerouslyDisableSanitizers: ['script'],//不對 script 標籤中內容做轉譯處理
            script: [
                { innerHTML: JSON.stringify(Organization), type: 'application/ld+json' },
            ],
            title: this.$i18n.locale === 'zh-cn' ? 'cn title(到時換成中文tite)' : 'GemCard | The Best App To Buy and Sell Sports Cards',
            meta: [
                // Primary Meta Tags
                { hid: 'description',name: 'description',content: 'GemCard app is a card trading platform that helps sports card collectors to access market trends and trade with confidence.' },
                { name: 'thumbnail', content: '' },
                // Facebook
                { property: 'og:url', content: process.env.HOST_NAME},
                { property: 'og:title', content: 'GemCard | The Best App to Buy and Sell Sports Cards' },
                { property: 'og:description', content: 'GemCard app is a card trading platform that helps sports card collectors to access market trends and trade with confidence.' },
                { property: 'og:image', content: '/img/meta_ogImage_homePage.jpg'},
                //等行銷部建置好再開啟：在Facebook for Developers 開設一個 App 並將 app_id 填入
                // { property: 'fb:app_id', content: ''},
                // Twitter
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:url', content: process.env.HOST_NAME},
                { name: 'twitter:title', content: 'GemCard | The Best App to Buy and Sell Sports Cards' },
                { name: 'twitter:description', content: 'GemCard app is a card trading platform that helps sports card collectors to access market trends and trade with confidence.' },
                { name: 'twitter:image', content: process.env.HOST_NAME + 'img/meta_ogImage_homePage.jpg'},
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
          // {
          //   banner: 'mainV2.png', 
          //   title_line1: 'Sell Your', 
          //   title_line2: 'Cards Faster', 
          //   summary1: '- Lower Commission', 
          //   summary2: '- Faster Trading', 
          //   summary3: '- Daily Market Trends', 
          //   btn: 'Learn More',
          //   btn_link: '/howitworks' 
          // }
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
        swiperOption_Items: {
            speed:1000,
            slidesPerView: 5,
            spaceBetween : 25,
            centeredSlides: false,
            pagination: {
                el: '.swiper-pagination.swp_Items',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next.swp_Items',
                prevEl: '.swiper-button-prev.swp_Items',
            },
            // mousewheel: true,
            preloadImages: false,
            lazy: true,
            breakpoints: {
              768:{
                spaceBetween : 30,
                centeredSlides: true,
                slidesOffsetBefore: -270,
                slidesPerView: 3.5,
                // initialSlide: 1,
              },
              450:{
                spaceBetween : 25,
                centeredSlides: true,
                slidesOffsetBefore: -70,
                slidesPerView: 1.7,
                // initialSlide: 1,
              }
            },

        },
        swiperOption_Current: {
            speed:1000,
            slidesPerView: 3,
            spaceBetween : 35,
            centeredSlides: false,
            pagination: {
                el: '.swiper-pagination.swp_Current',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next.swp_Current',
                prevEl: '.swiper-button-prev.swp_Current',
            },
            // mousewheel: true,
            preloadImages: false,
            lazy: true,
            breakpoints: {
              768:{
                spaceBetween : 28,
                centeredSlides: true,
                slidesOffsetBefore: -280,
                slidesPerView: 4.5,
              },
              450:{
                spaceBetween : 20,
                centeredSlides: true,
                slidesOffsetBefore: -105,
                slidesPerView: 2.7,
              }
            }
        },
        swiperOption_Upcoming: {
            speed:1000,
            slidesPerView: 3,
            spaceBetween : 35,
            centeredSlides: false,
            pagination: {
                el: '.swiper-pagination.swp_Upcoming',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next.swp_Upcoming',
                prevEl: '.swiper-button-prev.swp_Upcoming',
            },
            // mousewheel: true,
            preloadImages: false,
            lazy: true,
            breakpoints: {
              768:{
                spaceBetween : 28,
                centeredSlides: true,
                slidesOffsetBefore: -280,
                slidesPerView: 4.5,
              },
              450:{
                spaceBetween : 20,
                centeredSlides: true,
                slidesOffsetBefore: -105,
                slidesPerView: 2.7,
              }
            }
        },
        imgPath: '',
      }
    },
    computed: {
      currentList(){
        return this.$store.state.homePage.currentList;
      },
      items() {
        return this.$store.state.homePage.items;
      },
      upcomingList() {
        return this.$store.state.homePage.upcoming;
      },
      carouseList() {
        return this.$store.state.homePage.carouseList;
      }
    },
    filters: {
      setTime(value) {
        const getTime = moment.utc(value).valueOf(); // api的時間依時區轉換
        const now = (+new Date()); // 取得現在時間
        const isNewTime = now - getTime;
        const res = moment.duration(isNewTime).hours(); // 毫秒轉小時
        const isDays = '';
        if (res <= 1) {
          return 'Just now';
        } else if (res > 1 & res <= 24) {
          return `${res} hrs`;
        } else if (res > 24) {
          isDays = Math.floor(res/24);
          return `${isDays} days ago`;
        }
      },
      setPriceUp(value) {
        const num = value * 100;
        return num.toFixed(2);
      },
      setEbayPrice(value) {
        return Math.floor(value);
      },
    },
    created() {
      // this.getData();
      this.imgPath = process.env.IMAGE_DOMAIN;
    },
    mounted () {  
      window.addEventListener('scroll', this.hasScrolled);

    },
    methods: {
      onWaypoint_selling ({ going, direction }) {
        if (going === this.$waypointMap.GOING_IN) {
          $(".selling").addClass('fadeInUp animated').css('opacity','1');
        }
      },
      gtagTrack(eventName){
          gtag('event', eventName);
      },
      closeTopDownload(){
        closeTopDownload();
      },
      menuOpen(){
        menuOpen();
      },
      menuDropDown(){
        // var $this = this;
        $(".list__item").unbind('click').on('click',".dropdown-trigger", function(){
          var $self_parent = $(this).parents(".list__item"),
              $self_dropdown = $(this).siblings(".dropdown"),
              $near_dropdown = $self_parent.siblings().find(".dropdown");

          $self_dropdown.slideToggle("fast");
          $near_dropdown.slideUp("fast");
        });
      },
      showMobileSearch(){
          showMobileSearch();
      },
      MaskHide(){
          MaskHide();
      },
      onWaypoint_mainV ({ going, direction }) {
        // going: in, out
        // direction: top, right, bottom, left
        if (going === this.$waypointMap.GOING_IN) {
          // console.log('waypoint going in!')
          $(".mainV").addClass('fadeInUp animated').css('opacity','1');
        }
        // if (direction === this.$waypointMap.DIRECTION_TOP) {
        //   console.log('waypoint going top!')
        // }
      },
      onWaypoint_ourAdvantage ({ going, direction }) {
        if (going === this.$waypointMap.GOING_IN) {
          setTimeout(function(){
            $('.ourAdvantage__features-list .item').eq(0).addClass('fadeInUp animated').css('opacity','1');
          }, 400);
          setTimeout(function(){
            $('.ourAdvantage__features-list .item').eq(1).addClass('fadeInUp animated').css('opacity','1');
          }, 600);
          setTimeout(function(){
            $('.ourAdvantage__features-list .item').eq(2).addClass('fadeInUp animated').css('opacity','1');
          }, 800);
        }
      },
      // onWaypoint_news ({ going, direction }) {
      //   if (going === this.$waypointMap.GOING_IN) {
      //     $(".news").addClass('fadeInUp animated').css('opacity','1');
      //   }
      // },
      open_popup_DowloadApp(){
          open_popup_DowloadApp();
      },
      // tabClicked (selectedTab) {
      //      alert('Current tab re-clicked:' + selectedTab.tab.name);
      // },
      // tabChanged (selectedTab) {
      //     console.log('Tab changed to:' + selectedTab.tab.name);
      // },
      stopSwiper(){
            this.swiper.autoplay.stop()
      },
      startSwiper(){
          this.swiper.autoplay.start()
      },
    },
    beforeDestroy(){
        window.removeEventListener('scroll', this.hasScrolled);
    },
  }
</script>

<style lang="scss">
  @import "assets/css/base/default.scss";
  @import "assets/css/pages/main.scss";
  @import "assets/css/pages/subPage_howitworks.scss";
  
</style>


