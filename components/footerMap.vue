
<template>
<div>

        <div id="popup">
            <div id="popup--light" class="popup__content">
                <h3 class="text">Download App</h3>
                <div style="padding:24px;overflow-y:hidden;overflow-x:hidden;">
                    <div class="app_logo_badge" >
                        <img src="~assets/images/logo_vertical.svg">
                    </div>
                    <div class="popup__content__btn">
                        <a href="https://apps.apple.com/us/app/id1527395702" 
                        target="_blank"
                        @click="openApp() ; gtagTrack('Download_Popup_iOS')">
                            <img src="~assets/images/btn_appstore_footer.png">
                        </a>
                    </div>
                    <div class="popup__content__btn">
                        <a href="https://play.google.com/store/apps/details?id=com.cardcool.gemcard" 
                        target="_blank"
                        @click="openApp() ; gtagTrack('Download_Popup_Android')">
                            <img src="~assets/images/btn_googleplay_footer.png">
                        </a>
                    </div>
                </div>	
                <div class="close-bt" v-on:click="close_popup_DowloadApp">
                    <span class="icon-close"></span>
                </div>
            </div> 
            <div id="popup--fade" class="black-overlay" v-on:click="close_popup_DowloadApp"></div>
            

        </div>

        <footer class="footerMap">
            <div class="row container">
                <div class="logo-vertical footerMap__logo">
                    <nuxt-link :to="localePath('index')" title="GemCard"><img src="~assets/images/logo_vertical.svg"></nuxt-link>
                </div>
                <div class="footerMap__list">
                    <div class="row">
                        <div class="footerMap__list__item list__item">
                            <p class="title-m dropdown-trigger" v-on:click="menuDropDown">Popular Releases</p>
                        </div>
                        <div class="footerMap__list__item list__item">
                            <p class="title-m dropdown-trigger" v-on:click="menuDropDown">Popular Basketball Rookie Cards</p>
                        </div>
                        <div class="footerMap__list__item list__item">
                            <p class="title-m dropdown-trigger" v-on:click="menuDropDown">News</p>
                        </div>
                        <div class="footerMap__list__item list__item">
                            <p class="title-m dropdown-trigger" v-on:click="menuDropDown">About GemCard</p>
                            <ul class="mapLink dropdown">
                                <li class="mapLink__item"><nuxt-link :to="localePath('howitworks')">How To Sell & Buy Cards</nuxt-link></li>
                                <li class="mapLink__item"><nuxt-link :to="localePath('about_us')">About Us</nuxt-link></li>
                            </ul>
                        </div>
                        <!-- <div class="footerMap__list__item list__item">
                            <p class="title-m"><nuxt-link to="/policy" title="Policy">Policy</nuxt-link></p>
                        </div> -->
                    </div>
                    <div class="row footerMap__social txtCenter">
                        <div class="l-officeInfo">
                            <div class="c-officeInfo">
                                <div class="c-officeInfo__title">
                                    【公司資訊】
                                </div>
                                <div class="c-officeInfo__content">
                                    <p>CardCool卡庫股份有限公司</p>
                                    <p>總部地址：106台北市大安區敦化南路二段77號3樓之5</p>
                                    <p>客服電話（不含例假日）：02-2701-7781</p>
                                    <p>服務信箱：<a href="mailto:support@gemcard.co">support@gemcard.co</a></p>
                                    <p>©️2020 卡庫股份有限公司 版權所有</p>
                                </div>
                                <div class="c-officeInfo__content">
                                    <p>CardCool Co., Ltd.</p>
                                    <p>HQ Address: 3F.-5, No. 77, Sec. 2, Dunhua S. Rd., Da’an Dist., Taipei City 106, Taiwan</p>
                                    <p>TEL: +886 2 2701 7781</p>
                                    <p>Email: <a href="mailto:support@gemcard.co">support@gemcard.co</a></p>
                                    <p>©️2020 CardCool Co., Ltd.</p>
                                </div>
                            </div>
                            <div class="c-officeInfo">
                                <div class="c-officeInfo__title">
                                    【退換貨資訊】
                                </div>
                                <div class="c-officeInfo__content">
                                    <p>・退貨：<br>依照消費者保護法的規定，平台使用者享有商品貨到日起七日鑑賞期的權益。然而鑑賞期並非試用期，因此您所退回的商品必須是包裝完整、商品產品編號貼紙無撕損，且在七日鑑賞期內與本公司聯絡退換貨事宜。</p>
                                    <p>・換貨：<br>若商品有以下狀況，請聯絡本公司，並將原商品寄回本公司，為您處理換貨事宜：<br>
                                        <span>1. 內容物與包裝標示不符。</span><br>
                                        <span>2. 外包裝受損或髒污。</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <ul class="social-icons">
                            <li class="social-icons__item fluid"><a href="https://www.facebook.com/gemcard.official/" @click.native="gtagTrack('FollowUs_Facebook')"><i class="icon icon-fb"></i></a></li>
                            <!-- <li class="social-icons__item fluid"><nuxt-link to="" @click.native="gtagTrack('FollowUs_Twitter')"><i class="icon icon-twitter"></i></nuxt-link></li> -->
                            <li class="social-icons__item fluihref=d"><a href="https://gemcard.medium.com/" @click.native="gtagTrack('FollowUs_Medium')"><i class="icon icon-medium"></i></a></li>
                            <li class="social-icons__item fluid"><a href="https://www.instagram.com/gemcard_official/" @click.native="gtagTrack('FollowUs_Instagram')"><i class="icon icon-ig"></i></a></li>
                        </ul>
                        <!-- <div class="service txtCenter"><i class="icon-mail"></i> Service : <a href="mailto:support@gemcard.co">support@gemcard.co</a></div> -->
                    </div>
                </div>
            </div>
        </footer>
         
        <footerBanner/>


</div>
</template>

<script>

import footerBanner from '~/components/footerBanner';

import 'assets/js/common.js'
import {close_popup_DowloadApp} from 'assets/js/common.js';
import {closeAlert} from 'assets/js/common.js';

export default {
    components: {
      footerBanner,
    },
    data () {
        return {				
        }
    },
    beforeDestroy(){
    },
    created() {
    },
    mounted () {
        window.addEventListener('scroll', this.hasScrolled);
    },
    methods: {
        gtagTrack(eventName){
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
        open_popup_DowloadApp(){
            open_popup_DowloadApp();
        },
        close_popup_DowloadApp(){
            close_popup_DowloadApp();
        },
        closeAlert(){
            closeAlert();
        },
    },
}
</script>
