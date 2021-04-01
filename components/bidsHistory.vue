<template>
    <div class="pdDescription">
        <h2 style="font-size: 2rem; font-weight: 300;">Bid History</h2>
        <el-divider style="background-color: #6d6d6d;"></el-divider>
        <div class="pdDescription__bidSum" >
            <span class="bidders"> Bidders : {{ bidder }}</span>
            <span class="bids">Bids : {{ total }}</span> 
        <div class="text-point">If two people bid the same amount, the first bid has priority.</div>
        </div>

        <div class="tableWp">
            <el-table
                :data="tableData"
                class="tableStyle"
                :default-sort = "{prop: 'bid_price', order: 'descending'}">
                <el-table-column
                    prop="user.name"
                    label="Bidder"
                    width="120">
                    <template slot-scope="scope">
                        <div v-if="scope.row.user">
                            {{ scope.row.user.name }}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="bid_price"
                    label="Bid Amount"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="bid_time"
                    label="Bid Time">
                </el-table-column>
            </el-table>
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
import Cookies from 'js-cookie';
import { bidRecordList } from '~/api/product';
export default {
    data() {
        return {
            productID: '',
            total: 0,
            page: 1,
            pageSize: 10,
            tableData: [],
            bidder: 0
        }
        },
    created() {
        this.productID = this.$route.path.split('product/')[1]
        this.getInit()
    },
    methods: {
        getInit() {
            const data = {
                lang: "zh-CN",
                platform: "h5",
                goods_id: this.productID,
                page: this.page,
                limit: 10,
                token: Cookies.get('token')
            }
            let bidder = []
            bidRecordList(data).then((res) => {
                if (res.data.code === 1) {
                    this.tableData = res.data.recordList
                    this.total = res.data.total
                    // 計算 bidder
                    this.tableData.forEach((item) => {
                        bidder.push(item.user.name)
                    })
                    bidder = Array.from(new Set(bidder.map(JSON.stringify))).map(JSON.parse);
                    this.bidder = bidder.length
                } else {
                    this.$notify({
                        title: res.data.msg,
                        type: 'error'
                    });
                } 
            })
        },
        // 分頁換頁
        handleCurrentChange(val) {
            this.page = val
            this.getInit(val)
        },
    },
}
</script>

<style scoped>
    .tableStyle >>> .el-table__header { 
        border-bottom: 1px solid #797979 !important;
    }
    .tableStyle >>>.cell {
        font-weight: 400;
    }
    .tableStyle >>> .el-table__row:first-child>td>.cell {
        font-weight: bolder;
        color: black
    }
    .el-divider {
        margin-top: 8px !important;
    }
</style>