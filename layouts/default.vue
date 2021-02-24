<template>
  <div>
    <headerBar v-if="params !== 'app'" :HomePageData="HomePageData"/>
    <nuxt/>
    <footerMap v-if="params !== 'app'" :HomePageData="HomePageData"/>
  </div>
</template>

<script>
import footerMap from '~/components/footerMap';
import headerBar from '~/components/headerBar';
import {getHomePageData} from '~/api/homePage.js';

export default {
    components: {
      headerBar,
      footerMap,
    },
    data () {
      return {
          HomePageData: {
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
          },
          params : this.$route.query.app
      }
    },
    created() {
      this.getData();
    },
    methods: {
      getData() {
        getHomePageData().then(res => {
          this.HomePageData.news = res.data.data.news; // 取得news資料
          this.HomePageData.sales = res.data.data.hotSales; // 取得sales資料
          const hotSalesLength = res.data.data.hotSales.length;

          this.HomePageData.rookie = res.data.data.rcPlayers; // 取得rookie資料
          const rookieLength = res.data.data.rcPlayers.length;
          
          this.HomePageData.highest = res.data.data.priceUpHigestFive; // 取得highest資料
          const highestLength = res.data.data.priceUpHigestFive.length;
          
          this.HomePageData.lowest = res.data.data.priceUpLowestFive; // 取得lowest資料
          const lowestLength = res.data.data.priceUpLowestFive.length;
          
        });
      },
    }  
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
