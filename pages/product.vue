<template>
  <div>
    <div class="mainContent">
        <el-breadcrumb class="location container" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/auction/'+ data.special_id }">{{ data.special_name }}</el-breadcrumb-item>
            <el-breadcrumb-item class="current">{{ data.title }}</el-breadcrumb-item>
        </el-breadcrumb>
        
        <section class="container">
            <el-row :gutter="20">
                <el-col :span="24" :sm="14">
                    <div class="pdImg">
                        <el-carousel :autoplay="false" indicator-position="outside" arrow="always">
                            <el-carousel-item v-for="(item, index) in pdImg" :key="index">
                                <el-image 
                                    :src="pdImg[index]" 
                                    :preview-src-list="pdImg">
                                </el-image>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </el-col>
                <el-col class="pdInfo" :span="24" :sm="10">
                    <h1 class="title-m">{{ data.title }}</h1>
                    <div class="pdInfo__detail">
                        <div class="text">
                            <el-row class="price estimate" >
                                 <el-col :span="4">預估價:</el-col>
                                 <el-col :span="20">
                                     USD {{ data.estimated_price }}<br>
                                     TWD {{ data.estimated_price }}<br>
                                     HKD {{ data.estimated_price }}<br>
                                     CNY {{ data.estimated_price }}
                                 </el-col>
                            </el-row>
                            <el-row class="price SoldPrice" >
                                 <el-col :span="4">成交價:</el-col>
                                 <el-col :span="20">
                                     USD {{ data.estimated_price }}<br>
                                     TWD {{ data.estimated_price }}<br>
                                     HKD {{ data.estimated_price }}<br>
                                     CNY {{ data.estimated_price }}
                                 </el-col>
                            </el-row>
                            <el-button class="btn btn-secondary tab-anchor" type="text" @click="anchorScroll" data-goHash="privateSaleForm">
                                <span class="btn-text">Private Sale</span>
                            </el-button>
                            <div>
                                當前出價: USD {{ data.current_price }}<span class="text-gray">({{ data.bids }}Bids)</span><br>
                                拍賣會結束於: <span style="font-weight: bold; font-size: 1.2rem">{{ data.end_time }}</span><br>
                                <span v-if="sec > 0">剩餘時間: {{ day }}天 {{ hr }}時 {{ min }}分 {{ sec }}秒</span>
                            </div>
                        </div>
                    </div>
                    <div class="pdInfo__bidStyle" style="margin-top: 50px;background-color: #F2F2F2; padding: 25px;">
                        <el-radio v-model="radio" label="Auto">自動出價</el-radio>
                        <el-radio v-model="radio" label="unAuto">直接出價</el-radio>
                        <el-row class="bidStyle__Btn row flexBetween" v-if="autobid === 0" style="margin-top: 15px;">
                            <el-col :span="12">
                               <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm col">
                                    <el-form-item prop="placeAutoBids" v-if="radio === 'Auto' && autobid === 0" style="margin-bottom: 0px">
                                        <el-input v-model="ruleForm.placeAutoBids" placeholder="輸入出價上限" :disabled="radio === ''"></el-input>
                                    </el-form-item>
                                    <el-form-item prop="placeBids" v-else style="margin-bottom: 0px">
                                        <el-input v-model="ruleForm.placeBids" placeholder="輸入出價上限" :disabled="radio === ''"></el-input>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                            <div class="col btn btn-solid-primary" v-if="autobid === 0" @click="bid('ruleForm')">Place Bid</div>

                        </el-row>
                        <div v-else style="background-color: white; border: 2px solid #D12558; color: #D12558;
                            padding: 0px 20px; border-radius: 5px; text-align: center; height: 40px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin: 15px 0px;">您已設置自動出價</div>
                        <div v-if="radio === 'Auto' && autobid === 0"
                        style="color: #979797; font-size: 0.9rem;
                        margin-left: 15px; margin-top: 15px">系統將按增額，依序遞補出價至上限金額為止</div>
                        <div v-else-if="autobid > 0">
                            <div style="color: #979797; font-size: 0.9rem;
                            margin-left: 15px; margin-top: 15px">必須等到自動出價上限被超越，才能調高出價</div>
                            <div style="color: #D12558; font-size: 0.9rem; margin-left: 15px;">目前出價：${{ data.current_price }}</div>
                            <div style="color: #D12558; font-size: 0.9rem; margin-left: 15px;">您的自動出價上限：${{ autobid }}</div>
                        </div>                        
                        <div v-else
                        style="color: #979797; font-size: 0.9rem;
                        margin-left: 15px; margin-top: 15px">最低出價金額：${{ data.current_price }}</div>
                        <!-- auto_bid_price -->
                    </div>
                </el-col>
            </el-row> 
            <el-row :gutter="20" style="margin-top: 20px">
                <el-col class="pdDescription" :span="24" :sm="14">
                    <bidsHistory ref="list"></bidsHistory>
                    <!-- <productDescription></productDescription> -->
                    <!-- <privateSaleForm></privateSaleForm> -->
                </el-col>
                <el-col class="pdTool" :span="24" :sm="10">
                    <div style="display: flex; flex-direction: column; width: 100%; margin-top: 60px">
                        <el-button class="btnStyle" plain @click="social_sharing"><i class="el-icon-s-promotion iconStyle"></i> Share To</el-button>
                        <el-button class="btnStyle" plain @click="ics_download()"><i class="el-icon-date iconStyle"></i> Add Calander</el-button>
                        <!-- <el-button class="btnStyle follow" plain><span class="iconStyle"><font-awesome-icon  :icon="['far', 'heart']" /></span>Follow</el-button> -->
                        <el-button class="btnStyle follow" plain @click="addFavorite">
                            <span class="iconStyle">
                                <font-awesome-icon  :icon="['far', 'heart']" v-if="shoppingcartCount === 0" />
                                <font-awesome-icon  :icon="['fas', 'heart']" v-else style="color: red" />
                            </span>
                            Follow</el-button>
                        <el-button class="btnStyle" plain @click="open_msgBox"><i class="el-icon-message iconStyle"></i> E-mail Notifications</el-button>
                    </div>
                </el-col>
            </el-row> 
            <div class="social_sharing alert">
                <social-sharing url="https://vuejs.org/" inline-template>
                    <div>
                        <!-- <network network="email">
                            <i class="icon icon-mail" title="Email"></i> Email
                        </network> -->
                        <network network="facebook">
                        <i class="icon icon-fb" title="Facebook"></i> Facebook
                        </network>
                        <network network="googleplus">
                        <i class="icon icon-google-plus" title="Google +"></i> Google +
                        </network>
                        <network network="reddit">
                        <i class="icon icon-reddit" title="Reddit"></i> Reddit
                        </network>
                        <network network="twitter">
                        <i class="icon icon-twitter" title="Twitter"></i> Twitter
                        </network>
                        <!-- <network network="skype">
                        <i class="icon icon-skype" title="Skype"></i> Skype
                        </network>
                        <network network="whatsapp">
                        <i class="icon icon-whatsapp" title="Whatsapp"></i> Whatsapp
                        </network> -->
                        <network network="line">
                        <i class="icon icon-chat" title="Line"></i> Line
                        </network>
                        <network network="weibo">
                        <i class="icon icon-sina-weibo" title="Weibo"></i> Weibo
                        </network> 
                    </div>
                </social-sharing>  
            </div>
        </section>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import { getProductInfo, bidGoods, autoBidGoods, addShoppingcart, removeShoppingcart } from '~/api/product';
import bidsHistory from '~/components/bidsHistory'
// import productDescription from '~/components/productDescription'
// import privateSaleForm from '~/components/privateSaleForm'
import {showBlackOverlay} from 'assets/js/common.js';

export default {
  components: {
      bidsHistory,
    //   productDescription,
    //   privateSaleForm
  },
  data() {
      var validatePrice = (rule, value, callback) => {
        if (value <= this.data.current_price && this.radio !== '') {
          callback(new Error('請高於當前出價'));
        } else {
          callback();
        }
    };
    return {
      productID: '',
      shoppingcartCount: 0,
      autobid: 0,
      data: [],
      pdImg: [],
      imgPath: '',
      day: 0,
      hr: 0,
      min: 0,
      sec: 0,
      radio: '',
      ruleForm: {
        placeBids: '',
        placeAutoBids: ''
      },
      rules: {
            placeAutoBids: [
                { validator: validatePrice, trigger: ['blur', 'change'] }
            ],
            placeBids: [
                { validator: validatePrice, trigger: ['blur', 'change'] }
            ],
      },          }
  },
  created() {
      this.imgPath = process.env.IMAGE_DOMAIN;
      this.productID = this.$route.path.split('product/')[1]
      this.getInit()
  },
  methods: {
    ics_download(){
        // Create event : this.$ics.addEvent(language, subject, description, location, begin, stop, url, organizer, rrule)
        this.$ics.addEvent('GemCard Auction', this.data.title , '','', this.data.start_time, this.data.end_time)
        // Download calendar file : this.$ics.download(fileName)
        this.$ics.download('GemCard-Auction')
    },       
    addFavorite() {
        const data = {
            token: Cookies.get('token'),
            goods_id: this.productID
        }
        if (this.shoppingcartCount === 0) {
            addShoppingcart(data).then((res) => {
                this.$notify({
                    title: '成功',
                    message: res.data.msg,
                    type: 'success'
                });
                this.getInit()
            })
        } else {
            removeShoppingcart(data).then((res) => {
                this.$notify({
                    title: res.data.msg,
                    type: 'error'
                });
                this.getInit()
            })
        }
        
    },
    getInit() {
        const data = {
            token: Cookies.get('token'),
            goods_id: this.productID
        }
        getProductInfo(data).then((res) => {
            this.data = res.data.goodsData
            this.shoppingcartCount = res.data.shoppingcartCount
            this.countdown()
            this.autobid = res.data.auto_bid_price
            if (this.autobid > 0 ) {
                this.radio = 'Auto'
            }


            //取得產品圖
            const pdImgLength = this.data.images.length;
            for (let i = 0; i <= pdImgLength-1; i++) {
                let getPdImg = [];
                getPdImg = process.env.IMAGE_DOMAIN + this.data.images[i];
                this.pdImg.push(getPdImg);
            }
        })
        
    },
    countdown() {
        const end = new Date(this.data.end_time).getTime()
        const now = new Date().getTime()
        const msec = end - now
        let day = parseInt(msec / 1000 / 60 / 60 / 24)
        let hr = parseInt(msec / 1000 / 60 / 60 % 24)
        let min = parseInt(msec / 1000 / 60 % 60)
        let sec = parseInt(msec / 1000 % 60)
        this.day = day
        this.hr = hr > 9 ? hr : '0' + hr
        this.min = min > 9 ? min : '0' + min
        this.sec = sec > 9 ? sec : '0' + sec
        const that = this
        setTimeout(function () {
            that.countdown()
        }, 1000)
    },
    bid(formName) {
        const data = {
            token: Cookies.get('token'),
            goods_id: this.productID,
            bid_price: this.radio === 'Auto' ? this.ruleForm.placeAutoBids : this.ruleForm.placeBids
        }

        this.$refs[formName].validate((valid) => {
            if (valid && this.radio === 'unAuto') {
                bidGoods(data).then((res) => {
                    if (res.data.code === 1) {
                        this.$notify({
                            title: '成功',
                            message: res.data.msg,
                            type: 'success'
                        });
                        this.$refs.list.getInit();
                        this.getInit()
                    } else {
                        this.$notify({
                            title: res.data.msg,
                            type: 'error'
                        });
                    }
                    this.$refs[formName].resetFields()
                })
            } else if (valid && this.radio === 'Auto') {
                autoBidGoods(data).then((res) => {
                    if (res.data.code === 1) {
                        this.$notify({
                            title: '成功',
                            message: res.data.msg,
                            type: 'success'
                        });
                        this.getInit()
                    } else {
                        this.$notify({
                            title: res.data.msg,
                            type: 'error'
                        });
                    }
                    this.$refs[formName].resetFields()
                })
            } else {
                this.$notify.error({
                    title: '錯誤',
                    message: '請檢查填寫金額有無錯誤',
                    duration: 2500
                });
                this.$refs[formName].resetFields()
            }
        });
    },
    // cancel() {
    //     const data = {
    //         token: Cookies.get('token'),
    //         goods_id: this.productID
    //     }
    //     cancelAutoBidGoods(data).then((res) => {
    //         if (res.data.code === 1) {
    //             this.$notify({
    //                 title: '成功',
    //                 message: res.data.msg,
    //                 type: 'success'
    //             });
    //             this.getInit()
    //         } else {
    //             this.$notify({
    //                 title: res.data.msg,
    //                 type: 'error'
    //             });
    //         }
    //     })
    // },
    anchorScroll(){
        $(".text").on('click',".tab-anchor", function(){
              var attr = this.getAttribute("data-goHash");
              var target_top = document.getElementById(attr).offsetTop;
              $("html,body").animate({scrollTop: target_top + 800}, 700);
        });
    },
    social_sharing(){
        showBlackOverlay();
        $(".social_sharing").addClass('active');
    },
    open_msgBox(){
        this.$prompt('請輸入您的Email，競投開始前，我們將以Email通知您', ' E-mail Notifications', {
          confirmButtonText: '確定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: 'Email格式不正確'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的Email是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消輸入'
          });       
        });
    },
    following(){
        if($(".follow").hasclass(".active")){
            console.log(1)
            this.following = true;
            this.followText = 'Following';
        }else{
            this.following = false;
            this.followText = 'Follow';
        }
    }
  }
}
</script>

<style scoped>
    .radioStyle >>> .el-radio__label {
        font-size: 1rem !important;
    }
    .btnStyle {
        margin-left: 0px;
        margin-bottom: 20px;
        padding-left: 50px;
        text-align: left;
        font-size: 1rem;
    }
    .iconStyle {
        margin-right: 15px
    }
</style>
<style lang="scss">
  @import "assets/css/base/default.scss";
  @import "assets/css/pages/subPage_product.scss";
  
</style>