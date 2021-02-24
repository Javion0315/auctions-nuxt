<template>
  <div>
      <div class="download">
          <div class="download__content">
                <div div class="mobileHide">
                    <h3 class="text">請使用手機開啟應用程式查看商品</h3>
                    <div style="padding:24px;overflow-y:hidden;overflow-x:hidden;">
                        <div class="app_logo_badge">
                            <img src="~assets/images/logo_vertical.svg">
                        </div>
                        <div class="download-btn" >
                            <a href="https://apps.apple.com/us/app/id1527395702" target="_blank">
                                <img src="~assets/images/btn_appstore_footer.png">
                            </a>
                        </div>
                        <div class="download-btn">
                            <a href="https://play.google.com/store/apps/details?id=com.cardcool.gemcard" target="_blank">
                                <img src="~assets/images/btn_googleplay_footer.png">
                            </a>
                        </div>
                    </div>	
                </div>
                <div class="mobileBlock">
                        <div style="padding:24px;overflow-y:hidden;overflow-x:hidden;">
                            <div class="app_logo_badge">
                                <img src="~assets/images/logo_vertical.svg">
                            </div>
                        </div>	
                        <h3 class="text">Open In App...</h3>
                    <!-- <span class="oppenButton__label" v-on:click="openApp">Open In APP</span> -->
                </div>
          </div>
          <footer class="download__footerMap mobileHide">
                <div class="row container">
                    <a href="mailto:support@gemcard.co">support@gemcard.co</a>
                    <div class="row download__footerMap__social txtCenter">
                        <ul class="social-icons">
                            <li class="social-icons__item fluid"><a href="#"><i class="icon icon-fb"></i></a></li>
                            <li class="social-icons__item fluid"><a href="#"><i class="icon icon-twitter"></i></a></li>
                            <li class="social-icons__item fluid"><a href="#"><i class="icon icon-medium"></i></a></li>
                            <li class="social-icons__item fluid"><a href="#"><i class="icon icon-ig"></i></a></li>
                        </ul>
                    </div>
                </div>
          </footer>
      </div>
  </div>
</template>

<script>

  export default {
    layout: 'no_header_footer',
    components: {
    },
    data () {
      return {				
        
      }
    },
    mounted () { 
        //手機版時，自動導向下載頁（未裝載app），或開啟app（已裝載app）
        if($(window).width() < 768){
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios

            let githubURL = new URL(window.location.href);
            let params = githubURL.searchParams;
            let scheme_link = params.get('u');

            var ios_download_link = "https://apps.apple.com/us/app/id1527395702";
            var Android_download_link = "https://play.google.com/store/apps/details?id=com.cardcool.gemcard";
            var appWindow = window.location.href = scheme_link;
            // var appWindow = window.location.replace(scheme_link);
            setTimeout( function () {
                if (!appWindow && isiOS == true) {
                    window.location.replace(ios_download_link);
                }else if(!appWindow && isAndroid == true){
                    window.location.replace(Android_download_link);
                }
                
            },500);
        }
    },
    methods: {
        
        
    },
      
  }
</script>

<style lang="scss">
  @import "assets/css/base/default.scss";
  @import "assets/css/pages/subPage_download.scss";
 
</style>