<template>
  <div>
      <section class="policy mainContent" style="margin-top: 70px">
          <section class="Privacy" style="padding: 0px">
            <div style="width: 100%; height: 350px" v-if="storyList">
                <el-image :src="imgPath + storyList.image"> </el-image>
            </div>
            <div class="container">
                <el-tabs v-model="activeName" class="tabStyle"
                style="margin: 165px 0px 35px 0px;">
                    <el-tab-pane label="OVERVIEW" name="OVERVIEW">
                        <overview style="padding: 80px 150px;"
                        :storyList="storyList"
                        :itemList="itemList"
                        :overview="overview"
                        :time="time"
                        :storyList2="storyList2"></overview>
                    </el-tab-pane>
                    <el-tab-pane label="VIEW COLLECTION" name="COLLECTION">
                        <historyCollection style="padding: 50px 90px;" v-if="ifHistoryAuction"></historyCollection>
                        <collection style="padding: 50px 90px;" v-else
                        :collections="collections"></collection>
                    </el-tab-pane>
                </el-tabs>
            </div>
          </section>
      </section>

  </div>
</template>

<script>
import overview from '~/components/auctionOverview'
import collection from '~/components/auctionCollections'
import historyCollection from '~/components/historyCollections'
import { getAuctionData } from '~/api/auction';

  export default {
    components: {
      overview,
      collection,
      historyCollection
    },
    data () {
      return {				
        activeName: 'OVERVIEW',
        showNavbar: true,
        navbarFixed: false,
        lastScrollPosition: 0,
        scrollValue: 0,
        ifHistoryAuction: false,
        special_id: '',
        collections: [],
        overview: [],
        storyList: [],
        storyList2: [],
        itemList: [],
        imgPath: '',
        time: {
            day: 0,
            hr: 0,
            min: 0,
            sec: 0,
        }
      }
    },
    created() {
        if(process.browser) {
            if(localStorage.getItem('history-auction') === 'auction_results') {
                this.ifHistoryAuction = true
            }
        }
        this.special_id = this.$route.params.id
        this.getInit()
        this.imgPath = process.env.IMAGE_DOMAIN;
    },
    mounted () {
        // this.lastScrollPosition = window.pageYOffset
        window.addEventListener('scroll', this.onScroll);
        if(process.browser) {
            this.timeout = setTimeout(() => {
                localStorage.setItem('history-auction', '')
            }, 3000 * Math.random());
        }
    },
    beforeDestroy(){
        window.removeEventListener('scroll', this.onScroll);
    },
    methods: {
        getInit() {
            const data = {
                special_id: this.special_id
            }
            getAuctionData(data).then((res) => {
                if (res.data) {
                    this.collections = res.data.auctionList;
                    this.overview = res.data.specialData;
                    this.countdown()
                    if (this.overview) {
                        this.storyList = this.overview.storyList[0]
                        this.storyList2 = this.overview.storyList[1]
                        if (this.storyList) {
                            this.itemList = this.storyList.itemList          
                        }
                    }
                }
            })            
        },
        anchorScroll(){
          $(".tab-anchor-tabs").on('click',".tab-anchor", function(){
              var attr = this.getAttribute("data-goHash");
              var target_top = document.getElementById(attr).offsetTop;
              $("html,body").animate({scrollTop: target_top - 200}, 700);
          });
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
        },
        countdown() {
            const end = new Date(this.overview.end_time).getTime()
            const now = new Date().getTime()
            const msec = end - now
            let day = parseInt(msec / 1000 / 60 / 60 / 24)
            let hr = parseInt(msec / 1000 / 60 / 60 % 24)
            let min = parseInt(msec / 1000 / 60 % 60)
            let sec = parseInt(msec / 1000 % 60)
            this.time.day = day
            this.time.hr = hr > 9 ? hr : '0' + hr
            this.time.min = min > 9 ? min : '0' + min
            this.time.sec = sec > 9 ? sec : '0' + sec
            const that = this
            setTimeout(function () {
                that.countdown()
            }, 1000)
        },
    },
      
  }
</script>

<style lang="scss">
  @import "assets/css/base/default.scss";
  @import "assets/css/pages/subPage_policy.scss";
 
</style>

<style scoped>
    .tabStyle >>> .el-tabs__nav-wrap::after {
        background-color: transparent !important;
    }
    .tabStyle >>> .el-tabs__item {
        margin: 14px 0px;
        letter-spacing: 1px;
        font-size: 20px;
        font-weight: 300;
    }
    .tabStyle >>> .el-tabs__item.is-active {
        color: black !important
    }
    .tabStyle >>> .el-tabs__active-bar {
        background-color: #797979 !important;
        width: 105px;
        height: 3.5px !important;
    }
</style>