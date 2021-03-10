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
          <div style="background-color: #f2f2f2; padding: 60px">
            <div
              v-for="(item, index) in data"
              :key="index"
              style="margin-bottom: 30px"
            >
              <el-row :gutter="20">
                <el-col :span="6">
                  <el-image :src="item.url"></el-image>
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
                      <span>{{ item.date }}</span>
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
                          {{ item.bidding }} Bids
                        </div>
                      </div>
                      <div class="price" style="margin-bottom: 8px"><span class="lastSale">預估價: USD${{ item.estimated_price }}</span></div>
                    </div>
                    <div>
                      <el-button
                        type="primary"
                        @click="onSubmit"
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
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        title: '5 Valuable Panini Prizm Basketball Cards',
        date: '2021/02/09 - 2021/02/10  (CST)',
        bidding: '123',
        estimated_price: '999,999'
      }, {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        title: '5 Valuable Panini Prizm Basketball Cards',
        date: '2021/02/09 - 2021/02/10  (CST)',
        bidding: '10',
        estimated_price: '999,999'
      }, {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        title: '5 Valuable Panini Prizm Basketball Cards',
        date: '2021/02/09 - 2021/02/10  (CST)',
        bidding: '3',
        estimated_price: '999,999'
      }]
    }
  },
  methods: {
    onSubmit() {
      this.$router.push({ path: 'auction' })
    }
  }
}
</script>