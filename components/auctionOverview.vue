<template>
  <div>
    <div style="border-bottom: 1px solid #797979; padding-bottom: 25px">
      <h2
        class="title-m"
        style="
          font-weight: 300;
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: #d1ab71;
        "
      >
        Lots Closing in
        <span style="font-weight: bold">{{ data.closing_time }}</span>
      </h2>
      <h5 style="font-size: 1.2rem">
        Online Auction :
        <span style="font-weight: bold">{{ data.online_time }}</span>
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
          font-weight: bold;
          font-size: 2.2rem;
          line-height: 55px;
          margin-bottom: 1.5rem;
        "
      >
        AUCTION TITLE AUCTION TITLE AUCTION TITLE
      </h2>
      <span>
        Story Story Story Story Story Story Story Story Story Story Story Story
        Story Story Story Story Story Story Story Story Story StoryStory Story
        Story Story Story Story Story Story Story Story Story Story Story Story
        Story Story Story Story Story Story Story StoryStory Story Story Story
        Story Story Story Story Story Story Story Story Story Story Story Story
        Story Story Story Story Story StoryStory Story Story Story Story Story
        Story Story Story Story Story Story Story Story Story Story Story Story
        Story Story Story StoryStory Story Story Story Story Story Story Story
        Story Story Story Story Story Story Story Story Story Story Story Story
        Story StoryStory Story Story Story Story Story Story Story Story Story
        Story Story Story Story Story Story Story Story Story Story Story
        StoryStory Story Story Story Story Story Story Story Story Story Story
        Story Story Story Story Story Story Story Story Story Story StoryStory
        Story Story .
      </span>
    </div>
    <div style="margin: 30px 0px">
      <el-row>
        <el-col :span="10" style="padding: 18px">
          <el-image style="width: 90%; height: auto" :src="url"> </el-image>
        </el-col>
        <el-col :span="14">
          <h2
            class="title-m"
            style="
              font-weight: 300;
              font-size: 2.2rem;
              line-height: 55px;
              margin-bottom: 1.5rem;
            "
          >
            item001 title
          </h2>
          <span>
            Story Story Story Story Story Story Story Story Story Story Story
            Story Story Story Story Story Story Story Story Story Story Story.
          </span>
          <div style="margin-top: 80px">
            <span>預估價<span style="margin-left: 43px">NTD$999,999</span></span
            ><br />
            <span
              >目前出價 <span style="margin-left: 20px">NTD$999,999</span></span
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
        </el-col>
      </el-row>
    </div>

    <div>
      <el-image :src="url"></el-image>
    </div>

    <div style="margin: 50px 0px">
      <h2
        class="title-m"
        style="
          font-weight: 300;
          font-size: 1.7rem;
          line-height: 55px;
          margin-bottom: 1.5rem;
        "
      >
        Story Story Story Story Story Story Story Title
      </h2>
      <span>
        Story Story Story Story Story Story Story Story Story Story Story Story
        Story Story Story Story Story Story Story Story Story StoryStory Story
        Story Story Story Story Story Story Story Story Story Story Story Story
        Story Story Story Story Story Story Story StoryStory Story Story Story
        Story Story Story Story Story Story Story Story Story Story Story Story
        Story Story Story Story Story StoryStory Story Story Story Story Story
        Story Story Story Story Story Story Story Story Story Story Story Story
        Story Story Story Story Story Story Story Story Story Story Story Story
        Story Story Story Story Story Story Story Story Story Story Story Story
        Story StoryStory Story Story Story Story Story Story Story Story Story
        Story Story Story Story Story Story Story Story Story Story Story
        StoryStory Story Story Story Story Story Story Story Story StoryStory
        Story Story Story Story Story Story Story Story Story Story StoryStory
        Story Story .
      </span>
    </div>

    <div>
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
                v-for="(item, index) in data.items"
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
                    :to="
                      localePath({
                        name: 'product-pid',
                        params: { pid: item.id },
                      })
                    "
                    @click.native="gtagTrack('HomePage_HotSale_Player')"
                  >
                    <div class="productList__item__img product__imgMask" style="margin-bottom: -35px;">
                      <img :src="item.image" :alt="item.title" />
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
                            color: #001939
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
  data() {
    return {
      data: {
        closing_time: '07:53:18',
        online_time: '2021/03/04 - 2021/03/06 , 10:06 AM (CST)',
        items: [{
            id: 1,
            image: 'https://images.squarespace-cdn.com/content/v1/5b341a41fcf7fd930ebee505/1591640531713-CVRIV6Q8NX02UMDF9BUT/ke17ZwdGBToddI8pDm48kK60W-ob1oA2Fm-j4E_9NQB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mh5VMMOxnTbph8FXiclivDQnof69TlCeE0rAhj6HUpXkw/dayzee.jpg',
            title: 'Item002',
            estimated_price: '999,999',
            current_price: '999,999',
        }, {
            id: 2,
            image: 'https://images.squarespace-cdn.com/content/v1/5b341a41fcf7fd930ebee505/1591640531713-CVRIV6Q8NX02UMDF9BUT/ke17ZwdGBToddI8pDm48kK60W-ob1oA2Fm-j4E_9NQB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mh5VMMOxnTbph8FXiclivDQnof69TlCeE0rAhj6HUpXkw/dayzee.jpg',
            title: 'Item003',
            estimated_price: '999,999',
            current_price: '999,999',
        }, {
            id: 3,
            image: 'https://images.squarespace-cdn.com/content/v1/5b341a41fcf7fd930ebee505/1591640531713-CVRIV6Q8NX02UMDF9BUT/ke17ZwdGBToddI8pDm48kK60W-ob1oA2Fm-j4E_9NQB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mh5VMMOxnTbph8FXiclivDQnof69TlCeE0rAhj6HUpXkw/dayzee.jpg',
            title: 'Item004',
            estimated_price: '999,999',
            current_price: '999,999',
        }, {
            id: 4,
            image: 'https://images.squarespace-cdn.com/content/v1/5b341a41fcf7fd930ebee505/1591640531713-CVRIV6Q8NX02UMDF9BUT/ke17ZwdGBToddI8pDm48kK60W-ob1oA2Fm-j4E_9NQB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mh5VMMOxnTbph8FXiclivDQnof69TlCeE0rAhj6HUpXkw/dayzee.jpg',
            title: 'Item005',
            estimated_price: '999,999',
            current_price: '999,999',
        }]
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
  }
}
</script>
