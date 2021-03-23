
<template>
<div>
            <div class="black-overlay" v-on:click="closeAlert"></div>
            <div class="maskDark" v-on:click="MaskHide"></div>
            <div id="downloadme" class="flexCenter animated fadeIn">
                <div id="download_content" class="flexCenter">
                <div id="download_logo"></div>
                <div id="download_text">
                    <div class="bold">GemCard App Download</div>
                </div>
                <div class="download_icon mobileHide">
                    <a href="https://apps.apple.com/us/app/id1527395702" 
                    target="_blank" 
                    @click="gtagTrack('Download_FixedTop_DeskTop_iOS')">
                        <img src="~assets/images/btn_appstore_footer.png">
                    </a>
                </div>
                <div class="download_icon mobileHide">
                    <a href="https://play.google.com/store/apps/details?id=com.cardcool.gemcard" 
                    target="_blank" 
                    @click="gtagTrack('Download_FixedTop_DeskTop_Android')">
                        <img src="~assets/images/btn_googleplay_footer.png">
                    </a>
                </div>
                <div class="oppenButton mobileBlock"> 
                    <span class="oppenButton__label" 
                    @click="openApp() ; gtagTrack('Download_FixedTop_Mobile')">Open</span>
                </div>
                </div>
            </div>
            <header class="header navbar--normal" :class="{ 'navbar--hidden': !showNavbar ,'navbar--fixed': navbarFixed }">
                <div class="header__toolBar">
                    <div class="container flexBetween">
                        <div class="logo_Horizontal header__toolBar__logo">
                            <nuxt-link :to="localePath('index')" title="GemCard"><h1 class="logoName">GemCard</h1></nuxt-link>
                        </div>
                        <div class="header__toolBar__tool">
                            <div class="searchBar">
                        </div>
                        </div>
                    </div>
                </div>
                <nav class="header__navBar">
                    <div class="container flexBetween">
                        <ul class="nav-pc">
                            <li class="nav-pc__item" style="margin-right: 20px"><nuxt-link :to="localePath('/')" title="HOME">HOME</nuxt-link></li>
                            <li class="nav-pc__item" @click="toggle = toggle !== 'AUCTION' ? 'AUCTION' : null">
                                <a class="Label" href="javascript:;">
                                    AUCTION
                                </a>
                                <ul class="nav-pc__dropDown" :class="{'isOpen': toggle === 'AUCTION' & showNavbar}">
                                    <li class="dropDown__item">
                                        <nuxt-link :to="localePath('auction_results')">Auction Results</nuxt-link>
                                    </li>
                                    <!-- <li class="dropDown__item">
                                        <nuxt-link :to="localePath('auction_results')">Account</nuxt-link>
                                    </li> -->
                                    <li class="dropDown__item">
                                        <nuxt-link :to="localePath('featuring_items')">Featuring Items</nuxt-link>
                                    </li>
                                     <li class="dropDown__item">
                                        <nuxt-link :to="localePath('current_auction')">Current Auction</nuxt-link>
                                    </li>
                                     <li class="dropDown__item">
                                        <nuxt-link :to="localePath('upcoming_auctions')">Upcoming Auctions</nuxt-link>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-pc__item" style="margin-right: 20px"><nuxt-link :to="localePath('register')" title="REGISTER">REGISTER</nuxt-link></li>
                            <li class="nav-pc__item" style="margin-right: 20px"><nuxt-link :to="localePath('consign')" title="CONSIGN">CONSIGN</nuxt-link></li>
                        </ul>
                        <div class="nav-mobile">
                            <span class="menuPanel-hamburguer" v-on:click="menuToggleOpen"></span>
                        </div>
                    </div>
                </nav>
            </header>

        <div class="menuPanel clearfix">
            <span class="icon-close" v-on:click="menuToggleOpen"></span>
            <div class="container clearfix">
                <div class="logo">
                    <nuxt-link :to="localePath('index')" title="GemCard"></nuxt-link>
                </div>
                <div class="logo-vertical">
                    <nuxt-link to="/" title="GemCard"><img src="~assets/images/logo_vertical.svg"></nuxt-link>
                </div>
                <ul class="menuPanel__nestedList">
                    <li class="list__item nestedList__item">
                        <nuxt-link :to="localePath('/')" title="HOME">
                            <span class="Label title-m">HOME</span>
                        </nuxt-link>
                    </li>
                    <li class="list__item nestedList__item">
                        <a href="#" class="Label title-m dropdown-trigger" v-on:click="menuDropDown">AUCTION</a>
                        <ul class="dropdown">
                            <li class="list__item dropdown__item" v-on:click="menuToggleOpen"><nuxt-link :to="localePath('auction_results')">Auction Results</nuxt-link></li>
                            <li class="list__item dropdown__item" v-on:click="menuToggleOpen"><nuxt-link :to="localePath('featuring_items')">Featuring Items</nuxt-link></li>
                            <li class="list__item dropdown__item" v-on:click="menuToggleOpen"><nuxt-link :to="localePath('current_auction')">Current Auction</nuxt-link></li>
                            <li class="list__item dropdown__item" v-on:click="menuToggleOpen"><nuxt-link :to="localePath('upcoming_auctions')">Upcoming Auctions</nuxt-link></li>
                        </ul>
                    </li>
                    <li class="list__item nestedList__item">
                        <nuxt-link :to="localePath('register')" title="REGISTER">
                            <span class="Label title-m">REGISTER</span>
                        </nuxt-link>
                    </li>
                    <li class="list__item nestedList__item">
                        <nuxt-link :to="localePath('consign')" title="CONSIGN">
                            <span class="Label title-m">CONSIGN</span>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>


</div>
</template>

<script>
import LangSwitcher from '~/components/LangSwitcher'

import 'assets/js/common.js'
import {closeTopDownload} from 'assets/js/common.js';
import {menuToggleOpen} from 'assets/js/common.js';
import {showMobileSearch} from 'assets/js/common.js';
import {MaskHide} from 'assets/js/common.js';
import {open_popup_DowloadApp} from 'assets/js/common.js';
import {openApp} from 'assets/js/common.js';
import {showBlackOverlay} from 'assets/js/common.js';
import {closeAlert} from 'assets/js/common.js';

  export default {
    components: {
        LangSwitcher
    },
    data () {
      return {				
        // menu bar fixed on top when scrolled
        showNavbar: true,
        navbarFixed: false,
        lastScrollPosition: 0,
        scrollValue: 0,
        // menu toggle open
        toggle: null,
      }
    },
    mounted () {
        window.addEventListener('click', this.closeElement);
       
       // this.lastScrollPosition = window.pageYOffset
        window.addEventListener('scroll', this.onScroll);
        // disable tab anchor “jump” when loading a page，這還不是最好的解法，因為選單明顯閃跳
        // $(document).on('click','.tabs-component-tab-a',function(e){
        //     window.removeEventListener('scroll', this.onScroll);
        //         var st=window.pageYOffset;
        //         $('html, body').animate({
        //                 'scrollTop' : st
        //         });
        // });
    },
    beforeDestroy(){
        window.removeEventListener('scroll', this.onScroll);
        window.removeEventListener('click', this.closeElement);
    },
    created() {
    },
    methods: {
        gtagTrack(eventName){
            gtag('event', eventName);
        },
        closeTopDownload(){
            closeTopDownload();
        },
        menuToggleOpen(){
            menuToggleOpen();
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
            var download_link = "https://play.google.com/store/apps/details?id=com.ddrift.gemcard";
            }
            if(isiOS == true){
            $(".oppenButton").show();
            var download_link = "https://apps.apple.com/tw/app/cardcool-%E5%8D%A1%E5%BA%AB/id1367506627";
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
        closeAlert(){
            closeAlert();
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
        closeElement(e) {
        // close desktop menu dropdown when click another element
            if (!this.$el.contains(e.target)) {
                this.toggle = !null;
            }
        },
        
    },
    
  }
</script>
