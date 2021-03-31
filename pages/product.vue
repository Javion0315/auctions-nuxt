<template>
  <div>
    <section class="mainContent" style="margin: 70px">
      <section class="Privacy" style="padding: 0px">
        <div class="container">
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

                        <!-- <div class="swiper swiperBox" v-swiper:swiper2="swiperOption_Items" ref="swiperBox2">
                            <div class="swiper-wrapper"> 
                                <div class="swiper-slide" v-for="(item, index) in pdImg" :key="index">
                                    <el-carousel>
                                        <el-carousel-item v-for="item in imgs" v-bind:key="item.url">
                                            <el-image 
                                                :src="pdImg[0]" 
                                                :preview-src-list="pdImg">
                                            </el-image>
                                        </el-carousel-item>
                                    </el-carousel>
                                </div>  
                            </div>
                            <div class="swiper-button-prev swp_Items" slot="button-prev"></div>
                            <div class="swiper-button-next swp_Items" slot="button-next"></div>
                         </div>
                        <i class="el-icon-zoom-in iconStyle" style="cursor: pointer;" @click="viewerShow()"></i> -->
                    </div>
                </el-col>
                <el-col :span="24" :sm="10" style="padding-left: 50px">
                    <h2
                        class="title-m"
                        style="
                        font-weight: bold;
                        font-size: 1.4rem;
                        line-height: 30px;
                        margin-bottom: 1.5rem;
                        "
                    >
                        {{ data.title }}
                    </h2>
                    <div style="font-size: 1.1rem">
                        <div class="price" style="margin-bottom: 8px">
                            <span class="lastSale">預估價: USD {{ data.estimated_price }}</span>
                        </div>
                        <div class="price" style="margin-bottom: 8px">
                            <span class="lastSale" style="margin-right: 30px">當前出價: USD ${{ data.current_price }}</span>
                            <span style="color: #979797">({{ data.bids }} Bids)</span>
                        </div>
                        <div class="price" style="margin-bottom: 8px">
                            <span class="lastSale">拍賣會結束於: 
                                <span style="font-weight: bold; font-size: 1.2rem">{{ data.end_time }}</span>
                            </span>
                        </div>
                        <div class="price" style="margin-bottom: 8px" v-if="min > 0">
                            <span class="lastSale">剩餘時間: {{ day }}天 {{ hr }}時 {{ min }}分 {{ sec }}秒</span>
                        </div>
                    </div>
                    <div class="bidStyle" style="margin-top: 50px;background-color: #F2F2F2; padding: 25px;">
                        <el-radio v-model="radio" label="Auto">自動出價</el-radio>
                        <el-radio v-model="radio" label="unAuto">直接出價</el-radio>
                        <el-row class="bidStyle__Btn row flexBetween">
                            <el-col :span="12">
                                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm col">
                                    <el-form-item prop="placeAutoBids" v-if="radio === 'Auto'" style="margin-bottom: 0px">
                                        <el-input v-model="ruleForm.placeAutoBids" placeholder="輸入出價上限" :disabled="radio === ''"></el-input>
                                    </el-form-item>
                                    <el-form-item prop="placeBids" v-else style="margin-bottom: 0px">
                                        <el-input v-model="ruleForm.placeBids" placeholder="輸入出價上限" :disabled="radio === ''"></el-input>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                            <div class="col btn btn-solid-primary" @click="bid('ruleForm')">Place Bid</div>
                            <!-- <el-col :span="10"> -->
                            <!-- </el-col> -->
                        </el-row>
                        <div v-if="radio === 'Auto'"
                        style="color: #979797; font-size: 0.9rem;
                        margin-left: 15px; margin-top: 15px">系統將按增額，依序遞補出價至上限金額為止</div>
                        <div v-else
                        style="color: #979797; font-size: 0.9rem;
                        margin-left: 15px; margin-top: 15px">最低出價金額：${{ data.current_price }}</div>
                        <!-- auto_bid_price -->
                    </div>
                </el-col>
            </el-row> 
            <el-row :gutter="20" style="margin-top: 20px">
                <el-col :span="24" :sm="14">
                    <bidsHistory ref="list"></bidsHistory>
                </el-col>
                <el-col :span="24" :sm="10" style="padding-left: 50px">
                    <div style="display: flex; flex-direction: column; width: 100%; margin-top: 60px">
                        <el-button class="btnStyle" plain><i class="el-icon-s-promotion iconStyle"></i> Share To</el-button>
                        <el-button class="btnStyle" plain><i class="el-icon-date iconStyle"></i> Add Calander</el-button>
                        <el-button class="btnStyle" plain><span class="iconStyle"><font-awesome-icon  :icon="['far', 'heart']" /></span> Follow</el-button>
                        <el-button class="btnStyle" plain><i class="el-icon-message iconStyle"></i> E-mail Notifications</el-button>
                    </div>
                </el-col>
            </el-row>   
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import { getProductInfo, bidGoods, autoBidGoods } from '~/api/product';
import bidsHistory from '~/components/bidsHistory'

export default {
  components: {
      bidsHistory,
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
      },
      swiperOption_Items: {
        speed:1000,
        slidesPerView: 1,
        spaceBetween : 25,
        centeredSlides: false,
        pagination: {
            el: '.swiper-pagination.swp_Items',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next.swp_Items',
            prevEl: '.swiper-button-prev.swp_Items',
        },
        // mousewheel: true,
        // autoplay: true,
        preloadImages: false,
        lazy: true,
        breakpoints: {
            768:{
            spaceBetween : 30,
            centeredSlides: true,
            slidesOffsetBefore: -270,
            slidesPerView: 3.5,
            // initialSlide: 1,
            },
            450:{
            spaceBetween : 25,
            centeredSlides: true,
            slidesOffsetBefore: -70,
            slidesPerView: 1.7,
            // initialSlide: 1,
            }
        },
    },
    }
  },
  created() {
      this.imgPath = process.env.IMAGE_DOMAIN;
      this.productID = this.$route.path.split('product/')[1]
      this.getInit()
  },
  methods: {
    getInit() {
        const data = {
            goods_id: this.productID
        }
        getProductInfo(data).then((res) => {
            this.data = res.data.goodsData
            this.countdown()
            this.autobid = res.data.auto_bid_price
            console.log(res.data)

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
                        console.log(res)
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
    viewerShow() {
        const viewer = this.$el.querySelector('.v-viewer-box').$viewer
        viewer.show()
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