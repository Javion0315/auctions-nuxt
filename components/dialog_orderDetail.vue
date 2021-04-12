<template>
    <div>
        <el-dialog
        title="訂單明細"
        :visible.sync="dialogVisible_orderDetail"
        width="70%"
        center
        style="max-width:1000px; margin:auto;">
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
    data() {
        return {
            dialogVisible_orderDetail: false,
          
        }
    },
    methods: {
       
    },
    created() {
       
    },
   
}
</script>

<style scoped>
    
</style>