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
                    <el-tab-pane label="Buy" name="second">
                        <section class="sectionBox ProfileDetails">
                            <el-page-header @back="goBack" content="信用額度調升申請"></el-page-header>
                            <el-form ref="creditLimitEditForm" :model="form" label-width="15%" class="editForm">
                              <el-form-item label="推薦人姓名">
                                <el-input v-model="creditLimitEditForm.name" placeholder="曾小姐"></el-input>
                              </el-form-item>
                              <el-form-item label="推薦人Email">
                                <el-input v-model="creditLimitEditForm.mail" placeholder="abai@gemcard.co"></el-input>
                              </el-form-item>
                              <el-form-item label="推薦人手機">
                                <el-input v-model="creditLimitEditForm.address" placeholder="+886 234234234"></el-input>
                              </el-form-item>
                              <el-form-item label="上傳財力證明">
                                <el-upload
                                action="#"
                                list-type="picture-card"
                                :auto-upload="false"
                                v-model="creditLimitEditForm.upload">
                                  <i slot="default" class="el-icon-plus"></i>
                                  <div slot="file" slot-scope="{file}">
                                    <img
                                      class="el-upload-list__item-thumbnail"
                                      :src="file.url" alt=""
                                    >
                                    <span class="el-upload-list__item-actions">
                                      <span
                                        class="el-upload-list__item-preview"
                                        @click="handlePictureCardPreview(file)"
                                      >
                                        <i class="el-icon-zoom-in"></i>
                                      </span>
                                      <span
                                        v-if="!disabled"
                                        class="el-upload-list__item-delete"
                                        @click="handleDownload(file)"
                                      >
                                        <i class="el-icon-download"></i>
                                      </span>
                                      <span
                                        v-if="!disabled"
                                        class="el-upload-list__item-delete"
                                        @click="handleRemove(file)"
                                      >
                                        <i class="el-icon-delete"></i>
                                      </span>
                                    </span>
                                  </div>
                                </el-upload>
                                <el-dialog :visible.sync="dialogVisible">
                                  <img width="100%" :src="dialogImageUrl" alt="">
                                </el-dialog>
                              </el-form-item>
                              <el-form-item class="formBt">
                                <div @click="onSubmit" class="btn btn-solid-primary">Save</div>
                                <div class="btn btn-line">Cancel</div>
                              </el-form-item>
                            </el-form>
                        </section>
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
           activeName: 'second',
           creditLimitEditForm: {
              name: '',
              mail: '',
              phone: '',
              upload: '',
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