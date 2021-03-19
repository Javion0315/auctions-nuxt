<template>
    <div>
        <h1 style="font-size: 2rem; font-weight: 300;">Bid History</h1>
        <el-divider></el-divider>
        <div style="font-size: 1rem; font-wight: bold">
            Bidders : 4<span style="margin-left: 30px">Bids : 123</span> 
        </div>
        <div style="color: #527BB0">If two people bid the same amount, the first bid has priority.</div>

        <div style="background-color: #F2F2F2; padding: 10px 20px; margin-top: 15px;">
            <el-table
                :data="tableData"
                class="tableStyle"
                style="width: 100%; background-color: transparent">
                <el-table-column
                    prop="Bidder"
                    label="Bidder"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="Amount"
                    label="Bid Amount"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="Time"
                    label="Bid Time">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                Bidder: '5***3',
                Amount: 'USD $48,000 ',
                Time: '1 Mar 2021 at 8:37:51pm CST'
            }, {
                Bidder: '5***3',
                Amount: 'USD $48,000 ',
                Time: '1 Mar 2021 at 8:37:51pm CST'
            }, {
                Bidder: '5***3',
                Amount: 'USD $48,000 ',
                Time: '1 Mar 2021 at 8:37:51pm CST'
            }]
        }
    }
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