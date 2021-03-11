<template>
  <div>
    <el-row :gutter="120">
      <el-col
        :span="8"
        v-for="(item, index) in collections"
        :key="index"
        style="margin: 0px 0px 45px; height: 520px;"
      >
        <div
          class="productList__item__img product__imgMask"
          style="margin-bottom: -20px"
        >
          <img :src="imgPath + item.images[0]" :alt="item.title" style="height: 336px" />
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
              margin-bottom: -12px;
              color: #001939;
              display : inline-block;
              overflow : hidden;
              text-overflow : ellipsis;
              white-space : nowrap;
              width : 240px;
            "
          >
            {{ item.title }}
          </h2>
          <div class="row">
            <div>
              <span class="price">預估價 NTD{{ item.estimated_price }}</span>
            </div>
          </div>
          <div class="row">
            <div>
              <span class="price">目前出價 NTD{{ item.current_price }}</span>
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
            {{ item.bids }} Bids
          </div>
          <div
            style="
              display: flex;
              justify-content: space-between;
              width: 95%;
              align-items: center;
            "
          >
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ['collections'],
  data() {
    return {
      imgPath: ''
    }
  },
  created() {
    this.imgPath = process.env.IMAGE_DOMAIN;
  }
}
</script>

<style scoped>
.price {
  font-size: 0.9rem;
}
</style>