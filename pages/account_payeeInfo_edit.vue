<template>
  <div class="grayBg">
      <div class="account mainContent">
          <section class="Account" style="padding: 0px">
            <div class="heading container">
                <h1 class="title-l">Account</h1>
            </div>
            <div class="container">
                <el-tabs v-model="activeName">
                    <el-tab-pane label="Profile" name="first" disabled>
                      <accountProfile></accountProfile>
                    </el-tab-pane>
                    <el-tab-pane label="Buy" name="second" disabled>
                        <accountBuy></accountBuy>
                    </el-tab-pane>
                    <el-tab-pane label="Sell" name="third">
                        <section class="sectionBox ProfileDetails">
                            <el-page-header @back="goBack" content="收款資訊編輯"></el-page-header>
                            <el-form ref="payeeInfoEditForm" :model="form" label-width="15%" class="editForm">
                              <div class="title">銀行帳戶：</div>
                              <el-form-item label="SWIFT / ABA no / SortCode">
                                <el-input v-model="payeeInfoEditForm.SWIFTCode" placeholder="25928374"></el-input>
                              </el-form-item>
                              <el-form-item label="銀行英文名稱">
                                <el-input v-model="payeeInfoEditForm.bank" placeholder="abcde"></el-input>
                              </el-form-item>
                              <el-form-item label="銀行帳號">
                                <el-input v-model="payeeInfoEditForm.account" placeholder="123981203980"></el-input>
                              </el-form-item>
                              <el-form-item label="戶名">
                                <el-input v-model="payeeInfoEditForm.name" placeholder="sldkjflwkejd"></el-input>
                              </el-form-item>
                              <el-form-item label="收款人聯絡電話">
                                <el-input v-model="payeeInfoEditForm.phone" placeholder="+886 931750110"></el-input>
                              </el-form-item>
                              <el-form-item label="收款人聯絡地址">
                                <el-input v-model="payeeInfoEditForm.address" placeholder="skldj;alksdj;alksdj"></el-input>
                              </el-form-item>
                              <el-form-item class="formBt">
                                <div @click="onSubmit" class="btn btn-solid-primary">Save</div>
                                <div class="btn btn-line">Cancel</div>
                              </el-form-item>
                            </el-form>
                        </section>
                    </el-tab-pane>
                </el-tabs>
            </div>
          </section>
      </div>

  </div>
</template>

<script>
import accountProfile from '~/components/accountProfile'
import accountBuy from '~/components/accountBuy'
import accountSell from '~/components/accountSell'

  export default {
    components: {
        accountProfile,
        accountBuy,
        accountSell
    },
    data () {
      return {				
           activeName: 'third',
           payeeInfoEditForm: {
              SWIFTCode: '',
              bank: '',
              account: '',
              name: '',
              phone: '',
              address: '',
          }
        
      }
    },
    created() {
        
    },
    mounted () {
       
    },
    beforeDestroy(){
    },
    methods: {
        goBack() {
          this.$router.go(-1);
        },
        onSubmit() {
          console.log('submit!');
        }
    },
      
  }
</script>

<style lang="scss">
  @import "assets/css/base/default.scss";
  @import "assets/css/pages/subPage_account.scss";
 
</style>

<style scoped>

</style>