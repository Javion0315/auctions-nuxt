<template>
  <div>
    <section class="mainContent" style="margin: 70px 70px 0px 70px">
      <section class="Privacy" style="padding: 0px">
        <div class="container">
          <h2
            class="title-m"
            style="font-weight: bold; font-size: 2.2rem; line-height: 55px; margin-bottom: 1.5rem;"
          >
            Current Auctions
          </h2>
          <div style="background-color: #F2F2F2; padding: 60px;">
            <div v-for="(item,index) in data" :key="index" style="margin-bottom: 30px">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-image :src="imgPath + item.image"></el-image>
                    </el-col>
                    <el-col :span="18">
                        <div style="display: flex; justify-content: space-around;">
                            <div style="margin-right: 15px">
                                <h2
                                    class="title-m"
                                    style="
                                    font-weight: bold;
                                    font-size: 1.5rem;
                                    line-height: 55px;
                                    margin-bottom: 30px;
                                    color: #001939;
                                    margin-top: -16px
                                    "
                                >
                                    {{ item.title }}
                                </h2>
                                <span>{{ item.start_time }} - {{ item.end_time }}</span>
                                <div
                                    class="btn btn-solid"
                                    style="
                                    background-color: #BABABA;
                                    height: 25px;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    font-size: 8px;
                                    width: 20%;
                                    padding: 0.3rem 0rem;
                                    margin: 8px 0px;
                                    "
                                >
                                    {{ item.bidding }} Bids
                                </div>
                            </div>
                            <div>
                                <el-button type="primary" @click="onSubmit(item.id)" style="background-color: #0C4C78; border-radius: 5px" size="mini">
                                    <span style="font-size: 1.6rem; padding: 0px 20px; letter-space: 1px">View</span>
                                </el-button>
                            </div>
                        </div>                    
                    </el-col>
                </el-row>
            </div>
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
import { getcurrentAuctionData } from '~/api/auction'

export default {
    data() {
        return {
            total: 0,
            page: 1,
            pageSize: 3,
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
            this.$router.push({ path:'auction' })
        },
        getInit(page) {
            const data = {
                lang: "zh-CN",
                platform: "h5",
                page: page,
                limit: 3,
            }
            getcurrentAuctionData(data).then((res) => {
                this.data = res.data.specialList
                console.log(this.data)
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