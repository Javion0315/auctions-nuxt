<template>
  <div>
    <div style="border-bottom: 1px solid #797979; padding-bottom: 25px" v-if="overview">
      <h2
        class="title-m"
        style="
          font-weight: bold;
          font-size: 2.2rem;
          line-height: 55px;
          margin-bottom: 1.5rem;
        "
      >
        {{ overview.title }}
      </h2>
      <h2
        class="title-m"
        style="
          font-weight: 300;
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: #d1ab71;
        "
        v-if="time.min > 0"
      >
        Lots Closing in
        <span style="font-weight: bold">{{ time.day }}天 {{ time.hr }}時 {{ time.min }}分 {{ time.sec }}秒</span>
      </h2>
      <h5 style="font-size: 1.2rem">
        Online Auction :
        <span style="font-weight: bold">{{ overview.start_time }} - {{ overview.end_time }}</span>
      </h5>
    </div>
    <div
      style="
        margin: 70px 0px 40px;
        border-bottom: 1px solid #797979;
        padding-bottom: 50px;
      "
    >
      <h2
        class="title-m"
        style="
          font-weight: 400;
          font-size: 2rem;
          line-height: 55px;
          margin-bottom: 1.5rem;
        "
      >
        {{ storyList.title }}
      </h2>
      <span>
        {{ storyList.content }}
      </span>
    </div>
    <div style="margin: 30px 0px">
      <el-row v-if="itemList">
        <el-col :span="10" style="padding: 18px">
          <div v-for="(item,index) in itemList.slice(0,1)" :key="index" style="text-align: center">
            <nuxt-link :to="localePath({ name: 'product-id', params: { id: item.id }})">
              <el-image style="width: 60%; height: auto" :src="imgPath + item.images[0]"> </el-image>
            </nuxt-link>
          </div>
        </el-col>
        <el-col :span="14" v-if="itemList">
          <div v-for="(item,index) in itemList.slice(0,1)" :key="index">
            <nuxt-link :to="localePath({ name: 'product-id', params: { id: item.id }})">
              <h2
                class="title-m"
                style="
                  font-weight: 300;
                  font-size: 2.2rem;
                  line-height: 55px;
                  margin-bottom: 1.5rem;
                  display : inline-block;
                  overflow : hidden;
                  text-overflow : ellipsis;
                  white-space : nowrap;
                  width : 100%;
                "
              >
                {{ item.title }}
              </h2>
              <span style="
                display : inline-block;
                overflow : hidden;
                text-overflow : ellipsis;
                white-space : nowrap;
                width : 100%;">
                {{ item.description }}
              </span>
              <div style="margin-top: 80px">
                <span>預估價<span style="margin-left: 43px">NTD {{ item.estimated_price }}</span></span
                ><br />
                <span
                  >目前出價 <span style="margin-left: 20px">NTD$ {{ item.current_price }}</span></span
                >
                <div>
                  <font-awesome-icon :icon="['far', 'heart']" />
                  Follow
                  <i
                    class="el-icon-date"
                    style="color: #dd6d7b; margin-left: 15px"
                  ></i>
                </div>
              </div>
            </nuxt-link>
          </div>
        </el-col>
      </el-row>
    </div>

    <div v-if="overview">
      <el-image :src="imgPath + overview.image"></el-image>
    </div>

    <div style="margin: 50px 0px" v-if="storyList2">
      <h2
        class="title-m"
        style="
          font-weight: 300;
          font-size: 1.7rem;
          line-height: 55px;
          margin-bottom: 1.5rem;
        "
      >
        {{ storyList2.title }}
      </h2>
      <span>
        {{ storyList2.content }}
      </span>
    </div>

    <div v-if="itemList">
      <div class="mvp hotProduct__section">
        <div class="mvpList slideList">
          <div
            class="swiper swiperBox"
            v-swiper:swiper2="swiperOption_Items"
            ref="swiperBox2"
          >
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(item, index) in itemList"
                :key="index"
              >
                <div
                  class="mvpList__item productList__item"
                  v-if="index === 10"
                >
                  <nuxt-link
                    :to="localePath('/product_ranking/hot_sales/silver')"
                    class="seeMore"
                  >
                    <span class="seeMore__text">See More</span>
                  </nuxt-link>
                </div>
                <div class="mvpList__item productList__item" v-else>
                  <nuxt-link
                    :to="localePath({ name: 'product-id', params: { id: item.id }})">
                    <div class="productList__item__img product__imgMask" style="margin-bottom: -35px;">
                      <img :src="imgPath + item.images[0]" :alt="item.title" />
                      <svg class="clip-svg imgMask" width="0" height="0">
                        <defs>
                          <clipPath
                            id="clip-shape"
                            clipPathUnits="objectBoundingBox"
                          >
                            <polygon
                              points="0.02 0.06, 0.98 0.06, 0.98 0.93, 0.02 0.93"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div class="text">
                        <h2
                            class="title-m"
                            style="
                            font-weight: bold;
                            font-size: 1.5rem;
                            line-height: 55px;
                            margin-bottom: -15px;
                            color: #001939;
                            display : inline-block;
                            overflow : hidden;
                            text-overflow : ellipsis;
                            white-space : nowrap;
                            width: 170px
                            "
                        >
                            {{ item.title }}
                        </h2>
                      <div class="row">
                        <div>
                          <span class="lastSale"
                            >預估價 NTD{{ item.estimated_price }}</span
                          >
                        </div>
                      </div>
                      <div class="row">
                        <div style="margin-bottom: 8px">
                          <span class="lastSale"
                            >目前出價 NTD{{ item.current_price }}</span
                          >
                        </div>
                      </div>
                      <div style="display: flex; justify-content: space-between; width: 95%; align-items: center;">
                          <div>
                              <font-awesome-icon :icon="['far', 'heart']" />
                              <span style="font-size: 0.9rem">Follow</span>
                          </div>
                          <div>
                              <i
                                class="el-icon-date"
                                style="color: #dd6d7b; margin-left: 15px"
                            ></i>
                          </div>
                        </div>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="swiper-button-prev swp_Items" slot="button-prev"></div>
            <div class="swiper-button-next swp_Items" slot="button-next"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['overview', 'itemList', 'storyList', 'storyList2', 'time'],
  data() {
    return {
      imgPath: '',
      data: {
        closing_time: '07:53:18',
      },
      swiperOption_Items: {
        speed: 1000,
        slidesPerView: 4,
        spaceBetween: 25,
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
          768: {
            spaceBetween: 30,
            centeredSlides: true,
            slidesOffsetBefore: -270,
            slidesPerView: 3.5,
            // initialSlide: 1,
          },
          450: {
            spaceBetween: 25,
            centeredSlides: true,
            slidesOffsetBefore: -70,
            slidesPerView: 1.7,
            // initialSlide: 1,
          }
        },

      },
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    }
  },
  created() {
    this.imgPath = process.env.IMAGE_DOMAIN;
  }
}
</script>
