<template>
  <div>
    <div class="mainContent">
      <el-breadcrumb class="location container" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
          <el-breadcrumb-item class="current">Featuring Items</el-breadcrumb-item>
      </el-breadcrumb>

      <section class="container auctionsList">
          <h2 class="heading-l">Featuring Items</h2>
          <div class="auctionsList__list" v-if="data.length > 0">
            <div class="item" v-for="(item,index) in data" :key="index">
                <el-row :gutter="35">
                    <el-col :span="6" :xs="8">
                        <div class="productList__item__img"><img :src="imgPath + item.images[0]"></div>
                    </el-col>
                    <el-col :span="14" :xs="16" >
                        <div>
                            <h2 class="title-l">{{ item.title }}</h2>
                            <div class="date">{{ item.start_time }} - {{ item.end_time }}</div>
                            <div class="row statusTag">
                                <div class="btn btn-solid-gold"> Bidding</div>
                                <div class="btn btn-line"> {{ item.bids }} Bids</div>
                            </div>
                            <div class="price" style="margin-bottom: 8px"><span class="lastSale">預估價: USD {{ item.estimated_price }}</span></div>
                        </div>
                    </el-col>
                    <el-col :span="4" :xs="0">
                        <nuxt-link class="link" :to="localePath({ name: 'product-id', params: { id: item.id }})">
                            <div class="btn btn-solid-primary" @click="onSubmit(item.id)">View</div>
                        </nuxt-link>
                    </el-col>
                </el-row>
            </div>
          </div>
          <div style="background-color: #F2F2F2; padding: 60px; text-align: center" v-else>
                <p style="font-size: 1.2rem;">SORRY, NO DATA AVAILABLE</p>
                <p style="font-size: 0.9rem;"> <span class="ascii">(╯°□°）╯︵ ┻━┻</span></p>
          </div>
      </section>
    </div>
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

<style lang="scss">
  @import "assets/css/base/default.scss";
  @import "assets/css/pages/subPage_auctionsList.scss";
</style>
