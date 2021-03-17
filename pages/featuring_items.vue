<template>
  <div>
    <section class="policy mainContent" style="margin: 70px">
      <section class="Privacy" style="padding: 0px">
        <div class="container">
          <h2
            class="title-m"
            style="
              font-weight: bold;
              font-size: 2.2rem;
              line-height: 55px;
              margin-bottom: 1.5rem;
            "
          >
            Featuring Items
          </h2>
          <div style="background-color: #f2f2f2; padding: 60px" v-if="data.length > 0">
            <div
              v-for="(item, index) in data"
              :key="index"
              style="margin-bottom: 30px"
            >
              <el-row :gutter="20">
                <el-col :span="6">
                  <el-image :src="imgPath + item.images[0]" style="width: 100%"></el-image>
                </el-col>
                <el-col :span="18">
                  <div style="display: flex; justify-content: space-around">
                    <div style="margin-right: 15px">
                      <h2
                        class="title-m"
                        style="
                          font-weight: bold;
                          font-size: 1.5rem;
                          line-height: 55px;
                          margin-bottom: 25px;
                          color: #001939;
                          margin-top: -16px;
                        "
                      >
                        {{ item.title }}
                      </h2>
                      <span>{{ item.start_time }} - {{ item.end_time }}</span>
                      <div
                        style="
                          display: flex;
                          width: 86%;
                          height: 30px;
                          margin-bottom: 15px
                        "
                      >
                        <div
                          class="btn btn-solid"
                          style="
                            background-color: #c9b57e;
                            height: 25px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 12px;
                            margin: 10px 8px 0px 0px;
                          "
                        >
                          Bidding
                        </div>
                        <div
                          class="btn btn-solid"
                          style="
                            background-color: #BABABA;
                            height: 25px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 12px;
                            margin: 10px 0px;
                          "
                        >
                          {{ item.bids }} Bids
                        </div>
                      </div>
                      <div class="price" style="margin-bottom: 8px"><span class="lastSale">預估價: USD {{ item.estimated_price }}</span></div>
                    </div>
                    <div>
                      <!-- <nuxt-link :to="localePath({ name: 'auction-id', params: { id: item.id }})"> -->
                        <el-button
                          type="primary"
                          @click="onSubmit(item.id)"
                          style="background-color: #0c4c78; border-radius: 5px"
                          size="mini"
                        >
                          <span
                            style="
                              font-size: 1.6rem;
                              padding: 0px 20px;
                              letter-space: 1px;
                            "
                            >View</span
                          >
                        </el-button>
                      <!-- </nuxt-link> -->
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div style="background-color: #F2F2F2; padding: 60px; text-align: center" v-else>
            <h1 style="font-size: 2.5rem;">SORRY, NO DATA AVAILABLE</h1>
            <h1 style="font-size: 2rem;"> <span class="ascii">(╯°□°）╯︵ ┻━┻</span></h1>
          </div>
        </div>
      </section>
    </section>
    <div style="text-align: center; margin-bottom: 23px;">
        <el-pagination
        class="pageStyle"
        layout="prev, pager, next"
        :page-size="pageSize"
        @current-change="handleCurrentChange"
        :total="total">
        </el-pagination>
    </div>
  </div>
</template>

<script>
import { getRecommendAuctionData } from '~/api/auction'

export default {
  data() {
    return {
      total: 0,
      page: 1,
      pageSize: 10,
      data: [],
      imgPath: ''
    }
  },
  created() {
      this.getInit(this.page)
      this.imgPath = process.env.IMAGE_DOMAIN;
  },
  methods: {
        onSubmit(id) {
            console.log(id)
        },
        getInit(page) {
            const data = {
                lang: "zh-CN",
                platform: "h5",
                page: page,
                limit: 10,
            }
            getRecommendAuctionData(data).then((res) => {
                this.data = res.data.goodsList
                this.total = res.data.total
            })
        },
        // 分頁換頁
        handleCurrentChange(val) {
            this.page = val
            this.getInit(val)
        }
    }
}
</script>

<style scoped>
  .pageStyle >>> .el-pager >>> li {
    font-size: 20px !important;
  }
  .pageStyle >>> .el-icon {
    font-size: 23px !important;
  }
  .pageStyle >>> .el-pager li.active {
    font-size: 20px;
    color: #CBB885 !important;
  }
  .pageStyle >>> li:hover {
    color: #CBB885
  }

</style>