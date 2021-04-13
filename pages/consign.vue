<template>
  <div>
      <section class="mainContent fullColorBg">
          <section class="" style="padding-top: 70px">
            <div class="container">
                <div style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
                    <h1 class="heading-m" style="font-weight: 400; text-align: center; font-size: 2.5rem; color: #DAC287">Consign Ｗith Us</h1>
                    <p style="font-size: 1.6em; font-weight: 300; line-height: 2.5rem; width: 57%;">
                        Do you have a high quality item that you would like to get the absolute maximum price possible?
                    </p>
                </div>
                <div class="decoration-bg">
                    <el-row style="padding: 65px 0px 0px; display: flex; justify-content: center;">
                        <el-col :span="12" :xs="21">
                            <div class="title-m">Contact Information</div>
                            <div>
                                <el-form ref="form" :model="form" label-width="80px">
                                    <el-form-item>
                                        <div style="width: 100%; display: flex; justify-content: space-between;">
                                            <el-col :span="15">
                                                <el-input v-model="form.firstName" placeholder="First Name" style="width: 100%;"></el-input>
                                            </el-col>
                                            <el-col :span="8">
                                                <el-input v-model="form.lastName" placeholder="Last Name" style="width: 100%;"></el-input>
                                            </el-col>
                                        </div>                                       
                                    </el-form-item>
                                    <el-form-item>
                                        <el-input v-model="form.email" placeholder="Email Address"></el-input>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-input v-model="form.phone" placeholder="Phone Number"></el-input>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-input v-model="form.item_name" placeholder="拍品名稱"></el-input>
                                    </el-form-item>
                                    <el-form-item>
                                        <span>上傳圖片</span>
                                        <!-- :on-change="getFile" -->
                                        <div style="border: 1px solid; padding: 1rem 0px 1rem 1rem; border-radius: 5px; background-color: white">
                                            <el-upload
                                                ref="upload"
                                                action="none"
                                                :limit="1"
                                                class="uploadStyle"
                                                :auto-upload="false"
                                                list-type="picture-card"
                                                :on-remove="handleRemove"
                                                :on-change="getFile"
                                                :on-preview="handlePictureCardPreview"
                                            >
                                                <i class="el-icon-plus"></i>
                                            </el-upload>
                                            <el-dialog :visible.sync="dialogVisible">
                                                <img width="100%" :src="dialogImageUrl" alt="">
                                            </el-dialog>
                                        </div>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-checkbox v-model="form.checked">
                                            <span style="font-size: 1rem">同意<span style="color: #DAC287">委託拍賣協議</span></span>
                                        </el-checkbox>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </el-col>
                        <!-- <el-col :span="13">
                            <div style="margin-left: 80px; ">
                                <div style="font-size: 1.3em; font-weight: 400; line-height: 45px; margin-bottom: 10px;">
                                    收款資訊
                                </div>
                                <div>
                                    <div>
                                        <el-checkbox class="checkboxStyle" v-model="form.PayPal" style="border-bottom: 2px solid #C4C4C4; padding-bottom: 5px; width: 95%">
                                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                                <span style="font-size: 1.1rem; font-weight: 300;">PayPal.Me</span>
                                                <i class="el-icon-arrow-down"></i>
                                            </div>
                                        </el-checkbox>

                                        <div style="width: 95%; padding: 35px 20px;">
                                            <el-select v-model="account.area" placeholder="PayPal.Me 註冊帳號所在地區"
                                            style="width: 100%; margin-bottom: 22px">
                                                <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                                </el-option>
                                            </el-select>
                                            <el-input v-model="account.link" placeholder="PayPal.Me 連結"
                                            style="width: 100%; margin-bottom: 22px"></el-input>
                                            <div>
                                                帳戶幣別 : USD
                                            </div>
                                        </div>
                                    </div>

                                     <div>
                                        <el-checkbox class="checkboxStyle" v-model="form.alipay" style="border-bottom: 2px solid #C4C4C4; padding-bottom: 5px; width: 95%">
                                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                                <span style="font-size: 1.1rem; font-weight: 400;">銀行帳戶</span>
                                                <i class="el-icon-arrow-down"></i>
                                            </div>
                                        </el-checkbox>

                                        <div style="width: 95%; padding: 35px 20px;">
                                            <el-input v-model="account.ISBN" placeholder="ISBN"
                                            style="width: 100%; margin-bottom: 22px"></el-input>
                                            <el-input v-model="account.SortCode" placeholder="SWIFT / ABA no / SortCode"
                                            style="width: 100%; margin-bottom: 22px"></el-input>
                                            <el-input v-model="account.enName" placeholder="銀行英文名稱"
                                            style="width: 100%; margin-bottom: 22px"></el-input>
                                            <el-input v-model="account.account" placeholder="銀行帳號"
                                            style="width: 100%; margin-bottom: 22px"></el-input>
                                            <el-input v-model="account.user" placeholder="戶名"
                                            style="width: 100%; margin-bottom: 22px"></el-input>
                                            <el-input v-model="account.phone" placeholder="收款人聯絡電話"
                                            style="width: 100%; margin-bottom: 22px"></el-input>
                                            <el-input v-model="account.address" placeholder="收款人聯絡地址"
                                            style="width: 100%; margin-bottom: 22px"></el-input>
                                            <div>
                                                帳戶幣別 : USD
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-col> -->
                    </el-row>
                    <div class="txtCenter" style="margin-top:4rem;letter-space: 1px">
                        <div @click="onSubmit" class="btn btn-solid-gold" style="padding: 0.5rem 5rem;">SUBMIT</div>
                    </div>
                </div>
                
            </div>
          </section>
      </section>

  </div>
</template>

<script>
import Cookies from 'js-cookie';
import { uploadImg } from '~/api/consign'

  export default {
    data () {
      return {				
        showNavbar: true,
        navbarFixed: false,
        lastScrollPosition: 0,
        scrollValue: 0,
        dialogImageUrl: '',
        dialogVisible: false,
        imgSize: [],
        fileList: [],
        test: '',
        form: {
            full_name: '',
            // firstName: '',
            // lastName: '',
            email: '',
            phone: '',
            item_name: '',
            // checked: false,
            images: ''
            // PayPal: false,
            // alipay: false
        },
        account: {
            area: '',
            link: '',
            ISBN: '',
            SortCode: '',
            enName: '',
            account: '',
            user: '',
            phone: '',
            address: ''
        },
        options: [{
          value: '1',
          label: '台灣'
        }, {
          value: '2',
          label: '美國'
        }, {
          value: '3',
          label: '中國'
        }],
      }
    },
    computed: {
        full_name() {
            return this.firstName + ' ' + this.lastName
        }
    },
    mounted () {
        // this.lastScrollPosition = window.pageYOffset
        window.addEventListener('scroll', this.onScroll);
        
    },
    beforeDestroy(){
        window.removeEventListener('scroll', this.onScroll);
    },
    methods: {
        onSubmit() {
            console.log('submit')
        },
        anchorScroll(){
          $(".tab-anchor-tabs").on('click',".tab-anchor", function(){
              var attr = this.getAttribute("data-goHash");
              var target_top = document.getElementById(attr).offsetTop;
              $("html,body").animate({scrollTop: target_top - 200}, 700);
          });
        },
        onScroll() {
          const OFFSET = 60;
          const headerHeight = 30;
          if (window.pageYOffset < 0) {
              return
          }
          if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
              return
          }
          this.navbarFixed = window.pageYOffset > OFFSET && window.pageYOffset < this.lastScrollPosition
          this.showNavbar = window.pageYOffset < this.lastScrollPosition
          this.lastScrollPosition = window.pageYOffset
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        // getBase64(file) {
        //     return new Promise((resolve, reject) => {
        //         const reader = new FileReader()
        //         let imgResult = ''
        //         reader.readAsDataURL(file)
        //         reader.onload = function onload() {
        //         imgResult = reader.result
        //         }
        //         reader.onerror = function onerror(error) {
        //         reject(error)
        //         }
        //         reader.onloadend = function onloadend() {
        //         resolve(imgResult)
        //         }
        //     })
        // },
        // getFile(file) {
        //     this.getBase64(file.raw).then(res => {
        //         const params = res.split(',')
        //         console.log(params, 'params')
        //         if (params.length > 0) {
        //             this.test = params[1]
        //         }
        //         const data = {
        //             imgData: this.test,
        //             token: Cookies.get('token'),
        //         }
        //         uploadImg(data).then((res) => {
        //             console.log(res)
        //         })
        //     })
        // }
    // handleRemove(file) {
    //   this.fileList = []
    //   this.compress(file.raw, (val) => {
    //     const replaceRes = val.replace(/^data:.*?;base64,/, '')
    //     this.fileList.push(replaceRes) // 將取得的base64放入陣列中
    //   })
    // }
        // getFile(file) {
        //     this.compress(file.raw, (val) => {
                
        //         const replaceRes = val.replace(/^data:.*?;base64,/, '')
        //         console.log(replaceRes)
        //         this.imgSize.push(this.getImgSize(replaceRes))
        //         const data = {
        //             imgData: replaceRes,
        //             token: Cookies.get('token'),
        //         }
        //         uploadImg(data).then((res) => {
        //             console.log(res)
        //         })
        //     })
            
        // },
       
    },
      
  }
</script>

<style lang="scss">
  @import "assets/css/base/default.scss";
  @import "assets/css/pages/subPage_entrance.scss";
 
</style>

<style scoped>
    .checkboxStyle >>> .el-checkbox__label {
        width: 95% !important;
    }
    .uploadStyle >>> .el-upload-list__item {
        padding: 0px !important;
    }
    
</style>