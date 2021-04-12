<template>
  <div class="grayBg">
      <div class="account mainContent">
          <section class="Account" style="padding: 0px">
            <div class="heading container">
                <h1 class="title-l">Account</h1>
            </div>
            <div class="container">
                <el-tabs v-model="activeName">
                    <el-tab-pane label="Profile" name="first">
                        <section class="sectionBox ProfileDetails">
                            <el-page-header @back="goBack" content="Profile Edit"></el-page-header>
                            <el-form ref="profileEditForm" :model="form" label-width="15%" class="editForm">
                              <el-form-item label="Full Name">
                                <el-input v-model="profileEditForm.name" placeholder="Hsuan Ma"></el-input>
                              </el-form-item>
                              <el-form-item label="Email">
                                <el-input v-model="profileEditForm.mail" placeholder="Ada@gmail.com"></el-input>
                              </el-form-item>
                              <el-form-item label="Address">
                                <el-input v-model="profileEditForm.address" placeholder="1F.no.453-1,oqiwjeoiwjoijsdkfjlskdfjlkfs;ldjwqopedsfk"></el-input>
                              </el-form-item>
                              <el-form-item label="Phone">
                                <el-input v-model="profileEditForm.phone" placeholder="+886 931750110"></el-input>
                              </el-form-item>
                              <el-form-item class="formBt">
                                <div @click="onSubmit" class="btn btn-solid-primary">Save</div>
                                <div class="btn btn-line">Cancel</div>
                              </el-form-item>
                            </el-form>
                        </section>
                    </el-tab-pane>
                    <el-tab-pane label="Buy" name="second" disabled>
                        <accountBuy></accountBuy>
                    </el-tab-pane>
                    <el-tab-pane label="Sell" name="third" disabled>
                        <accountSell></accountSell>
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
           activeName: 'first',
           profileEditForm: {
              name: '',
              mail: '',
              address: '',
              phone: '',
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