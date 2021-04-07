<template>
    <div>
        <section class="sectionBox ReceivedPayment">
            <h2 class="title-m">收款資訊</h2>
            <div class="btn btn-line">Edit</div>
            <div class="title">銀行帳戶：</div>
            <dl class="ReceivedPayment__list">
                <dt>SWIFT / ABA no / SortCode：</dt><dd>25928374</dd>
                <dt>銀行英文名稱 : </dt><dd>abcde</dd>
                <dt>銀行帳號：</dt><dd>123981203980</dd>
                <dt>戶名：</dt><dd>sldkjflwkejd</dd>
                <dt>收款人聯絡電話：</dt><dd>2309480938</dd>
                <dt>收款人聯絡地址：</dt><dd>skldj;alksdj;alksdj</dd>
            </dl>
        </section>
        <section class="sectionBox ">
            <h2 class="title-m">您的交易收入</h2>
            <div class="income">USD $ 72,000</div>
            <small class="text-gray">交易結束的三日內，將由客服專員與您聯繫收款細節</small>
            <h2 class="title-m">交易記錄</h2>
            <el-table
            :data="transactionData"
            style="width: 100%">
                <el-table-column
                    fixed
                    prop="item"
                    label="拍品名稱"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="交易狀態"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="serviceCharges"
                    label="平台服務費（USD）">
                </el-table-column>
                <el-table-column
                    prop="orderDetail"
                    label="訂單明細">
                    <template slot-scope="scope">
                        <div class="btn"
                        :class="scope.row.status === '已結標' ? 'btn-solid-primary' : ''">
                            <div v-if="scope.row.status === '已結標'" 
                            @click="dialogVisible_orderDetail = true">
                                訂單明細
                            </div>
                            <div v-else> - </div> 
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </section>
        <el-dialog
        title="訂單明細"
        :visible.sync="dialogVisible_orderDetail"
        width="70%"
        center>
            <div class="orderDetail-wp">
                <p>繳費期限：2020/12/1 - 2020/12/5</p>
                <div class="row orderDetail__head">
                    <div class="col">
                        <div class="title">日期</div>
                       <div class="text">2021/03/02</div>
                    </div>
                    <div class="col">
                        <div class="title">訂單編號</div>
                        <div class="text">AVlskjflksdjflksdjflkj</div>
                    </div>
                </div>
                <dl class="orderDetail__list">
                    <dt>拍品名稱：</dt>
                    <dd>1986 Michael Jordan Fleer #57</dd>
                    <dt>拍品金額：</dt>
                    <dd>USD $80,000</dd>
                    <dt>運費：</dt>
                    <dd>USD $6</dd>
                    <dt>買家成交手續費（20%）：</dt>
                    <dd>USD $16,000</dd>
                    <el-divider></el-divider>
                    <dt>訂單總額：</dt>
                    <dd>USD $96,006</dd>
                </dl> 
                <p>寄送地址：</p>
            </div>
        </el-dialog>


    </div>
</template>

<script>

export default {
    components: {
    },
    data() {
        return {
            dialogVisible_orderDetail: false,
           transactionData: [{
                item: '2000 Michael Jordan Fleer #15',
                status: '已結標',
                serviceCharges: '50,000',
                orderDetail: '訂單明細',
            }, {
                item: '2000 Michael Jordan Fleer #15',
                status: '流標',
                serviceCharges: ' - ',
                orderDetail: '訂單明細',
            }, {
                item: '2000 Michael Jordan Fleer #15',
                status: '拍賣中',
                serviceCharges: ' - ',
                orderDetail: '訂單明細',
            }],
        }
        },
    created() {
       
    },
    methods: {
        
    },
}
</script>

<style scoped>
    
</style>