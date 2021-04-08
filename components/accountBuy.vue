<template>
    <div>
        <section class="sectionBox creditLimit">
            <h2 class="title-m">信用額度 
                <font-awesome-icon :icon="['fas', 'info-circle']" @click="dialogVisible_creditLimit = true" />
            </h2>
            <div class="content">
                <el-row :gutter="20">
                     <el-col :span="12">USD $ 5000</el-col>
                     <el-col :span="12"><div class="btn btn-solid-primary">提高額度</div></el-col>
                </el-row>
                <div>推薦人：曾小姐</div>   
                <div>推薦人聯絡方式：0909090909 / a@a.com</div>   
                <small class="text-gray">所有新註冊用戶將獲得USD $5000信用額度，如您欲調高額度，請上傳財力相關證明。</small>
            </div>
        </section>
        <section class="sectionBox myBids">
            <h2 class="title-m">My Bids</h2>
            <el-collapse v-model="bidType" accordion>
                <el-collapse-item title="Active" name="active">
                    <el-table
                        :data="activeData"
                        style="width: 100%">
                        <el-table-column
                            fixed
                            prop="title"
                            label="拍品名稱"
                            width="300">
                        </el-table-column>
                        <el-table-column
                            prop="my_max_bid_price"
                            label="My Max Bid"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="current_price"
                            label="Current Bid">
                        </el-table-column>
                        <el-table-column
                            prop="status"
                            label="Status">
                        </el-table-column>
                        <el-table-column
                            prop="bidAgain">
                            <template slot-scope="scope">
                                <div :class="scope.row.bidAgain === 'Bid Again' ? 'btn btn-solid-primary' : ''" 
                                disable-transitions>
                                 {{scope.row.bidAgain}}
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-collapse-item>
                <el-collapse-item title="Ｗon" name="won">
                    <el-table
                        :data="wonData"
                        style="width: 100%">
                        <el-table-column
                            fixed
                            prop="title"
                            label="拍品名稱"
                            width="300">
                        </el-table-column>
                        <el-table-column
                            prop="total_cost"
                            label="訂單總額 (USD)"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="status"
                            label="付款狀態">
                            <!-- scope.row.status === '待付款' ? 'btn btn-solid-primary' : '' -->
                            <template slot-scope="scope">
                                <div :class="scope.row.status === 0 ? 'btn btn-solid-primary' : ''"
                                disable-transitions>
                                    <div v-if="scope.row.status === 0" 
                                    @click="dialogVisible_paymentMethod = true">
                                        待付款
                                    </div>
                                    <div v-else>已付款</div>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="orderDetail paymentStatus"
                            label="訂單明細">
                            <template slot-scope="scope">
                                <div class="btn"
                                :class="scope.row.paymentStatus === '訂單確認中' ? 'btn-solid-gray' : 'btn-solid-primary'">
                                    <div v-if="scope.row.paymentStatus !== '訂單確認中'" 
                                    @click="dialogVisible_orderDetail = true">
                                        訂單明細
                                    </div>
                                    <div v-else>訂單明細</div>
                                </div>
                            </template>
                        </el-table-column>
                         <el-table-column
                            prop="invoice paymentStatus"
                            label="申請發票">
                            <template slot-scope="scope">
                                <div class="btn"
                                :class="scope.row.paymentStatus === '訂單確認中' ||
                                scope.row.paymentStatus === '待付款' ||
                                scope.row.paymentStatus === '款項確認中' ? 'btn-solid-gray' : 'btn-solid-primary'">
                                
                                <div v-if="scope.row.paymentStatus == '已付款'">
                                    <a href="mailto:support@gemcard.co">申請發票</a>
                                </div>
                                <div v-else>申請發票</div>
                                </div>
                            </template>
                        </el-table-column>
                         <el-table-column
                            prop="logistics"
                            label="物流狀態">
                        </el-table-column>
                    </el-table>
                </el-collapse-item>
                <el-collapse-item title="Lost" name="lost">
                    <el-table
                        :data="lostData"
                        style="width: 100%">
                        <el-table-column
                            fixed
                            prop="title"
                            label="拍品名稱"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="my_max_bid_price"
                            label="Minimum Bid"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="my_max_bid_price"
                            label="My Max Bid">
                        </el-table-column>
                        <el-table-column
                            prop="current_price"
                            label="成交價">
                        </el-table-column>
                    </el-table>
                </el-collapse-item>
            </el-collapse>
        </section>
        
        <section class="sectionBox myFavorite">
            <!-- <h2 class="title-m">我的收藏</h2> -->
            <el-collapse v-model="activeNames2">
                <el-collapse-item title="我的收藏" name="1">
                    <el-table
                        :data="myFavoriteData"
                        style="width: 100%">
                        <el-table-column
                            fixed
                            prop="title"
                            label="拍品名稱"
                            width="350">
                        </el-table-column>
                        <el-table-column
                            prop="time"
                            label="競投期間"
                            width="400">
                            <template slot-scope="scope">
                                <div>{{ scope.row.start_time }} - {{ scope.row.end_time }}</div>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="status"
                            label="Status">
                        </el-table-column>
                    </el-table>
                </el-collapse-item>
            </el-collapse>
        </section>

        <el-dialog
        title="信用額度說明"
        :visible.sync="dialogVisible_creditLimit"
        width="70%"
        center>
            <div>ㄧ.信用額度代表您投標的最高金額，所有新註冊用戶將獲得USD $500信用額度，若標的物價格高於您的信用額度，你可以選擇提高額度投標。</div>
            <div>二.如您欲調高信用額度，需上傳財力相關證明。若您有其他疑慮，請洽客服與我們聯繫以進行申請。</div>
        </el-dialog>

        <el-dialog
        title="選擇付款方式"
        :visible.sync="dialogVisible_paymentMethod"
        width="70%"
        center>
            <div class="paymentMethod-wp">
                <el-row :gutter="60">
                    <el-col :span="12" class="leftBox">
                        <div class="btn btn-line">PayPal (需付手續費)</div>
                        <div class="btn btn-line"> <i class="el-icon-message iconStyle"></i> 接洽客服</div>
                        <small class="text-gray">（當訂單金額超過信用卡、銀行轉帳支付額度)</small>
                    </el-col>
                    <el-col :span="12" class="rightBox">
                        銀行轉帳資訊：<br>
                        XXXXXXXXXX<br>
                        XXXXXXXXXX<br>
                        XXXXXXXXXX
                    </el-col>
                </el-row>
            </div>
        </el-dialog>

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
import Cookies from 'js-cookie';
import { getBidList } from '~/api/bids';
import { getShoppingcart } from '~/api/product';

export default {
    components: {
    },
    data() {
        return {
            dialogVisible_creditLimit: false,
            dialogVisible_paymentMethod: false,
            dialogVisible_orderDetail: false,
            bidType: 'active',
            activeNames2: ['1'],
            dialogVisible: false ,
            bidTotal: 0,
            favoriteTotal: 0,
            activeData: [],
            wonData: [],
            lostData: [],
            myFavoriteData: [],
            // 競拍成功的狀態有這四種 已付款 款項確認中 訂單確認中 待付款
            }
    },
    created() {
        this.bidData()
        this.favoriteData()
    },
    watch: {
        bidType() {
            this.bidData()
        }
    },
    methods: {
       bidData() {
           const data = {
               token: Cookies.get('token'),
               type: this.bidType, // active進行中, won競拍成功, lost競拍失敗
               page: 1,
               limit: 5,
           }
           getBidList(data).then((res) => {
               if (res.data.code === 1) {
                   if (this.bidType === 'active') {
                       this.activeData = res.data.myBidList
                   } else if (this.bidType === 'won') {
                       this.wonData = res.data.myBidList
                   } else {
                       this.lostData = res.data.myBidList
                   }
                   this.bidTotal = res.data.total
               }
               
           })
       },
       favoriteData() {
           const data = {
                token: Cookies.get('token'),
                page: 1,
                limit: 5,
            }
           getShoppingcart(data).then((res) => {
               if (res.data.code === 1) {
                   this.myFavoriteData = res.data.shoppingcartList
                   this.favoriteTotal = res.data.total
               }
           })
       }
        
    },
}
</script>
