<template>
  <div>
    <el-row :gutter="120">
      <el-col
        :span="8"
        v-for="(item, index) in data.items"
        :key="index"
        style="margin: 20px 0px"
      >
        <div
          class="productList__item__img product__imgMask"
          style="margin-bottom: -20px"
        >
          <img :src="item.image" :alt="item.title" />
          <svg class="clip-svg imgMask" width="0" height="0">
            <defs>
              <clipPath id="clip-shape" clipPathUnits="objectBoundingBox">
                <polygon points="0.02 0.06, 0.98 0.06, 0.98 0.93, 0.02 0.93" />
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
              margin-bottom: 0px;
              color: #001939;
            "
          >
            {{ item.title }}
          </h2>
          <div class="row" style="margin-bottom: 20px">
            <div>
              <span class="price">預估價 TWD {{ item.estimated_priceTWD }}</span><br>
              <span class="price" style="margin-left: 55px">HKD {{ item.estimated_priceHKD }}</span><br>
              <span class="price" style="margin-left: 55px">USD {{ item.estimated_priceUSD }}</span><br>
              <span class="price" style="margin-left: 55px">CNY {{ item.estimated_priceCNY }}</span><br>
            </div>
          </div>
          <div class="row">
            <div>
              <span class="price">成交價 TWD {{ item.estimated_priceTWD }}</span><br>
              <span class="price" style="margin-left: 55px">HKD {{ item.estimated_priceHKD }}</span><br>
              <span class="price" style="margin-left: 55px">USD {{ item.estimated_priceUSD }}</span><br>
              <span class="price" style="margin-left: 55px">CNY {{ item.estimated_priceCNY }}</span><br>
            </div>
          </div>
          <div
            class="btn btn-solid"
            style="
              background-color: #BABABA;
              height: 25px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 8px;
              width: 40%;
              padding: 0.3rem 0rem;
              margin: 8px 0px;
            "
          >
            {{ item.bidding }} Bids
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        items: [{
          id: 1,
          image: 'https://images.squarespace-cdn.com/content/v1/5b341a41fcf7fd930ebee505/1591640531713-CVRIV6Q8NX02UMDF9BUT/ke17ZwdGBToddI8pDm48kK60W-ob1oA2Fm-j4E_9NQB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mh5VMMOxnTbph8FXiclivDQnof69TlCeE0rAhj6HUpXkw/dayzee.jpg',
          title: 'Item002',
          estimated_priceTWD: '40,000-80,000',
          estimated_priceHKD: '11,000-21,000 ',
          estimated_priceUSD: '1,400-2,700',
          estimated_priceCNY: ' 9,000-19,000',
          current_price: '999,999',
          bidding: 20,
        }, {
          id: 2,
          image: 'https://images.squarespace-cdn.com/content/v1/5b341a41fcf7fd930ebee505/1591640531713-CVRIV6Q8NX02UMDF9BUT/ke17ZwdGBToddI8pDm48kK60W-ob1oA2Fm-j4E_9NQB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mh5VMMOxnTbph8FXiclivDQnof69TlCeE0rAhj6HUpXkw/dayzee.jpg',
          title: 'Item003',
          estimated_priceTWD: '40,000-80,000',
          estimated_priceHKD: '11,000-21,000 ',
          estimated_priceUSD: '1,400-2,700',
          estimated_priceCNY: ' 9,000-19,000',
          current_price: '999,999',
          bidding: 30,
        }, {
          id: 3,
          image: 'https://images.squarespace-cdn.com/content/v1/5b341a41fcf7fd930ebee505/1591640531713-CVRIV6Q8NX02UMDF9BUT/ke17ZwdGBToddI8pDm48kK60W-ob1oA2Fm-j4E_9NQB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mh5VMMOxnTbph8FXiclivDQnof69TlCeE0rAhj6HUpXkw/dayzee.jpg',
          title: 'Item004',
          estimated_priceTWD: '40,000-80,000',
          estimated_priceHKD: '11,000-21,000 ',
          estimated_priceUSD: '1,400-2,700',
          estimated_priceCNY: ' 9,000-19,000',
          current_price: '999,999',
          bidding: '1,000',
        }, {
          id: 4,
          image: 'https://images.squarespace-cdn.com/content/v1/5b341a41fcf7fd930ebee505/1591640531713-CVRIV6Q8NX02UMDF9BUT/ke17ZwdGBToddI8pDm48kK60W-ob1oA2Fm-j4E_9NQB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mh5VMMOxnTbph8FXiclivDQnof69TlCeE0rAhj6HUpXkw/dayzee.jpg',
          title: 'Item005',
          estimated_priceTWD: '40,000-80,000',
          estimated_priceHKD: '11,000-21,000 ',
          estimated_priceUSD: '1,400-2,700',
          estimated_priceCNY: ' 9,000-19,000',
          current_price: '999,999',
          bidding: 100,
        }]
      },
    }
  }
}
</script>

<style scoped>
.price {
  font-size: 0.9rem;
}
</style>