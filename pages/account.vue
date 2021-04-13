<template>
  <div class="grayBg">
      <div class="account mainContent">
          <section class="Account" style="padding: 0px">
            <div class="heading container">
                <h1 class="title-l">Account</h1>
            </div>
            <div class="container">
                <el-tabs v-model="activeName">
                    <el-tab-pane label="Profile" name="first">
                        <accountProfile></accountProfile>
                    </el-tab-pane>
                    <el-tab-pane label="Buy" name="second">
                        <accountBuy></accountBuy>
                    </el-tab-pane>
                    <el-tab-pane label="Sell" name="third">
                        <accountSell></accountSell>
                    </el-tab-pane>
                </el-tabs>
            </div>
          </section>
      </div>

  </div>
</template>

<script>
import accountProfile from '~/components/accountProfile'
import accountBuy from '~/components/accountBuy'
import accountSell from '~/components/accountSell'

  export default {
    components: {
        accountProfile,
        accountBuy,
        accountSell
    },
    data () {
      return {				
          activeName: 'first',
           ////獲取上一頁路徑並將其儲存在數據中
          prevRoute: null,
        
      }
    },
    beforeRouteEnter(to, from, next) {
      //獲取上一頁路徑並將其儲存在數據中
      next(vm => {
        vm.prevRoute = from
      })
    },
    created() {
        
    },
    mounted () {
      //上一頁是哪一頁，tab就切換到對應的頁籤
      let URL = this.prevRoute.path;
      if(URL === '/account_payeeInfo_edit'){
          this.activeName = 'third'
       }else if(URL === '/accoutn_creditLimit_edit'){
          this.activeName = 'second'
       }else{
          this.activeName = 'first'
       }
    },
    beforeDestroy(){
    },
    methods: {
        
    },
      
  }
</script>

<style lang="scss">
  @import "assets/css/base/default.scss";
  @import "assets/css/pages/subPage_account.scss";
 
</style>

<style scoped>

</style>