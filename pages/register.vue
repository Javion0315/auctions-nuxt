<template>
  <div>
    <section class="mainContent fullColorBg">
          <section class="" style="padding-top: 70px">
            <div class="container">
                <div style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
                    <h1 class="heading-m" style="font-weight: 400; text-align: center; font-size: 2.5rem; color: #DAC287">Register To Bid</h1>
                </div>
                <div class="decoration-bg">
                    <el-row style="padding: 65px 0px 0px; display: flex; justify-content: center;">
                        <el-col :span="12" :xs="21">
                            <div class="title-m">Profile</div>
                          <!-- Profile -->
                            <div style="margin-bottom: 30px">
                                <el-form label-width="80px" :model="ProfileForm">
                                  <el-form-item>
                                    <el-input
                                      v-model="ProfileForm.name"
                                      placeholder="User Name"
                                    ></el-input>
                                  </el-form-item>
                                  <el-form-item>
                                    <el-input
                                      v-model="ProfileForm.email"
                                      placeholder="Email"
                                    ></el-input>
                                  </el-form-item>
                                </el-form>
                            </div>

                        <!-- Billing & Shipping Information -->
                            <div style="margin-bottom: 30px">
                              <div class="title-m">Billing & Shipping Information</div>
                              <el-form label-width="80px" :model="Information">
                                  <el-form-item>
                                      <div style="width: 100%; display: flex; justify-content: space-between;">
                                          <el-col :span="15">
                                              <el-input v-model="Information.firstName" placeholder="First Name" style="width: 100%;"></el-input>
                                          </el-col>
                                          <el-col :span="8">
                                              <el-input v-model="Information.lastName" placeholder="Last Name" style="width: 100%;"></el-input>
                                          </el-col>
                                      </div>                                       
                                  </el-form-item>
                                  <el-form-item>
                                    <el-input
                                      v-model="Information.phone"
                                      placeholder="Phone Number"
                                    ></el-input>
                                  </el-form-item>
                                  <el-form-item>
                                    <el-input
                                      v-model="Information.Address"
                                      placeholder="Address"
                                    ></el-input>
                                  </el-form-item>
                                  <el-form-item>
                                    <el-input
                                      v-model="Information.City"
                                      placeholder="City"
                                    ></el-input>
                                  </el-form-item>
                                  <el-form-item>
                                      <div style="width: 100%; display: flex; justify-content: space-between;">
                                        <el-col :span="15">
                                            <el-input v-model="Information.Country" placeholder="Country" style="width: 100%;"></el-input>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-input v-model="Information.ZipCode" placeholder="Zip Code" style="width: 100%;"></el-input>
                                        </el-col>
                                      </div>                                       
                                  </el-form-item>
                              </el-form>
                            </div>
                        </el-col>
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
export default {
  data() {
    return {
      ProfileForm: {
        name: '',
        email: ''
      },
      Information: {
          firstName: '',
          lastName: '',
          phone: '',
          Address: '',
          City: '',
          Country: '',
          ZipCode: ''
      }
    }
  },
  methods: {
    onSubmit() {
        console.log('123')
    }
  }
}
</script>
<style lang="scss">
  @import "assets/css/base/default.scss";
  @import "assets/css/pages/subPage_entrance.scss";
 
</style>