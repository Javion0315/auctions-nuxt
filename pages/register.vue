<template>
  <div>
    <section class="policy mainContent" style="margin: 70px">
      <section class="Privacy" style="padding: 0px">
        <div class="container">
          <h2
            class="title-m"
            style="
              font-weight: 300;
              font-size: 2.2rem;
              line-height: 55px;
              margin-bottom: 1.5rem;
            "
          >
            Register To Bid
          </h2>

          <!-- Profile -->
          <div style="background-color: #f2f2f2; padding: 60px; margin-bottom: 45px">
            <div style="margin-bottom: 30px">
              <h2
                class="title-m"
                style="
                  font-weight: 300;
                  font-size: 2.2rem;
                  line-height: 55px;
                  margin-bottom: 1.5rem;
                "
              >
                Profile
              </h2>

              <div style="width: 60%; margin-left: -50px">
                <el-form label-width="80px" :model="ProfileForm">
                  <el-form-item>
                    <el-input
                      v-model="ProfileForm.name"
                      placeholder="User Name"
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-input
                      v-model="ProfileForm.password"
                      placeholder="Password"
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
            </div>
          </div>

        <!-- Billing & Shipping Information -->
          <div style="background-color: #f2f2f2; padding: 60px">
            <div style="margin-bottom: 30px">
              <h2
                class="title-m"
                style="
                  font-weight: 300;
                  font-size: 2.2rem;
                  line-height: 55px;
                  margin-bottom: 1.5rem;
                "
              >
                Billing & Shipping Information
              </h2>

              <div style="width: 60%; margin-left: -50px">
                <el-form label-width="80px" :model="Information">
                    <el-form-item>
                        <div style="width: 100%; display: flex; justify-content: space-between;">
                            <el-col :span="11">
                                <el-input v-model="Information.firstName" placeholder="First Name" style="width: 100%;"></el-input>
                            </el-col>
                            <el-col :span="11">
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
                            <el-col :span="11">
                                <el-input v-model="Information.Country" placeholder="Country" style="width: 100%;"></el-input>
                            </el-col>
                            <el-col :span="11">
                                <el-input v-model="Information.ZipCode" placeholder="Zip Code" style="width: 100%;"></el-input>
                            </el-col>
                        </div>                                       
                    </el-form-item>
                </el-form>
              </div>
            </div>
          </div>

          <div style="text-align: center; margin-bottom: 40px">
                <el-button type="primary" @click="onSubmit" style="background-color: #0C4C78; border-radius: 5px; float: left; margin-top: 40px; margin-left: 100px;" size="mini">
                    <span style="font-size: 1.6rem; padding: 0px 20px; letter-space: 1px">Submit</span>
                </el-button>
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
        password: '',
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