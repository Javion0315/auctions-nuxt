<template>
  <div>
    <section class="policy mainContent" style="margin: 70px">
      <section class="Privacy" style="padding: 0px">
        <div class="container">
            <el-row :gutter="20">
                <el-col :span="14">
                    <div class="swiper swiperBox" v-swiper:swiper2="swiperOption_Items" ref="swiperBox2"
                    style="width: 50%; height: 450px">
                          <div class="swiper-wrapper">
                              <div class="swiper-slide" v-for="(item, index) in data.images" :key="index">
                                   <div class="mvpList__item productList__item">
                                        <div class="productList__item__img product__imgMask">
                                            <img :src="imgPath + item" :alt="item.title">
                                            <svg class="clip-svg imgMask" width="0" height="0">
                                            <defs>
                                                <clipPath id="clip-shape" clipPathUnits="objectBoundingBox" >
                                                <polygon points="0.02 0.06, 0.98 0.06, 0.98 0.93, 0.02 0.93" />
                                                </clipPath>
                                            </defs>
                                            </svg>
                                        </div>
                                  </div>
                              </div>
                          </div>
                          <div class="swiper-button-prev swp_Items" slot="button-prev"></div>
                          <div class="swiper-button-next swp_Items" slot="button-next"></div> 
                      </div>
                </el-col>
                <el-col :span="10">
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
                            <span class="lastSale" style="margin-right: 30px">當前出價: USD {{ data.current_price }}</span>
                            <span style="color: #979797">({{ data.bids }}Bids)</span>
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
                    <div style="margin-top: 50px">
                        <div class="radioStyle" style="background-color: #F2F2F2; padding: 25px;">
                             <el-radio v-model="radio" label="Auto" style="font-size: 1.1rem">自動出價</el-radio>
                             <el-radio v-model="radio" label="unAuto" style="font-size: 1.1rem">直接出價</el-radio>
                             <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px">
                                 <div><el-input v-model="placeBids" placeholder="輸入出價上限"></el-input></div>
                                 <el-button type="primary" @click="bid" style="background-color: #0C4C78; border-radius: 5px;" size="medium">
                                    <span style="font-size: 1.1rem; padding: 0px 20px; letter-space: 1px">Place Bid</span>
                                </el-button>
                             </div>
                        </div>
                    </div>
                </el-col>
            </el-row>    
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import { getProductInfo } from '~/api/product';

export default {
  data() {
    return {
      productID: '',
      data: [],
      imgPath: '',
      day: 0,
      hr: 0,
      min: 0,
      sec: 0,
      radio: '',
      placeBids: '',
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
    bid() {
        console.log('bids')
    }
  }
}
</script>

<style scoped>
    .radioStyle >>> .el-radio__label {
        font-size: 1rem !important;
    }
</style>