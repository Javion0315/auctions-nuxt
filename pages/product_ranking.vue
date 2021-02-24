<template>
  <div>
    <client-only>
        <main class="product mainContent">
          <h2 class="heading-l txtCenter" v-if="pageParam === 'hot_sales'">HOT SALES</h2>
          <h2 class="heading-l txtCenter" v-else>ROOKIE</h2>
          <section class="product__ranking">
            <h3 class="title-l">
                NBA <span v-if="pageParam === 'hot_sales'">Hot Sales</span><span v-else>Rookie</span> 
                Of The Week Rankings :
            </h3>
            <div class="tabs-component stickyTop--normal" :class="{ 'stickyTop--hidden': !showNavbar ,'stickyTop--fixed': navbarFixed }">
              <ul class="tab_flex tabs-component-tabs">
                <div v-if="pageParam === 'hot_sales'" class="flexCenter">
                  <li class="tabs-component-tab" :class="{'is-active': param === '0'}"
                  @click="tabToogle('0'); gtagTrack('ProductRanking_HotSale_Silver')">
                    <nuxt-link :to="localePath('/product_ranking/hot_sales/silver')" class="tabs-component-tab-a">SILVER</nuxt-link>
                  </li>
                  <li class="tabs-component-tab" :class="{'is-active': param === '1'}"
                  @click="tabToogle('1'); gtagTrack('ProductRanking_HotSale_Base')">
                    <nuxt-link :to="localePath('/product_ranking/hot_sales/base')" class="tabs-component-tab-a">BASE</nuxt-link> 
                  </li>
                </div>
                <div v-else class="flexCenter">
                  <li class="tabs-component-tab" :class="{'is-active': param === '0'}"
                  @click="tabToogle('0'); gtagTrack('ProductRanking_Rookie_Silver')">
                    <nuxt-link :to="localePath('/product_ranking/rookie/silver')" class="tabs-component-tab-a">SILVER</nuxt-link>
                  </li>
                  <li class="tabs-component-tab" :class="{'is-active': param === '1'}"
                  @click="tabToogle('1'); gtagTrack('ProductRanking_Rookie_Base')">
                    <nuxt-link :to="localePath('/product_ranking/rookie/base')" class="tabs-component-tab-a">BASE</nuxt-link>
                  </li>
                </div>
              </ul>
            </div>
            <div class="hotProduct-top3">
              <div class="productList__item"
              :class="[{ 'no1': index == 0 },{ 'no2': index == 1 },{ 'no3': index == 2 }]"
              v-for="(item, index) in topThreeData" :key="index">
                   <nuxt-link :to="localePath({ name: 'product-pid', params: { pid: item.product.product_id }})">
                      <div class="img product__imgMask" :class="[{'icon-MVPbest': index <= 3 }]" v-if="pageParam === 'hot_sales'">
                        <img :src="imgPath + topThreeImg[index]" :alt="item.playerName">
                        <svg class="clip-svg imgMask" width="0" height="0">
                          <defs>
                            <clipPath id="clip-shape" clipPathUnits="objectBoundingBox" >
                              <polygon points="0.02 0.06, 0.98 0.06, 0.98 0.93, 0.02 0.93" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div class="img product__imgMask" :class="[{'icon-RCbest': index <= 3 }]" v-else>
                        <img :src="imgPath + topThreeImg[index]" :alt="item.playerName">
                      </div>
                      <div class="text">
                        <h4 class="title">{{ item.playerName }} {{ item.product.basecamp }} {{ item.product.subcamp }}</h4>
                        <div class="subtitle" v-if="index === 0">{{ item.product.is_rc === true ? 'RC' : '' }} {{ item.product.grader }} {{ item.product.grade }} {{ item.product.seasons }}</div>
                        <div class="btn-goldGradient-line">
                            <div class="row inner">
                              <div class="price">
                                <span class="lastSale">Last Sale</span>
                                <!-- <span class="dollar">US${{ Math.floor(item.ebayPrice) | currency }}</span> -->
                                <span class="dollar" v-if="item.gemcardPrice <= '0'">
                                    US$--
                                </span>
                                <span class="dollar" v-else>
                                    US${{ Math.floor(item.gemcardPrice)/100 | currency }}
                                </span>
                              </div>
                              <div class="btn btn-solid priceDown" :class="{'priceUp': item.priceUp >= 0 }" v-if="item.priceUp >= 0">
                                +{{ item.priceUp | setPriceUp }}%
                              </div>
                              <div class="btn btn-solid priceDown" :class="{'priceUp': item.priceUp >= 0 }" v-else>
                                {{ item.priceUp | setPriceUp }}%
                              </div>
                            </div>
                        </div>
                      </div>
                   </nuxt-link>
              </div>
            </div>
            <div class="hotProducts">
                <!-- <isotope :options="option"> -->
                    <div class="infinite-scroll">
                          <div class="infinite-scroll-list">
                            <div class="productList__item infinite-scroll-list-item" 
                            v-for="(item,index) in otherData" :key="index">
                                  <nuxt-link :to="localePath({ name: 'product-pid', params: { pid: item.product.product_id }})">
                                    <div class="product__imgMask">
                                      <img :src="imgPath + otherImg[index]" :alt="item.playerName">
                                    </div>
                                    <div class="text">
                                        <h4 class="title ellipsis">{{ item.playerName }} {{ item.product.basecamp }} {{ item.product.subcamp }}</h4>
                                        <div class="row">
                                            <div class="price">
                                              <span class="lastSale">Last Sale</span>
                                              <!-- <span class="dollar">US${{ Math.floor(item.ebayPrice) | currency }}</span> -->
                                              <span class="dollar" v-if="item.gemcardPrice <= '0'">
                                                  US$--
                                              </span>
                                              <span class="dollar" v-else>
                                                  US${{ Math.floor(item.gemcardPrice)/100 | currency }}
                                              </span>
                                            </div>
                                            <div class="btn btn-solid priceDown" :class="{'priceUp': item.priceUp >= 0 }" v-if="item.priceUp >= 0">
                                            +{{ item.priceUp | setPriceUp }}%
                                            </div>
                                            <div class="btn btn-solid priceDown" :class="{'priceUp': item.priceUp >= 0 }" v-else>
                                              {{ item.priceUp | setPriceUp }}%
                                            </div>
                                        </div>
                                    </div>
                                </nuxt-link>
                            </div>
                          </div>
                      </div>
                      <infinite-loading spinner="spiral" :identifier="infiniteId"  @infinite="infiniteHandler"></infinite-loading>
                <!-- </isotope> -->
            </div>
          </section>
        </main>
    </client-only>    
  </div>
</template>

<script>
import 'assets/js/common.js'
import {open_popup_DowloadApp} from 'assets/js/common.js';
import {filter_slideToggle} from 'assets/js/common.js';
import {gotop} from 'assets/js/common.js';
import {getLeaderboard} from '~/api/leaderboard';

const moment = require('moment');

  export default {
    name: 'InfiniteScroll',
    head() {
        const currentURL = this.$route.path.split("/"); // 把Url通過/截成多份
        const currentSeries_URL = currentURL[2]; //只取網址中其中一層路徑：球卡的Series
        const currentSeries_txt = currentSeries_URL.replace('_',' '); //只取網址中其中一層路徑：球卡的Series
        const Breadcrumb = {
            '@context': 'https://schema.org/',
            '@type': 'BreadcrumbList',
            'itemListElement': [
                {
                    '@type': 'ListItem',
                    'position' : 1 ,
                    'name' : 'Home' , 
                    'item' : process.env.HOST_NAME
                },{
                    '@type' : 'ListItem' , 
                    'position' : 2 , 
                    'name' : 'NBA Cards Of The Week Rankings',  
                    'item' : process.env.HOST_NAME + `product_ranking/${currentSeries_URL}/silver`
                }
            ],
        };
        if(currentSeries_URL == 'hot_sales'){
          return {
              __dangerouslyDisableSanitizers: ['script'],//不對 script 標籤中內容做轉譯處理
              script: [
                  { innerHTML: JSON.stringify(Breadcrumb), type: 'application/ld+json' }
              ],
              title: 'The Most Popular Graded Cards of the Week | GemCard',
              meta: [
                  // Primary Meta Tags
                  { hid: 'description',name: 'description',content: 'Weekly Hot Sales Ranking｜The most popular graded sports cards are listed in GemCard. The last sale and up-and-downs are clearly shown on the leaderboard.' },
                  { name: 'thumbnail', content: '' },
                  // Facebook
                  { property: 'og:url', content: process.env.HOST_NAME + `product_ranking/${currentSeries_URL}/silver`},
                  { property: 'og:title', content: 'The Most Popular Graded Cards of the Week | GemCard' },
                  { property: 'og:description', content: 'Weekly Hot Sales Ranking｜The most popular graded sports cards are listed in GemCard. The last sale and up-and-downs are clearly shown on the leaderboard.' },
                  // { property: 'og:image', content: '/img/meta_ogImage_productRanking.jpg'},
                  //等行銷部建置好再開啟：在Facebook for Developers 開設一個 App 並將 app_id 填入
                  // { property: 'fb:app_id', content: ''},
                  // Twitter
                  { property: 'twitter:card', content: 'summary_large_image' },
                  { property: 'twitter:url', content: process.env.HOST_NAME + `product_ranking/${currentSeries_URL}/silver`},
                  { property: 'twitter:title', content: 'The Most Popular Graded Cards of the Week | GemCard' },
                  { property: 'twitter:description', content: 'Weekly Hot Sales Ranking｜The most popular graded sports cards are listed in GemCard. The last sale and up-and-downs are clearly shown on the leaderboard.' },
                  // { property: 'twitter:image', content: '/img/meta_ogImage_productRanking.jpg'},
              ]
          }
        }else if(currentSeries_URL == 'rookie'){
          return {
              __dangerouslyDisableSanitizers: ['script'],//不對 script 標籤中內容做轉譯處理
              script: [
                  { innerHTML: JSON.stringify(Breadcrumb), type: 'application/ld+json' }
              ],
              title: `The Most Valuable Graded ${currentSeries_txt} on GemCard | GemCard`,
              meta: [
                  // Primary Meta Tags
                  { hid: 'description',name: 'description',content: 'Weekly Rookie Cards Ranking｜The most popular rookie cards are listed in GemCard. The last sale and up-and-downs are clearly shown on the leaderboard.' },
                  { name: 'thumbnail', content: '' },
                  // Facebook
                  { property: 'og:url', content: process.env.HOST_NAME + `product_ranking/${currentSeries_URL}/silver`},
                  { property: 'og:title', content: `The Most Valuable Graded ${currentSeries_txt} on GemCard | GemCard` },
                  { property: 'og:description', content: 'Weekly Rookie Cards Ranking｜The most popular rookie cards are listed in GemCard. The last sale and up-and-downs are clearly shown on the leaderboard.' },
                  // { property: 'og:image', content: '/img/meta_ogImage_productRanking.jpg'},
                  //等行銷部建置好再開啟：在Facebook for Developers 開設一個 App 並將 app_id 填入
                  // { property: 'fb:app_id', content: ''},
                  // Twitter
                  { name: 'twitter:card', content: 'summary_large_image' },
                  { name: 'twitter:url', content: process.env.HOST_NAME + `product_ranking/${currentSeries_URL}/silver`},
                  { name: 'twitter:title', content: `The Most Valuable Graded ${currentSeries_txt} on GemCard | GemCard` },
                  { name: 'twitter:description', content: 'Weekly Rookie Cards Ranking｜The most popular rookie cards are listed in GemCard. The last sale and up-and-downs are clearly shown on the leaderboard.' },
                  // { name: 'twitter:image', content: 'https://www.gemcard.co/img/meta_ogImage_productRanking.jpg'},
              ]
          }
        }
    },
    async asyncData({ route }) {
      let series = route.params.id;
      let param = route.path.split(`${series}/`)[1];
      // console.log(route.params);
      return await getLeaderboard(series, param).then((res) => {
        // console.log(res.config.url.split("/"));
        return { asyncDataInfo: res.config };
      });
    },
    data () {
      return {
        //tab: Silver / Base
        showNavbar: true,
        navbarFixed: false,
        lastScrollPosition: 0,
        scrollValue: 0,
        //產品資料
        intersectionOptions: {
          root: null,
          rootMargin: '0px 0px 0px 0px',
          // threshold: [0, 1] // [0.25, 0.75] if you want a 25% offset!
          threshold: [0.25, 0.75],
        },
        sortOption: null,
        option: {
          getSortData: {
            name: "title",
            price: "price",
          },
        },
        allData: [],
        topThreeData: [],
        topThreeImg: [],
        otherData: [],
        otherImg: [],
        pageParam: '',
        currentPage: 1,
        param: '0',
        concatData: [],
        getOtherImg: [],
        infiniteId: +new Date(),
        imgPath: '',
      }
    },
    mounted () {
        // this.lastScrollPosition = window.pageYOffset
        window.addEventListener('scroll', this.onScroll);
        
    },
    watch: {
      // 如果路由有變動，會再次執行該methods
      "$route": "getSaleSilver",
      "$route": "navBarToogle",
    },
    beforeDestroy(){
        window.removeEventListener('scroll', this.onScroll);
    },
    filters: {
      setPriceUp(value) {
        const num = value * 100;
        return num.toFixed(2);
      },
    },
    created() {
      this.imgPath = process.env.IMAGE_DOMAIN;
    },
    methods: {
      navBarToogle() {
        this.param = '0';
        this.resetData();
        this.infiniteId += 1;
      },
      tabToogle(param) {
        this.param = param;
        this.resetData();
        this.infiniteId += 1;
      },
      resetData() {
        this.currentPage = 1;
        this.allData = [];
        this.topThreeData = [];
        this.otherData = [];
        this.topThreeImg = [];
        this.otherImg = [];
      },
      infiniteHandler($state) {
        this.getSaleSilver($state);
      },
      async getSaleSilver($state) {
        this.pageParam = this.$route.params.id;
        let series = this.pageParam;
        let getArrParam = [];
        let param = '';
        let getArrLastValue = '';
        if (this.param === '0') {
          param = this.param;
        } else if (this.param === '1') {
          param = this.param;
        } else {
          getArrParam = this.param.path.split('/');
          getArrLastValue = getArrParam[getArrParam.length-1];
          if (getArrLastValue === 'silver') {
            param = '0';
          } else {
            param = '1';
          }
        }
        
        await getLeaderboard(series, param).then(res => {
          if (res.data.data.length) {
            if (this.currentPage === 1) {
              this.allData = res.data.data;
              // 取得silver前3筆的資料
              this.topThreeData = this.allData.slice(0, 3);
              // 取得前3筆的圖片
              for (let i = 0; i <= this.topThreeData.length; i++) {
                if (this.topThreeData[i]) {
                  const getTopThreeImg = JSON.parse(this.topThreeData[i].product.image);
                  this.topThreeImg.push(getTopThreeImg[0].url);
                }
              }
            } else {
              // 取得從第4筆開始的資料
              this.otherData = this.otherData.concat(res.data.data.slice(3, this.allData.length));
              // 取得從第4筆開始的圖片
              this.concatData = this.allData.slice(3, this.allData.length);
              this.concatData.forEach((item) => {
                this.getOtherImg = JSON.parse(item.product.image);
                this.otherImg.push(this.getOtherImg[0].url);
              });
              $state.complete();
            }
            this.currentPage++;
            $state.loaded();
          }
        }).catch(function (error) {
          console.log(error);
        }); 
      },
      sort(key) {
        this.sortOption = key;
      },
      closeTopDownload() {
        closeTopDownload();
      },
      menuOpen() {
        menuOpen();
      },
      menuDropDown() {
        // var $this = this;
        $(".list__item").unbind('click').on('click',".dropdown-trigger", function(){
          var $self_parent = $(this).parents(".list__item"),
              $self_dropdown = $(this).siblings(".dropdown"),
              $near_dropdown = $self_parent.siblings().find(".dropdown");

          $self_dropdown.slideToggle("fast");
          $near_dropdown.slideUp("fast");
        });
      },
      showMobileSearch() {
        showMobileSearch();
      },
      MaskHide() {
        MaskHide();
      },
      onScroll() {
        const OFFSET = 60;
        const headerHeight = 30;
        if (window.pageYOffset < 0) {
            return
        }
        if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
            return
        }
        this.navbarFixed = window.pageYOffset > OFFSET && window.pageYOffset < this.lastScrollPosition
        this.showNavbar = window.pageYOffset < this.lastScrollPosition
        this.lastScrollPosition = window.pageYOffset
        // console.log(this);
      },
      open_popup_DowloadApp() {
        open_popup_DowloadApp();
      },
      filter_slideToggle() {
        filter_slideToggle();
      },
      gotop() {
        gotop();
      },
      gtagTrack(eventName){
            gtag('event', eventName);
      },
    },
  }
</script>

<style lang="scss"> 
  @import "assets/css/base/default.scss";
  @import "assets/css/pages/subPage_product_ranking.scss";
  
  .infinite-scroll {
    display: flex;
    flex-direction: column;
    justify-content: center;
    // width: 680px;
    // margin: 100px 0;
  }

  .infinite-scroll-list-item {
    // height: 60px;
    // margin: 10px 0;
    // border-bottom: 1px solid #eaeaea;
    // padding-bottom: 10px;
  }
  .tab {
    padding-top: 10px;
  }
  .tab_flex {
    display: flex;
    margin: 0 auto;
    padding: 2px;
    background: linear-gradient(45deg, #D0A96B 0%, #F0DEAB 19%, #DFC58A 30%, #D0A96B 33%, #F3E9C5 61%, #F8F6DB 67%, #F5F2D3 67%, #ECE1B5 69%, #E4D59E 72%, #DFCC8E 74%, #DCC784 76%, #DBC581 80%, #D6BE7B 84%, #C8AB6B 89%, #B28B51 96%, #A37640 100%);
    border-radius: 7px;

    li {
      width: calc(100% / 2);
      text-align: center;
      font-weight: 600;
      font-size: 1.5rem;
      border-radius: 7px;

      &.active {
        background:#ccc;
      }
    }
  }
</style>