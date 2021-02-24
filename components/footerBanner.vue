
<template>
<div>
    <section class="floatBanner-download clearfix mobileBlock stickyBottom--normal" 
    :class="{ 'stickyBottom--fixed': !showNavbar ,'stickyBottom--hidden': navbarFixed }" 
    @click="openApp() ; gtagTrack('Download_FixedBottom_Mobile')">
            <div class="floatBanner-download__text">
                <img src="~assets/images/footerBanner-mobile-bg.svg">
                <div class="slogan"> 
                    <h3 class="subtitle fontBold">Trade Faster, Invest Smarter</h3>
                </div>
            </div>
    </section> 
    <section class="footerBanner-download clearfix mobileHide">
            <div class="footerBanner-download__text">
                <!-- <img src="~assets/images/footerBanner-bg.png"> -->
                <div class="slogan"> 
                    <!-- <h2 class="title">投資球卡，更快更準更自由</h2> -->
                    <h2 class="title"><br>
                    <span class="fontBold">Trade Faster, Invest Smarter</span></h2>
                    <h3 class="subtitle">Download GemCard App</h3>
                </div>
                <div class="row">
                    <div class="download_icon">
                        <a href="https://apps.apple.com/us/app/id1527395702" 
                        target="_blank"
                        @click="gtagTrack('Download_FooterBanner_DeskTop_iOS')">
                            <img src="~assets/images/btn_appstore_footer.png">
                        </a>
                    </div>
                    <div class="download_icon">
                        <a href="https://play.google.com/store/apps/details?id=com.cardcool.gemcard" 
                        target="_blank"
                        @click="gtagTrack('Download_FooterBanner_DeskTop_Android')">
                            <img src="~assets/images/btn_googleplay_footer.png">
                        </a>
                    </div>
                </div>
            </div>
    </section>          
</div>
</template>

<script>
import 'assets/js/common.js'
import {close_popup_DowloadApp} from 'assets/js/common.js';

export default {
    data () {
        return {				
            // menu bar fixed on top when scrolled
            showNavbar: true,
            navbarFixed: false,
            lastScrollPosition: 0,
            scrollValue: 0, 
        }
    },
    mounted () {
        window.addEventListener('scroll', this.hasScrolled);
        // this.lastScrollPosition = window.pageYOffset
        window.addEventListener('scroll', this.onScroll);
    },
    beforeDestroy(){
        window.removeEventListener('scroll', this.onScroll);
    },
    methods: {
        gtagTrack(eventName){
            // gtag('event', eventName, {'event_params': eventParams});
            gtag('event', eventName);
        },
        menuDropDown(){
            // var $this = this;
            var $window = $(window);
            if($window.width() < 768){
                $(".list__item").unbind('click').on('click',".dropdown-trigger", function(){
                    var $self_parent = $(this).parents(".list__item"),
                        $self_dropdown = $(this).siblings(".dropdown"),
                        $near_dropdown = $self_parent.siblings().find(".dropdown");

                    $self_dropdown.slideToggle("500");
                    $near_dropdown.slideUp("fast");
                });
            }
        },
        open_popup_DowloadApp(){
            open_popup_DowloadApp();
        },
        close_popup_DowloadApp(){
            close_popup_DowloadApp();
        },
        // menu bar fixed on top when scrolled
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
    },
}
</script>
