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
     </section>

      <section class="hotProduct product"> 
          <div class="container">
              <h2 class="heading-l txtCenter">TRENDING CARDS</h2>
              <div class="mvp hotProduct__section">
                  <div class="hotProduct__section__head flexBetween">
                      <h3 class="title-m">HOT SALES</h3>
                          <nuxt-link :to="localePath('/product_ranking/hot_sales/silver')" class="showall" @click.native="gtagTrack('HomePage_HotSale_SeeAll')">
                              Show all <i class="icon icon-arrow-right"></i>
                          </nuxt-link>
                  </div>
                  <div class="mvpList slideList">
                      <div class="swiper swiperBox" v-swiper:swiper2="swiperOption_mvp" ref="swiperBox2">
                          <div class="swiper-wrapper">
                              <div class="swiper-slide" v-for="(item, index) in hotSales" :key="index">
                                  <div class="mvpList__item productList__item" v-if="index === 10">
                                      <nuxt-link :to="localePath('/product_ranking/hot_sales/silver')" class="seeMore">
                                          <span class="seeMore__text">See More</span>
                                      </nuxt-link>
                                  </div>
                                   <div class="mvpList__item productList__item" v-else>
                                      <nuxt-link :to="localePath({ name: 'product-pid', params: { pid: item.product.product_id }})" 
                                      @click.native="gtagTrack('HomePage_HotSale_Player')">
                                          <div class="productList__item__img product__imgMask">
                                              <img :src="imgPath + salesImg[index]" :alt="item.title">
                                              <svg class="clip-svg imgMask" width="0" height="0">
                                                <defs>
                                                  <clipPath id="clip-shape" clipPathUnits="objectBoundingBox" >
                                                    <polygon points="0.02 0.06, 0.98 0.06, 0.98 0.93, 0.02 0.93" />
                                                  </clipPath>
                                                </defs>
                                              </svg>
                                          </div>
                                          <div class="text">
                                            <h4 class="title ellipsis" v-if="$i18n.locale === 'zh-cn'">{{ item.product.chinese_name }} {{ item.product.basecamp }} {{ item.product.subcamp }}</h4>
                                            <h4 class="title ellipsis" v-else>{{ item.playerName }} {{ item.product.basecamp }} {{ item.product.subcamp }}</h4>
                                            <div class="row">
                                              <div class="price"><span class="lastSale">Last Sale</span>
                                                <span class="dollar" v-if="item.gemcardPrice <= '0'">
                                                  US$--
                                                </span>
                                                <span class="dollar" v-else>
                                                  US${{ Math.floor(item.gemcardPrice)/100 }}
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
                          <div class="swiper-pagination swp_mvp"  slot="pagination"></div>
                          <div class="swiper-button-prev swp_mvp" slot="button-prev"></div>
                          <div class="swiper-button-next swp_mvp" slot="button-next"></div> 
                      </div>
                  </div>
              </div>
              <div class="rookie hotProduct__section">
                  <div class="hotProduct__section__head flexBetween">
                      <h3 class="title-m">ROOKIE</h3>
                      <div class="showall">
                        <nuxt-link :to="localePath('/product_ranking/rookie/silver')" class="showall" @click.native="gtagTrack('HomePage_Rookie_SeeAll')">
                            Show all <i class="icon icon-arrow-right"></i>
                        </nuxt-link>
                      </div>
                  </div>
                  <div class="rookieList slideList">
                      <div class="swiper swiperBox" v-swiper:swiper3="swiperOption_rookie" ref="swiperBox3">
                          <div class="swiper-wrapper">
                              <div class="swiper-slide" v-for="(item, index) in rookie" :key="index">
                                  <div class="rookieList__item productList__item" v-if="index == 10">
                                    <nuxt-link :to="localePath('/product_ranking/rookie/silver')" class="seeMore">
                                      <span class="seeMore__text">See More</span>
                                    </nuxt-link>
                                  </div>
                                  <div class="rookieList__item productList__item" v-else>
                                    <nuxt-link :to="localePath({ name: 'product-pid', params: { pid: item.product.product_id }})" 
                                    @click.native="gtagTrack('HomePage_Rookie_Player')">
                                      <div class="product__imgMask"><img :src="imgPath + rookieImg[index]" :alt="item.title"></div>
                                      <div class="text">
                                        <h4 class="title ellipsis" v-if="$i18n.locale === 'zh-cn'">{{ item.product.chinese_name }} {{ item.product.basecamp }} {{ item.product.subcamp }}</h4>
                                        <h4 class="title ellipsis" v-else>{{ item.playerName }} {{ item.product.basecamp }} {{ item.product.subcamp }}</h4>
                                      </div> 
                                    </nuxt-link>
                                  </div>
                              </div>
                          </div>
                          <div class="swiper-pagination swp_rookie"  slot="pagination"></div>
                          <div class="swiper-button-prev swp_rookie" slot="button-prev"></div>
                          <div class="swiper-button-next swp_rookie" slot="button-next"></div> 
                      </div>
                  </div>
              </div>
              <div class="popular tabs-component hotProduct__section">
                  <h3 class="title-l txtCenter">POPULAR</h3>
                  <tabs :options="{ useUrlFragment: false }">
                    <!--<tabs :options="{ useUrlFragment: false }" @clicked="tabClicked" @changed="tabChanged" >-->
                      <tab name="RISERS">
                          <ul class="tabList popular__tabList">
                              <li class="tabList__item popular__tabList__item "
                              v-for="(item, index) in highest" :key="index">
                                  <nuxt-link :to="localePath({ name: 'product-pid', params: { pid: item.product.product_id }})" 
                                  class="itemInner" 
                                  @click.native="gtagTrack('HomePage_Popular_Highest_Player')">
                                      <div class="left">
                                          <div class="ranking"><span class="number">{{ index+1 }}</span></div>
                                          <div class="product__imgMask"><img :src="imgPath + highestImg[index]" alt="Jaren Jackson Jr. Prizm Base"></div>
                                          <div class="text">
                                              <div class="name" v-if="$i18n.locale === 'zh-cn'">{{ item.product.chinese_name }} {{ item.product.basecamp }} {{ item.product.subcamp }}</div>
                                              <div class="name" v-else>{{ item.playerName }} {{ item.product.basecamp }} {{ item.product.subcamp }}</div>
                                              <div class="years">{{ item.product.is_rc === true ? 'RC' : '' }} {{ item.product.grader }} {{ item.product.grade }} {{ item.product.seasons }}</div>
                                              <div class="price">
                                                <span class="lastSale">Last Sale</span>
                                                <span class="dollar" v-if="item.gemcardPrice <= '0'"> US$--</span>
                                                <span class="dollar" v-else> US${{ Math.floor(item.gemcardPrice)/100 }}</span>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="btn btn-solid priceDown" :class="{'priceUp': item.priceUp >= 0 }" v-if="item.priceUp >= 0">
                                        +{{ item.priceUp | setPriceUp }}%
                                      </div>
                                      <div class="btn btn-solid priceDown" :class="{'priceUp': item.priceUp >= 0 }" v-else>
                                        {{ item.priceUp | setPriceUp }}%
                                      </div>
                                  </nuxt-link>
                              </li>
                          </ul>
                      </tab>
                      <tab name="FALLERS">
                          <ul class="tabList popular__tabList">
                              <li class="tabList__item popular__tabList__item"
                              v-for="(item, index) in lowest" :key="index">
                                  <nuxt-link :to="localePath({ name: 'product-pid', params: { pid: item.product.product_id }})" 
                                  class="itemInner" 
                                  @click.native="gtagTrack('HomePage_Popular_Lowest_Player')">
                                      <div class="left">
                                          <div class="ranking"><span class="number">{{ index+1 }}</span></div>
                                          <div class="product__imgMask"><img :src="imgPath + lowestImg[index]" alt="Jaren Jackson Jr. Prizm Base"></div>
                                          <div class="text">
                                              <div class="name" v-if="$i18n.locale === 'zh-cn'">{{ item.product.chinese_name }} {{ item.product.basecamp }} {{ item.product.subcamp }}</div>
                                              <div class="name" v-else>{{ item.playerName }} {{ item.product.basecamp }} {{ item.product.subcamp }}</div>
                                              <div class="years">{{ item.product.is_rc === true ? 'RC' : '' }} {{ item.product.grader }} {{ item.product.grade }} {{ item.product.seasons }}</div>
                                              <div class="price">
                                                <span class="lastSale">Last Sale</span>
                                                <span class="dollar" v-if="item.gemcardPrice <= '0'"> US$--</span>
                                                <span class="dollar" v-else> US${{ Math.floor(item.gemcardPrice)/100 }}</span>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="btn btn-solid priceDown" :class="{'priceUp': item.priceUp >= 0 }" v-if="item.priceUp >= 0">
                                        +{{ item.priceUp | setPriceUp }}%
                                      </div>
                                      <div class="btn btn-solid priceDown" :class="{'priceUp': item.priceUp >= 0 }" v-else>
                                        {{ item.priceUp | setPriceUp }}%
                                      </div>
                                  </nuxt-link>
                              </li>
                          </ul>
                      </tab>
                  </tabs>
              </div>
          </div>
      </section>
      <!-- 0923隱藏此區塊，改成直接顯示howitworks -->
      <!-- <section class="ourAdvantage container" v-waypoint="{ active: true, callback: onWaypoint_ourAdvantage, options: intersectionOptions }">
          <h2 class="heading-l txtCenter">Why Trade on GemCard?</h2>
          <ul class="ourAdvantage__features-list row">
              <li class="item waypoint">
                <h3 class="title-l">Lowest Commission</h3>
                <p class="summary">5% commission is the only cost for each trade. GemCard is made for professional, active traders looking to maximize profits.</p>
              </li>
              <li class="item waypoint">
                <h3 class="title-l">Fast Trades</h3>
                <p class="summary">Traders buy and sell cards as stocks. No need for shipping time and trial periods.Increased frequency makes the market more active.</p>
              </li>
              <li class="item waypoint">
                <h3 class="title-l">Hobby Shop Network</h3>
                <p class="summary">GemCard collaborates with well-trusted local sports card shops. Consign your cards with professional help and peace of mind.</p>
              </li>
          </ul>
          <table class="advantage rwdTable rwdTable--flip">
              <thead>
              <tr>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
                <th>Commission</th>
                <th>Waiting time</th>
                <th>Consignment fee</th>
                <th>Trust</th>
                <th>Market Trends</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th><i class="icon icon-award"></i></th>
                <th>GemCard</th>
                <td>5%</td>
                <td>Instant</td>
                <td>Free</td>
                <td><i class="icon-check"></i></td>
                <td><i class="icon-check"></i></td>
              </tr>
              <tr>
                <th>&nbsp;</th>
                <th>eBay</th>
                <td>15%</td>
                <td>Around 14 days</td>
                <td>$3</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th>&nbsp;</th>
                <th>StockX</th>
                <td>3%</td>
                <td>Around 10 days</td>
                <td>8% ~ 9.5%</td>
                <td>-</td>
                <td><i class="icon-check"></i></td>
              </tr>
              <tr>
                <th>&nbsp;</th>
                <th>Instagram</th>
                <td>Depends on seller</td>
                <td>Depends on seller</td>
                <td>Depends on seller</td>
                <td>Depends on seller</td>
                <td>Depends on seller</td>
              </tr>
              </tbody>
          </table>
          <div class="clearfix txtCenter">
                <nuxt-link to="/howitworks" class="btn btn-secondary btn-biggest">How It Works</nuxt-link>
          </div>
      </section> -->
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

      <!-- 等球卡網頁有自己的News時再開啟此版本設計 -->
      <!-- <section class="container">
          <figure>
              <div class="row news waypoint" v-waypoint="{ active: true, callback: onWaypoint_news, options: intersectionOptions }">
                  <div class="news__img">
                        <img src="~assets/images/news.jpg" alt="新聞插圖">
                  </div>
                  <div class="news__text">
                      <h2 class="heading-l">News</h2>
                      <figcaption>
                          <h3 class="title-l">Why Investors Should Buy Mickey Mantle's 'True' 1951 Bowman Rookie Card Instead Of His 1952 Topps</h3>
                          <div class="date">Posted May 14, 2019</div>
                          <p class="summary">
                              Last year, Super Bowl champion Evan Mathis, sold a mint PSA 9 (on a scale of one to ten) 1952 Topps Mickey Mantle for $2.9 million in a Heritage auction. If one of the three existing gem mint PSA 10s came up for sale, it would command $10 million.….
                          </p>
                      </figcaption>
                      <div class="news__button">
                          <span class="btn btn-primary fluid"><a href="#">Full Article</a></span>
                          <span class="btn btn-primary fluid"><a href="#">More News</a></span>
                      </div>
                  </div>
              </div>
          </figure>
      </section> -->

      <section class="container">
          <figure>
              <div class="news waypoint" v-waypoint="{ active: true, callback: onWaypoint_news, options: intersectionOptions }">
                  <h2 class="heading-l txtCenter">News</h2>
                  <div class="newsList-outer">
                      <ul class="newsList clearfix">
                          <li class="newsItem col-6" v-for="(item, index) in news" :key="index" style="margin-bottm: 10px;">
                              <a :href="item.web_url" target="_blank" class="row">
                              <div class="news__img col-4">
                                <img :src="imgPath + item.image_url" alt="新聞插圖">
                              </div>
                              <div class="news__text col-8">
                                <figcaption style="height: 165px">
                                    <h3 class="title-m">{{ item.headline }}</h3>
                                    <div class="date"><span class="posted mobileHide">Posted</span>{{ item.ESPN_created_at | setTime }} ago</div>
                                </figcaption>
                              </div>
                            </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </figure>
      </section>
      <!-- <pre>{{ homePage.news }}</pre> -->
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
        swiperOption_mvp: {
            speed:1000,
            slidesPerView: 5,
            spaceBetween : 25,
            centeredSlides: false,
            pagination: {
                el: '.swiper-pagination.swp_mvp',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next.swp_mvp',
                prevEl: '.swiper-button-prev.swp_mvp',
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
        swiperOption_rookie: {
            speed:1000,
            slidesPerView: 6,
            spaceBetween : 35,
            centeredSlides: false,
            pagination: {
                el: '.swiper-pagination.swp_rookie',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next.swp_rookie',
                prevEl: '.swiper-button-prev.swp_rookie',
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
        news: [],
        sales: [],
        rookie: [],
        highest: [],
        lowest: [],
        salesImg: [],
        rookieImg: [],
        highestImg: [],
        lowestImg: [],
        imgPath: '',
      }
    },
    computed: {
      homePage(){
        return this.$store.state.homePage.homePage;
      },
      espn_news(){
        return this.$store.state.homePage.news;
      },
      hotSales(){
        return this.$store.state.homePage.hotSales;
      },
      priceUpHigestFive(){
        return this.$store.state.homePage.priceUpHigestFive;
      },
      priceUpLowestFive(){
        return this.$store.state.homePage.priceUpLowestFive;
      },
      rcPlayers(){
        return this.$store.state.homePage.rcPlayers;
      },
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
      this.getData();
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
      getData() {
          this.news = this.$store.state.homePage.news; // 取得news資料
          this.sales = this.$store.state.homePage.hotSales; // 取得sales資料
          const hotSalesLength = this.$store.state.homePage.hotSales.length;
          for (let i = 0; i <= hotSalesLength; i++) {
            if (this.sales[i]) {
              let getSalesImg = [];
              getSalesImg = JSON.parse(this.sales[i].product.image);
              this.salesImg.push(getSalesImg[0].url);
            }
          }
          this.rookie = this.$store.state.homePage.rcPlayers; // 取得rookie資料
          let rookieLength = this.$store.state.homePage.rcPlayers.length;
          for (let i = 0; i <=rookieLength; i++) {
            if (this.rookie[i]) {
              let getRookieImg = [];
              getRookieImg = JSON.parse(this.rookie[i].product.image);
              this.rookieImg.push(getRookieImg[0].url);
            }
          }
          this.highest = this.$store.state.homePage.priceUpHigestFive; // 取得highest資料
          const highestLength = this.$store.state.homePage.priceUpHigestFive.length;
          for (let i = 0; i <= highestLength; i++) {
            if (this.highest[i]) {
              let getHighestImg = [];
              getHighestImg = JSON.parse(this.highest[i].product.image);
              this.highestImg.push(getHighestImg[0].url);
            }
          }
          this.lowest = this.$store.state.homePage.priceUpLowestFive; // 取得lowest資料
          const lowestLength = this.$store.state.homePage.priceUpLowestFive.length;
          for (let i = 0; i <= lowestLength; i++) {
            if (this.lowest[i]) {
              let getHighestImg = [];
              getHighestImg = JSON.parse(this.lowest[i].product.image);
              this.lowestImg.push(getHighestImg[0].url);
            }
          }
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
      onWaypoint_news ({ going, direction }) {
        if (going === this.$waypointMap.GOING_IN) {
          $(".news").addClass('fadeInUp animated').css('opacity','1');
        }
      },
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


