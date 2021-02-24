<template>
  <div>
      <div class="payment">
          <div class="payment__content">
                <div class="app_logo_badge">
                    <img src="~assets/images/fail@2x.png">
                </div>
                <h3 class="text">Payment Failed</h3>
                <p>Your order was expired, PayPal will refund your payment.</p>
                <div class="btn btn-solid">
                    <a href="#">
                        Back to GemCard
                    </a>
                </div>
          </div>
      </div>
      
  </div>
</template>

<script>

  export default {
    components: {
    },
    data () {
      return {				
        
      }
    },
    mounted () { 
        
    },
    methods: {
        
    },
      
  }
</script>

<style lang="scss">
  @import "assets/css/base/default.scss";
  @import "assets/css/pages/subPage_payment.scss";
 
</style>