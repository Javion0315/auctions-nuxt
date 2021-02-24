<template>
  <div>
      <div class="product-detail mainContent" v-for="(item, index) in productData" :key="index">
          <div class="location container">
              <nuxt-link to="/">Home</nuxt-link>  /  <nuxt-link to="/product_ranking/hot_sales/silver">Hot Product</nuxt-link>  / 
              <span class="current">
                {{ item.product.player }} {{ item.product.basecamp }} {{ item.product.subcamp }}
                {{ item.product.is_rc === true ? 'RC' : '' }} {{ item.product.grader }}{{ item.product.grade }} {{ item.product.seasons }}
              </span>
          </div>
         <div class="market-summary-wp stickyTop--normal" :class="{ 'stickyTop--hidden': !showNavbar ,'stickyTop--fixed': navbarFixed }">
                <!-- <section class="product-detail__header container-mobileFullWidth"> -->
                    <section class="market-summary container-mobileFullWidth">
                        <div class="market-summary__group row">
                            <div class="market-summary__grade row alert-trigger" 
                            @click="alert_slect_grade() ; gtagTrack('Product_Grade')">
                                <div class="grade"> 
                                    <div class="text1">GRADE</div>
                                    <div class="text2">{{ item.product.grader }}{{ item.product.grade }}</div>
                                </div>
                                <i class="icon icon-arrow-bottom"></i>
                            </div>
                            <!-- View All Ask -->
                            <div class="market-summary__button">
                                <!-- <div class="view-price alert-trigger" 
                                @click="alert_view_all_ask() ; gtagTrack('Product_ViewAllAsk')">View All Ask</div> -->
                                <div class="view-price alert-trigger" ></div>
                                <div class="market-summary__buy-button row btn" 
                                @click="open_popup_DowloadApp() ; gtagTrack('Product_Buy')">
                                    <div class="status">
                                        <!-- <div class="subtitle">LOWEST ASK</div> -->
                                        <div class="value">${{ item.product.sell &lt; 1 ? '--' : item.product.sell }}</div>
                                    </div>
                                    <h3 class="title">BUY</h3>
                                </div>
                            </div>
                            <!-- View All Bid -->
                            <!-- <div class="market-summary__button"> -->
                                <!-- <div class="view-price alert-trigger" 
                                @click="alert_view_all_bid() ; gtagTrack('Product_ViewAllBid')">View All Bid</div>
                                <div class="view-price alert-trigger" ></div>
                                <div class="market-summary__sell-button row btn" 
                                @click="open_popup_DowloadApp() ; gtagTrack('Product_Sell')">
                                    <div class="status">
                                        <div class="subtitle">HIGHEST BID</div>
                                        <div class="value">$ {{ item.product.buy &lt; 1 ? '--' : item.product.buy }}</div>
                                    </div>
                                    <h3 class="title">SELL</h3>
                                </div> -->
                            <!-- </div> -->
                        </div>
                        <div class="market-summary__bg-pattern"></div>
                    </section>
                <!-- </section> -->
                <div class="view-all-ask alert container-mobileFullWidth">
                    <div class="market-summary__group">
                        <div class="close_btn" v-on:click="closeAlert">
                            <i class="icon icon-close"></i>
                        </div>
                        <div class="inner-wp view-all-price__content-wp">
                            <!-- <tabs :options="{ useUrlFragment: false }" @clicked="tabClicked" @changed="tabChanged" cache-lifetime="0" class="tab-sty1"> -->
                            <tabs :options="{ defaultTabHash: 'first-tab' }" class="tab-sty1" cache-lifetime="0">
                                <tab id="first-tab" name="ASKS">
                                    <table class="view-all-price__table" v-if="item.ask.length !== 0">
                                        <thead>
                                            <tr>
                                                <th class="grade">GRADE</th>
                                                <th class="price">PRICE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(askItem, askIndex) in item.ask" :key="askIndex">
                                                <td class="grade">{{ item.product.grader }}{{ item.product.grade }}</td>
                                                <td class="price">US${{ askItem }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table v-else>
                                        <span>No data available</span>
                                    </table>
                                </tab>
                                <tab id="second-tab" name="BIDS">
                                    <table class="view-all-price__table" v-if="item.bid.length !== 0">
                                        <thead>
                                            <tr>
                                                <th class="grade">GRADE</th>
                                                <th class="price">PRICE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(askItem, askIndex) in item.bid" :key="askIndex">
                                                <td class="grade">{{ item.product.grader }}{{ item.product.grade }}</td>
                                                <td class="price">US${{ askItem }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table v-else>
                                        <span>No data available</span>
                                    </table>
                                </tab>
                            </tabs>
                        </div>
                    </div>
                </div>
                <div class="view-all-bid alert container-mobileFullWidth">
                    <div class="market-summary__group">
                        <div class="close_btn" v-on:click="closeAlert">
                            <i class="icon icon-close"></i>
                        </div>
                        <div class="inner-wp view-all-price__content-wp">
                            <tabs :options="{ defaultTabHash: 'second-tab' }" class="tab-sty1">
                                <tab id="first-tab" name="ASKS">
                                    <table class="view-all-price__table" v-if="item.ask.length !== 0">
                                        <thead>
                                            <tr>
                                                <th class="grade">GRADE</th>
                                                <th class="price">PRICE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(askItem, askIndex) in item.ask" :key="askIndex">
                                                <td class="grade">{{ item.product.grader }}{{ item.product.grade }}</td>
                                                <td class="price">US${{ askItem }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table v-else>
                                        <span>No data available</span>
                                    </table>
                                </tab>
                                <tab id="second-tab" name="BIDS">
                                    <table class="view-all-price__table" v-if="item.bid.length !== 0">
                                        <thead>
                                            <tr>
                                                <th class="grade">GRADE</th>
                                                <th class="price">PRICE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(askItem, askIndex) in item.bid" :key="askIndex">
                                                <td class="grade">{{ item.product.grader }}{{ item.product.grade }}</td>
                                                <td class="price">US${{ askItem }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table v-else>
                                        <span>No data available</span>
                                    </table>
                                </tab>
                            </tabs>
                        </div>
                    </div>
                </div>
                <div class="slect-grade alert container-mobileFullWidth">
                    <div class="market-summary__group">
                        <div class="close_btn" v-on:click="closeAlert">
                            <i class="icon icon-close"></i>
                        </div>
                        <div class="inner-wp slect-grade__content-wp">
                                <div class="slect-grade__content">
                                <div class="title title-blueGradient txtCenter">PSA</div>
                                <div class="slect-grade__content__button row">
                                    <div v-for="(isPsa, psaIndex) in psaPrice" :key="psaIndex">
                                        <div class="btn row" @click="changeGrader(isPsa.product_id) ; closeAlert()"
                                        :class="{ active: isPid == isPsa.product_id }">
                                            <div class="value">$ {{ isPsa.sell &lt; 1 ? '--' : isPsa.sell }}</div>
                                            <div class="title" 
                                            @click="gtagTrack('Product_Grade_'+ `${isPsa.grader + isPsa.grade}`)">
                                                {{ isPsa.grader }}<span class="displayBlock">{{ isPsa.grade }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="title title-blueGradient txtCenter">BGS</div>
                                <div class="slect-grade__content__button row">
                                    <div v-for="(isBgs, bgsIndex) in bgsPrice" :key="bgsIndex">
                                        <div class="btn row" @click="changeGrader(isBgs.product_id) ; closeAlert()"
                                        :class="{'disable' : isBgs.status === '0', active: isPid == isBgs.product_id}">
                                            <div class="value">$ {{ isBgs.sell &lt; 1 ? '--' : isBgs.sell }}</div>
                                            <div class="title" 
                                            @click="gtagTrack('Product_Grade_'+ `${isBgs.grader + isBgs.grade}`)">
                                                {{ isBgs.grader }}<span class="displayBlock">{{ isBgs.grade }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div class="market-summary__bg-pattern"></div>
                        </div>
                    </div>
                </div>
         </div>
          <main class="product-detail__content container">
              <section class="pd-info">
                  <div class="swiper swiperBox" v-swiper:swiper4="swiperOption_product_img" ref="swiperBox4">
                        <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(imgItem, idx) in productImg" :key="idx">
                                    <div class="pd-info__img product__imgMask">
                                        <img :src="imgPath + imgItem.url" :alt="item.product.title" >
                                        <svg class="clip-svg imgMask" width="0" height="0">
                                            <defs>
                                                <clipPath id="clip-shape" clipPathUnits="objectBoundingBox" >
                                                <polygon points="0.02 0.06, 0.98 0.06, 0.98 0.93, 0.02 0.93" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                        </div>
                        <div class="swiper-pagination swp_pdImg" slot="pagination"></div>
                        <div class="swiper-button-prev swp_pdImg" slot="button-prev"></div>
                        <div class="swiper-button-next swp_pdImg" slot="button-next"></div> 
                  </div>


                  <h1 class="pd-info__title">
                      <div class="title">{{ item.product.player }} {{ item.product.basecamp }} {{ item.product.subcamp }}</div>
                      <div class="subtitle">{{ item.product.is_rc === true ? 'RC' : '' }} {{ item.product.grader }}{{ item.product.grade }} {{ item.product.seasons }}</div>
                  </h1>
                  <div class="pd-info__share btn btn-goldGradient-line">
                      <div class="inner" v-on:click="social_sharing">SHARE</div>
                  </div>
                  <div class="social_sharing alert">
                        <social-sharing url="https://vuejs.org/" inline-template>
                            <div>
                                <!-- <network network="email">
                                    <i class="icon icon-mail" title="Email"></i> Email
                                </network> -->
                                <network network="facebook">
                                <i class="icon icon-fb" title="Facebook"></i> Facebook
                                </network>
                                <network network="googleplus">
                                <i class="icon icon-google-plus" title="Google +"></i> Google +
                                </network>
                                <network network="reddit">
                                <i class="icon icon-reddit" title="Reddit"></i> Reddit
                                </network>
                                <network network="twitter">
                                <i class="icon icon-twitter" title="Twitter"></i> Twitter
                                </network>
                                <!-- <network network="skype">
                                <i class="icon icon-skype" title="Skype"></i> Skype
                                </network>
                                <network network="whatsapp">
                                <i class="icon icon-whatsapp" title="Whatsapp"></i> Whatsapp
                                </network> -->
                                <network network="line">
                                <i class="icon icon-chat" title="Line"></i> Line
                                </network>
                                <network network="weibo">
                                <i class="icon icon-sina-weibo" title="Weibo"></i> Weibo
                                </network> 
                            </div>
                        </social-sharing>
                  </div>
                  <h2 class="pd-info__lastSale">
                        <!-- v-if="item.ebayTransactions.length !== 0" -->
                        LAST SALE
                        <span class="price" v-if="item.gemcardPrice.price <= '0'">
                            US$--
                        </span>
                        <span class="price" v-else>
                            US${{ Math.floor(item.gemcardPrice.price)/100 | currency }}
                            <!-- ${{ item.ebayTransactions[0].price &lt; 1 ? '--' : Math.floor(item.ebayTransactions[0].price) | currency }} -->
                        </span>
                  </h2>
              </section>
              <section class="pd-sales-data">
                  <div class="overlay-data">
                      <h2 class="title-l title-goldGradient txtCenter">LATEST SALES</h2>
                      <!-- <picture>
                          <source srcset="~/assets/images/sales_data_Mobile.png" media="(min-width: 768)">
                          <img src="~/assets/images/sales_data_PC.png" alt="sales data">
                      </picture> -->
                      <img class="responsiveImg" v-if="$mq==='mobile'" :src="require(`~/assets/images/${responsiveImg.img_mobile}`)">
                      <img class="responsiveImg" v-else :src="require(`~/assets/images/${responsiveImg.img_desktop}`)">
                      <div class="overlay-data__text">
                          <div class="text">Log in the APP for free to view all recent sales data</div>
                          <div class="btn btn-secondary"  v-if="$mq === 'mobile'" 
                          @click="openApp() ; gtagTrack('Product_DownloadLink_OpenApp')">Open In APP</div>
                          <div class="btn btn-secondary" v-else 
                          @click="open_popup_DowloadApp() ; gtagTrack('Product_DownloadLink_OpenApp')">Open In APP</div>
                      </div>
                  </div>
              </section>
          </main>

      </div>

  </div>
</template>

<script>
import 'assets/js/common.js'
import {open_popup_DowloadApp} from 'assets/js/common.js';
import {closeAlert} from 'assets/js/common.js';
import {showBlackOverlay} from 'assets/js/common.js';
import {getProductId, getProduct} from '~/api/product.js';

const moment = require('moment');

//fix : "ReferenceError: navigator is not defined"
// global.navigator = {userAgent: 'node.js'};

  export default {
    head() {
        const img = this.asyncDataInfoA.product.image;
        const replaceImg = JSON.parse(img)[0].url; // 字串轉物件
        const Product = {
            '@context': 'https://schema.org/',
            '@type': 'Product',
            'name': this.asyncDataInfoA.product.title,
            'image': process.env.IMAGE_DOMAIN + replaceImg,
            'description': 'View ' + this.asyncDataInfoA.product.player + ' basketball card values based on real selling prices.',
            'sku': this.asyncDataInfoA.product.product_id,
            'brand': {
                '@type': 'Brand',
                'name': this.asyncDataInfoA.product.basecamp
            },
            'offers': {
                '@type': 'Offer',
                'url': process.env.HOST_NAME + `product/${this.asyncDataInfoA.product.product_id}`,
                'priceCurrency': 'USD',
                'price': this.asyncDataInfoA.gemcardPrice.price ,
                'availability': 'https://schema.org/InStock'
            }
            
        };
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
                    'name' : this.asyncDataInfoA.product.title ,  
                    'item' : process.env.HOST_NAME + `product/${this.asyncDataInfoA.product.product_id}`
                }
            ],
        };
        return {
            __dangerouslyDisableSanitizers: ['script'],//不對 script 標籤中內容做轉譯處理
            script: [
                { innerHTML: JSON.stringify(Product), type: 'application/ld+json' },
                { innerHTML: JSON.stringify(Breadcrumb), type: 'application/ld+json' }
            ],
            title: `${this.asyncDataInfoA.product.player} ${this.asyncDataInfoA.product.is_rc === true ? 'Rookie Card' : 'Basketball Card'} ${this.asyncDataInfoA.product.basecamp} - Price Guide | GemCard`,
            meta: [
                // Primary Meta Tags
                { hid: 'description',name: 'description',content: `The real time price trend of ${this.asyncDataInfoA.product.player}’s ${this.asyncDataInfoA.product.is_rc === true ? 'RC' : 'basketball card'} is here. GemCard provides the recent sales data of both base and silver. It helps to buy or sell in a good timing.` },
                { name: 'thumbnail', content: process.env.IMAGE_DOMAIN + replaceImg },
                // Facebook
                { property: 'og:url', content: `${this.asyncDataInfoA.product.product_id}`},
                { property: 'og:title', content: `${this.asyncDataInfoA.product.player} ${this.asyncDataInfoA.product.is_rc === true ? 'Rookie Card' : 'Basketball Card'} ${this.asyncDataInfoA.product.basecamp} - Price Guide | GemCard` },
                { property: 'og:description', content: `The real time price trend of ${this.asyncDataInfoA.product.player}’s ${this.asyncDataInfoA.product.is_rc === true ? 'RC' : 'basketball card'} is here. GemCard provides the recent sales data of both base and silver. It helps to buy or sell in a good timing.` },
                { property: 'og:image', content: process.env.IMAGE_DOMAIN + replaceImg },
                //等行銷部建置好再開啟：在Facebook for Developers 開設一個 App 並將 app_id 填入
                // { property: 'fb:app_id', content: ''},
                // Twitter
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:url', content: `${this.asyncDataInfoA.product.product_id}`},
                { name: 'twitter:title', content: `${this.asyncDataInfoA.product.player} ${this.asyncDataInfoA.product.is_rc === true ? 'Rookie Card' : 'Basketball Card'} ${this.asyncDataInfoA.product.basecamp} - Price Guide | GemCard` },
                { name: 'twitter:description', content: `The real time price trend of ${this.asyncDataInfoA.product.player}’s ${this.asyncDataInfoA.product.is_rc === true ? 'RC' : 'basketball card'} is here. GemCard provides the recent sales data of both base and silver. It helps to buy or sell in a good timing.` },
                { name: 'twitter:image', content: process.env.IMAGE_DOMAIN + replaceImg },
            ]
        }
    },
    async asyncData({ route }) {
      let id = route.params.pid;
      return await getProductId(id).then((res) => {
        return { asyncDataInfoA: res.data };
      });
    },

    data () {
      return {        
        asyncDataInfo: [],
        productData: [],
        pagePid: '',
        price: [],
        productImg: [],
        bgsPrice: [],
        psaPrice: [],
        isPid: '',
        isActive: false,
        responsiveImg: {
            img_desktop:'sales_data_PC.png',
            img_mobile:'sales_data_Mobile.png',
        },
        swiperOption_product_img: {
            speed:1000,
            slidesPerView: 1,
            spaceBetween : 25,
            centeredSlides: false,
            pagination: {
                el:'.swiper-pagination.swp_pdImg',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next.swp_pdImg',
                prevEl: '.swiper-button-prev.swp_pdImg',
            },
            preloadImages: false,
            lazy: true,
        },
        // market-summary （select Grade)
        showNavbar: true,
        navbarFixed: false,
        lastScrollPosition: 0,
        scrollValue: 0,
        imgPath: '',
        //scheme_link
        scheme_link: 'cardcool://email?land_page=BidsOffers',
      }
    },
    computed: {
    },
    beforeDestroy(){
        window.removeEventListener('click', this.closeElement);
    },
    created() {
        this.getProduct();
        this.imgPath = process.env.IMAGE_DOMAIN;
    },
    mounted () {  
        // this.lastScrollPosition = window.pageYOffset
        window.addEventListener('scroll', this.onScroll);
        window.addEventListener('click', this.closeElement);
    },
    methods: {
        getProduct() {
          this.pagePid = this.$route.params.pid;
          let pid = this.pagePid; 
          getProductId(pid).then(res => {
            this.productData.push(res.data);
            const img = JSON.parse(this.productData[0].product.image);
            img.forEach((item) => {
                this.productImg.push({ url: item.url, weight: item.weight });
            });
            this.productImg = this.productImg.sort(this.compare);
            this.price = res.data.price;            
            if (this.price) {
                this.price.forEach((item) => {
                    if (item.grader === 'BGS') {
                        this.bgsPrice.push(item);
                    } else {
                        this.psaPrice.push(item);
                    }
                });
            }
          });
        },
        compare(a, b) {
            if (a.weight < b.weight) {
                return -1;
            }
            if (a.index > b.index) {
                return 1;
            }
            return 0;
        },
        gtagTrack(eventName){
            gtag('event', eventName);
        },
        clearData() {
          this.bgsPrice = [];
          this.psaPrice = [];
          this.productData = [];
          this.price = [];
          this.productImg = [];
        },
        getProductInfo(pid) {
          this.clearData();

          getProductId(pid).then(res => {
            this.productData.push(res.data);
            const img = JSON.parse(this.productData[0].product.image);
            img.forEach((item) => {
                this.productImg.push({ url: item.url, weight: item.weight });
            });
            this.price = res.data.price;            
            if (this.price) {
                this.price.forEach((item) => {
                    if (item.grader === 'BGS') {
                        this.bgsPrice.push(item);
                    } else {
                        this.psaPrice.push(item);
                    }
                });
            }
        });
      },
      changeGrader(pid) {
        this.isPid = pid;
        this.$router.push(`/product/${pid}`);
        this.getProductInfo(pid);
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
      open_popup_DowloadApp(){
          open_popup_DowloadApp();
      },
      stopSwiper(){
            this.swiper.autoplay.stop()
      },
      startSwiper(){
          this.swiper.autoplay.start()
      },
    //   tabClicked (selectedTab) {
    //         alert('Current tab re-clicked:' + selectedTab.tab.name);
    //   },
      // tabChanged (selectedTab) {
      //     console.log('Tab changed to:' + selectedTab.tab.name);
      // },
      alert_slect_grade(){
          showBlackOverlay();
          $(".slect-grade").addClass('active');
          $(".view-all-ask").removeClass('active');
          $(".view-all-bid").removeClass('active');
      },
      alert_view_all_ask(){
          showBlackOverlay();
          $(".view-all-ask").addClass('active');
          $(".slect-grade").removeClass('active');
          $(".view-all-bid").removeClass('active');
      },
      alert_view_all_bid(){
          showBlackOverlay();
          $(".view-all-bid").addClass('active');
          $(".slect-grade").removeClass('active');
          $(".view-all-ask").removeClass('active');
      },
      social_sharing(){
          showBlackOverlay();
          $(".social_sharing").addClass('active');
      },
      closeAlert(){
             closeAlert();
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
        //   console.log(this);
        },
        openApp(){
            //取得產品id
            this.pagePid = this.$route.params.pid;
            let pid = this.pagePid; 
            
            //scheme_link
            let githubURL = new URL(window.location.href);
            let pathName = githubURL.pathname;//URL的路徑部分（就是檔案目錄）
            let pageName = pathName.substring(0,pathName.substr(1).indexOf('/')+1); //只取帶"/"的第一層路徑（page name）
            var scheme_link = "cardcool://web?land_page=HomePage"
            if(pathName == "/product_ranking/hot_sales"){
                var scheme_link = "cardcool://web?land_page=HotSalesLeaderboard";
            }else if(pathName == "/product_ranking/rookie"){
                var scheme_link = "cardcool://web?land_page=RookiesLeaderboard";
            }else if(pageName == "/product"){
                var scheme_link = `cardcool://web?land_page=ProductDetail&landing_page_parameter=${pid}`;
            }

            //判斷裝置，網頁開啟APP
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios
            if(isAndroid == true){
            $(".oppenButton").show();
            var download_link = "https://play.google.com/store/apps/details?id=com.cardcool.gemcard";
            }
            if(isiOS == true){
            $(".oppenButton").show();
            var download_link = "https://apps.apple.com/us/app/id1527395702";
            }
            if (typeof isiOS === 'undefined') {
                isiOS = false;
            }
            if (typeof isAndroid === 'undefined') {
                isAndroid = false;
            }
            if(isiOS == true || isAndroid == true){
                var appWindow = window.open(scheme_link,"_blank");

                setTimeout( function () {
                if (!appWindow) {
                    appWindow.location = download_link;
                }
                },500);
            }
        },
        closeElement(e) {
        // close desktop menu dropdown when click another element
            if (!this.$el.contains(e.target)) {
                
            }
        },
    },
    beforeDestroy(){
        window.removeEventListener('scroll', this.onScroll);
    },
  }
</script>

<style lang="scss">
  @import "assets/css/base/default.scss";
  @import "assets/css/pages/main.scss";
  @import "assets/css/pages/subPage_product.scss";

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


