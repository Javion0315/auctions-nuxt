<template>
  <div>
    <div class="faq container mainContent">

      <section id="transaction" class="faq_collapse">
          <h2 class="heading-m">{{ $t('faq.transaction.h2_Title_1') }}</h2>
          <el-collapse v-model="activeNames">
            <el-collapse-item :title="$t('faq.transaction.howToBuyCard')" name="transaction" id="transaction1">
                <div class="flexRow">
                  <div class="flexColumn">
                    <p><span class="num">1</span>{{ $t('faq.transaction.howToBuyCard_step1') }}</p>
                    <img :src="require(`~/assets/images/faq/buy_1.jpg`)">
                  </div>
                  <div class="flexColumn">
                    <p><span class="num">2</span>{{ $t('faq.transaction.howToBuyCard_step2') }}</p>
                    <img :src="require(`~/assets/images/faq/buy_2.gif`)">
                  </div>
                  <div class="flexColumn">
                    <p><span class="num">3</span>{{ $t('faq.transaction.howToBuyCard_step3') }}<br><span class="num">4</span>{{ $t('faq.transaction.howToBuyCard_step4') }}</p>
                    <img :src="require(`~/assets/images/faq/buy_3.gif`)">
                  </div>
                </div>
            </el-collapse-item>
            <el-collapse-item :title="$t('faq.transaction.howToSellCard')" name="transaction2" id="transaction2">
                <div class="flexRow">
                  <div class="flexColumn">
                    <p><span class="num">1</span>{{ $t('faq.transaction.howToSellCard_step1') }}</p>
                    <img :src="require(`~/assets/images/faq/sell_1.jpg`)">
                  </div>
                  <div class="flexColumn">
                    <p><span class="num">2</span>{{ $t('faq.transaction.howToSellCard_step2') }}<br><span class="num">3</span>{{ $t('faq.transaction.howToSellCard_step3') }}<br><span class="num">4</span>{{ $t('faq.transaction.howToSellCard_step4') }}</p>
                    <img :src="require(`~/assets/images/faq/sell_2.gif`)">
                  </div>
                  <div class="flexColumn">
                    <p><span class="num">5</span>{{ $t('faq.transaction.howToSellCard_step5') }}</p>
                    <img :src="require(`~/assets/images/faq/sell_3.gif`)">
                  </div>
                </div>
            </el-collapse-item>
          </el-collapse>
      </section>

        <section id="wallet" class="faq_collapse">
          <h2 class="heading-m">{{ $t('faq.transaction.h2_Title_2') }}</h2>
          <el-collapse v-model="activeNames" >
            <el-collapse-item :title="$t('faq.transaction.howToConsignCard')" name="consign" id="consign">
              <div class="flexRow">
                <div class="flexColumn">
                  <p><span class="num">1</span>{{ $t('faq.transaction.howToConsignCard_step1') }}</p>
                  <img :src="require(`~/assets/images/faq/consign_1.jpg`)">
                </div>
                <div class="flexColumn">
                  <p><span class="num">2</span>{{ $t('faq.transaction.howToConsignCard_step2') }}</p>
                  <img :src="require(`~/assets/images/faq/consign_2.jpg`)">
                </div>
                <div class="flexColumn">
                  <p><span class="num">3</span>{{ $t('faq.transaction.howToConsignCard_step3') }}</p>
                  <img :src="require(`~/assets/images/faq/consign_3.jpg`)">
                </div>
              </div>
              <div class="flexRow">
                <div class="flexColumn">
                  <p><span class="num">4</span>{{ $t('faq.transaction.howToConsignCard_step4') }}<br>{{ $t('faq.transaction.howToConsignCard_step4a') }}</p>
                  <img :src="require(`~/assets/images/faq/consign_4.jpg`)">
                </div>
                <div class="flexColumn">
                  <p><span class="num">5</span>{{ $t('faq.transaction.howToConsignCard_step5') }}</p>
                  <img :src="require(`~/assets/images/faq/consign_5.jpg`)">
                </div>
                <div class="flexColumn">
                  <p><span class="num">6</span>{{ $t('faq.transaction.howToConsignCard_step6') }}</p>
                  <img :src="require(`~/assets/images/faq/consign_6.jpg`)">
                </div>
              </div>
              <div class="flexRow">
                <div class="flexColumn">
                  <p>
                    <span class="num">7</span>{{ $t('faq.transaction.howToConsignCard_step7') }}<br>
                    <span class="num">8</span>{{ $t('faq.transaction.howToConsignCard_step8') }}<br>
                    <span class="num">9</span>{{ $t('faq.transaction.howToConsignCard_step9') }}
                  </p>
                  <img :src="require(`~/assets/images/faq/consign_7.gif`)">
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item :title="$t('faq.transaction.howToTakeBack')" name="takeback" id="takeback">
              <div class="flexRow">
                <div class="flexColumn">
                  <p><span class="num">1</span>{{ $t('faq.transaction.howToTakeBack_step1') }}</p>
                  <img :src="require(`~/assets/images/faq/take-back_1.jpg`)">
                </div>
                <div class="flexColumn">
                  <p><span class="num">2</span>{{ $t('faq.transaction.howToTakeBack_step2') }}</p>
                  <img :src="require(`~/assets/images/faq/take-back_2.jpg`)">
                </div>
                <div class="flexColumn">
                  <p><span class="num">3</span>{{ $t('faq.transaction.howToTakeBack_step3') }}</p>
                  <img :src="require(`~/assets/images/faq/take-back_3.gif`)">
                </div>
              </div>
              <div class="flexRow">
                <div class="flexColumn">
                  <p><span class="num">4</span>{{ $t('faq.transaction.howToTakeBack_step4') }}</p>
                  <img :src="require(`~/assets/images/faq/take-back_4.jpg`)">
                </div>
                <div class="flexColumn">
                  <p><span class="num">5</span>{{ $t('faq.transaction.howToTakeBack_step5') }}</p>
                  <img :src="require(`~/assets/images/faq/take-back_5.jpg`)">
                </div>
                <div class="flexColumn">
                  <p><span class="num">6</span>{{ $t('faq.transaction.howToTakeBack_step6') }}</p>
                  <img :src="require(`~/assets/images/faq/take-back_6.gif`)">
                </div>
              </div>
              <div class="flexRow">
                <div class="flexColumn">
                  <p><span class="num">7</span>{{ $t('faq.transaction.howToTakeBack_step7') }}</p>
                  <img :src="require(`~/assets/images/faq/take-back_7.jpg`)">
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item :title="$t('faq.transaction.howToWithdraw')" name="cashout" id="cashout">
                <div class="flexRow">
                  <div class="flexColumn">
                    <p><span class="num">1</span>{{ $t('faq.transaction.howToWithdraw_step1') }}</p>
                    <img :src="require(`~/assets/images/faq/cash-out_1.jpg`)">
                  </div>
                  <div class="flexColumn">
                    <p><span class="num">2</span>{{ $t('faq.transaction.howToWithdraw_step2') }}</p>
                    <img :src="require(`~/assets/images/faq/cash-out_2.jpg`)">
                  </div>
                  <div class="flexColumn">
                    <p><span class="num">3</span>{{ $t('faq.transaction.howToWithdraw_step3') }}</p>
                    <img :src="require(`~/assets/images/faq/cash-out_3.gif`)">
                  </div>
                </div>
                <div class="flexRow">
                   <div class="flexColumn">
                    <p><span class="num">4</span>{{ $t('faq.transaction.howToWithdraw_step4') }}<br><span class="num">5</span>{{ $t('faq.transaction.howToWithdraw_step5') }}</p>
                    <img :src="require(`~/assets/images/faq/cash-out_4.gif`)">
                  </div>
                  <div class="flexColumn">
                    <p><span class="num">6</span>{{ $t('faq.transaction.howToWithdraw_step6') }}</p>
                    <img :src="require(`~/assets/images/faq/cash-out_5.gif`)">
                  </div>
                  <div class="flexColumn">
                    <p><span class="num">7</span>{{ $t('faq.transaction.howToWithdraw_step7') }}</p>
                    <img :src="require(`~/assets/images/faq/cash-out_6.gif`)">
                  </div>
                </div>
            </el-collapse-item>
            <el-collapse-item :title="$t('faq.transaction.howToDeposit')" name="gccoin" id="gccoin">
                <div class="flexRow">
                   <div class="flexColumn">
                      <div><span class="num">1</span>{{ $t('faq.transaction.howToDeposit_step1') }}</div>
                      <div><span class="num">2</span>{{ $t('faq.transaction.howToDeposit_step2') }}</div>
                      <div><span class="num">3</span>{{ $t('faq.transaction.howToDeposit_step3') }}</div>
                      <div>{{ $t('faq.transaction.howToDeposit_step3a') }}</div>
                      <div>{{ $t('faq.transaction.howToDeposit_step3b') }}</div>
                      <div><span class="num">4</span>{{ $t('faq.transaction.howToDeposit_step4') }}</div>
                      <div><span class="num">5</span>{{ $t('faq.transaction.howToDeposit_step5') }}<a href="https://lin.ee/BFfDqGq" target="_blank">{{ $t('faq.transaction.howToDeposit_step5a') }}</a></div>
                      <div><span class="num">6</span>{{ $t('faq.transaction.howToDeposit_step6') }}</div>
                      <img :src="require(`~/assets/images/faq/gccoin.jpg`)">
                  </div>
                </div>
                

                  
            </el-collapse-item>
          </el-collapse>
        </section>
    </div>


  </div>
</template>

<script>

  export default {
    data () {
      return {
        activeNames: this.$route.params.id,	
      }  
    },
    components: {
    },
    mounted () { 
      this.anchorTo()
     
    },
    methods: {
      anchorTo() {
        const path = this.$route.path.split("/"); // 把Url通過/截成多份
        const lastPath = path[path.length-1]; //只取網址中最後一層路徑
        if(lastPath != 'faq'){
          const elmnt = document.getElementById(lastPath);
          const y = elmnt.offsetTop;
          window.scrollTo(0, y);
        }

      },
    
    }
}
</script>

<style lang="scss">
  @import "assets/css/base/default.scss";
  @import "assets/css/pages/subPage_faq.scss";
 
</style>

