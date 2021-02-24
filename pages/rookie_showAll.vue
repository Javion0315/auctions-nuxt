<template>
  <div>
      <main class="product mainContent">
        <!-- <div class="heading-bg"></div> -->
        <h2 class="heading-l txtCenter">ROOKIE</h2>
        <section class="product__ranking tabs-component"> 
          <!-- <h3 class="title-l">NBA Hot Sales Of The Week Rankings :</h3> -->
          <!-- <tabs :options="{ useUrlFragment: false }"> -->
          <tabs>
            <!-- filter選項 -->
            <!-- <ul class="filter" v-on:click="filter_slideToggle"> -->
                <!-- <li class="filter__item" v-on:click="filter_slideToggle">Sort By Volumn  <span class="floatRight">( High-Low )</span><i class="icon icon-arrow-bottom"></i></li>-->
                <!-- <li class="filter__item" @click="sort('name')">
                    Sort By Volumn  <span class="floatRight">( High-Low )</span><i class="icon icon-arrow-bottom"></i>
                </li> -->
                <!-- <div class="panel"> -->
                    <!-- <li class="filter__item">Sort By Price  <span class="floatRight">( High-Low )</span></li> -->
                    <!-- <li class="filter__item" @click="sort('price')">
                        Sort By Price  <span class="floatRight">( High-Low )</span>
                    </li> -->
                <!-- </div> -->
            <!-- </ul> -->
            <!-- Silver -->
            <tab name="SILVER">
              <div class="hotProduct-top3">
                <div class="productList__item" @click="open_popup_DowloadApp"
                :class="[{ 'no1': index == 0 },{ 'no2': index == 1 },{ 'no3': index == 2 }]"
                v-for="(item, index) in sliverTopThree" :key="index">
                    <div class="img" :class="[{'icon-MVPbest': index<=3 },{'icon-RCbest': index<=3 }]">
                      <img :src="imgPath + silverThreeImg[index]" :alt="item.playerName">
                    </div>
                    <div class="text">
                      <h4 class="title">{{ item.playerName }} {{ item.product.basecamp }} {{ item.product.subcamp }}</h4>
                      <div v-if="index === 0">{{ item.product.is_rc === true ? 'RC' : '' }} {{ item.product.grader }} {{ item.product.grade }} {{ item.product.seasons }}</div>
                      <div class="row">
                        <div class="price"><span class="lastSale">Last Sale</span><span class="dollar">US${{ Math.floor(item.ebayPrice) | currency }}</span></div>
                        <div class="btn btn-solid priceDown" :class="{'priceUp': item.priceUp >= 0 }" v-if="item.priceUp >= 0">
                          +{{ item.priceUp | setPriceUp }}%
                        </div>
                        <div class="btn btn-solid priceDown" :class="{'priceUp': item.priceUp >= 0 }" v-else>
                          {{ item.priceUp | setPriceUp }}%
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <div class="hotProducts">
                  <!-- <isotope :options="option"> -->
                      <div class="infinite-scroll">
                            <div class="infinite-scroll-list">
                              <div class="productList__item infinite-scroll-list-item" @click="open_popup_DowloadApp" 
                              v-for="(item,index) in silverOtherData" :key="index">
                                  <nuxt-link to="/product">
                                      <img :src="imgPath + silverImg[index]" :alt="item.playerName">
                                      <div class="text">
                                          <h4 class="title">{{ item.playerName }} {{ item.product.basecamp }} {{ item.product.subcamp }}</h4>
                                          <div class="row">
                                              <div class="price"><span class="lastSale">Last Sale</span><span class="dollar">US${{ Math.floor(item.ebayPrice) | currency }}</span></div>
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
                            <!-- <infinite-loading 
                              ref="infiniteLoading" 
                              spinner="spiral"
                              @infinite="infiniteHandler">
                              <div slot="no-more">No More Data ~</div>
                              <div slot="no-results">No Results :(</div>
                            </infinite-loading> -->
                        </div>
                  <!-- </isotope> -->
              </div>
            </tab>
            <!-- Base -->
            <tab name="BASE">
              <div class="hotProduct-top3">
                <div class="productList__item" @click="open_popup_DowloadApp"
                :class="[{ 'no1': index == 0 },{ 'no2': index == 1 },{ 'no3': index == 2 }]"
                v-for="(item, index) in baseTopThree" :key="index">
                    <div class="img" :class="[{'icon-MVPbest': index<=3 },{'icon-RCbest': index<=3 }]">
                      <img :src="imgPath + baseThreeImg[index]" :alt="item.playerName">
                    </div>
                    <div class="text">
                      <h4 class="title">{{ item.playerName }} {{ item.product.basecamp }} {{ item.product.subcamp }}</h4>
                      <div v-if="index === 0">{{ item.product.is_rc === true ? 'RC' : '' }} {{ item.product.grader }} {{ item.product.grade }} {{ item.product.seasons }}</div>
                      <div class="row">
                        <div class="price"><span class="lastSale">Last Sale</span><span class="dollar">US${{ Math.floor(item.ebayPrice) | currency }}</span></div>
                        <div class="btn btn-solid priceDown" :class="{'priceUp': item.priceUp >= 0 }" v-if="item.priceUp >= 0">
                          +{{ item.priceUp | setPriceUp }}%
                        </div>
                        <div class="btn btn-solid priceDown" :class="{'priceUp': item.priceUp >= 0 }" v-else>
                          {{ item.priceUp | setPriceUp }}%
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <div class="hotProducts">
                  <!-- <isotope :options="option"> -->
                      <div class="infinite-scroll">
                            <div class="infinite-scroll-list">
                              <!-- <span v-for="index of this.InfiniteScroll_count" :key="index"> -->
                              <div class="productList__item infinite-scroll-list-item" @click="open_popup_DowloadApp" 
                              v-for="(item,index) in baseOtherData" :key="index">
                                  <nuxt-link to="/product">
                                      <img :src="imgPath + baseImg[index]" :alt="item.playerName">
                                      <div class="text">
                                          <h4 class="title">{{ item.playerName }} {{ item.product.basecamp }} {{ item.product.subcamp }}</h4>
                                          <div class="row">
                                              <div class="price"><span class="lastSale">Last Sale</span><span class="dollar">US${{ Math.floor(item.ebayPrice) | currency }}</span></div>
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
                              <!-- </span> -->
                            </div>
                            <!-- <infinite-loading 
                              ref="infiniteLoading" 
                              spinner="spiral"
                              @infinite="infiniteHandler">
                              <div slot="no-more">No More Data ~</div>
                              <div slot="no-results">No Results :(</div>
                            </infinite-loading> -->
                        </div>
                  <!-- </isotope> -->
              </div>
            </tab>
          </tabs>
        </section>
      </main>
  </div>
</template>

<script>
import 'assets/js/common.js'
import {open_popup_DowloadApp} from 'assets/js/common.js';
import {filter_slideToggle} from 'assets/js/common.js';

const moment = require('moment');

  export default {
    name: 'InfiniteScroll',
    data () {
      return {
        InfiniteScroll_count: 2,
        intersectionOptions: {
          root: null,
          rootMargin: '0px 0px 0px 0px',
          // threshold: [0, 1] // [0.25, 0.75] if you want a 25% offset!
          threshold: [0.25, 0.75] 
        },
        sortOption: null,
        option: {
          getSortData: {
            name: "title",
            price: "price",
          }
        },
        silverData: [],
        sliverTopThree: [],
        silverOtherData: [],
        silverThreeImg: [],
        silverImg: [],
        baseData: [],
        baseTopThree: [],
        baseOtherData: [],
        baseThreeImg: [],
        baseImg: [],
        imgPath: '',
      }
    },
    beforeDestroy(){
        window.removeEventListener('scroll', this.hasScrolled);
    },
    computed: {
      autoLoadDisabled() {
        return this.loading || this.commentsData.length === 0;
      },
    },
    filters: {
      setPriceUp(value) {
        const num = value * 100;
        return num.toFixed(2);
      },
    },
    created() {
      this.getRookieSilver();
      this.getRookieBase();
      this.imgPath = process.env.IMAGE_DOMAIN;
    },
    mounted () { 
      window.addEventListener('scroll', this.hasScrolled);
    },
    methods: {
      getRookieSilver() {
        this.$axios.get('site/leaderboard/rookie/0').then(res => {
          this.rookieSilverData = res.data.data; // 取得silver所有資料
          this.rookieSliverTopThree = this.rookieSilverData.slice(0, 3); // 取得silver前三筆的資料
          this.rookieSilverOtherData = this.rookieSilverData.slice(3); // 第四筆開始
          // 取得前三筆的圖片
          for (let i = 0; i <= this.sliverTopThree.length; i++) {
            if (this.sliverTopThree[i]) {
              const getSilverThreeImg = JSON.parse(this.sliverTopThree[i].product.image);
              this.silverThreeImg.push(getSilverThreeImg[0].url);
            }
          }
          // 取得從第四筆開始的圖片
          for (let i = 0; i <= this.rookieSilverOtherData.length; i++) {
            if (this.rookieSilverOtherData[i]) {
              const getRookieSilverImg = JSON.parse(this.rookieSilverOtherData[i].product.image);
              this.rookieSilverImg.push(getRookieSilverImg[0].url);
            }
          }
        });
      },
      getRookieBase() {
        this.$axios.get('site/leaderboard/rookie/1').then(res => {
          this.rookieBaseData = res.data.data; // 取得所有base資料
          this.rookieBaseTopThree = this.rookieBaseData.slice(0, 3); // 取得base前三筆的資料
          this.rookieBaseOtherData = this.rookieBaseData.slice(3); // 第四筆開始
          // 取得前三筆的圖片
          for (let i = 0; i <= this.baseTopThree.length; i++) {
            if (this.rookieBaseTopThree[i]) {
              const getRookieBaseThreeImg = JSON.parse(this.rookieBaseTopThree[i].product.image);
              this.baseRookieThreeImg.push(getRookieBaseThreeImg[0].url);
            }
          }
          // 取得從第四筆開始的圖片
          for (let i = 0; i <= this.rookieBaseOtherData.length; i++) {
            if (this.rookieBaseOtherData[i]) {
              const getRookieBaseImg = JSON.parse(this.rookieBaseOtherData[i].product.image);
              this.rookieBaseImg.push(getRookieBaseImg[0].url);
            }
          }
        });
      },
      sort(key) {
        this.sortOption = key;
      },
      // infiniteHandler() {
      //   setTimeout(() => {
      //     if (this.InfiniteScroll_count < this.silverData.length) {
      //       this.InfiniteScroll_count += 2
      //       this.$refs.infiniteLoading.stateChanger.loaded()
      //     } else {
      //       this.$refs.infiniteLoading.stateChanger.complete()
      //     }
      //   }, 800)
      // },
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
      filter_slideToggle(){
          filter_slideToggle();
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
</style>


