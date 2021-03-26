<template>
    <div style="background-color: #001939; height: 100vh; display: flex; justify-content: center; align-items: center">
        <div style="text-align: center">
            <img src="~assets/images/logo_vertical.svg" style="width: 35%; margin-bottom: 60px;">
            <h2 style="color: #C9B57E; font-size: 2.4rem; font-weight: 300;">Log in to your account</h2>
            <el-form :model="form" style="margin-top: 20px">
                <el-form-item>
                    <div style="display: flex; justify-content: space-between">
                        <el-col :span="9">
                            <el-select v-model="form.countryCode" placeholder="選擇區碼">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col class="line" :span="1">
                        </el-col>
                        <el-col :span="14">
                            <el-input v-model="form.phone" style="width: 100%" placeholder="Phone Number"></el-input>
                        </el-col>
                    </div>
                </el-form-item>
                <el-form-item>
                    <div style="display: flex; justify-content: space-between">
                        <el-col :span="16">
                            <el-input v-model="form.code" placeholder="輸入驗證碼"></el-input>
                        </el-col>
                        <el-col class="line" :span="1">
                        </el-col>
                        <el-col :span="7">
                            <el-button plain style="width: 100%;
                            border: 1px solid #C9B57E;
                            color: #C9B57E; background-color: #001939"
                            @click="getSmsCode">發送驗證碼</el-button>
                        </el-col>
                    </div>
                </el-form-item>
            </el-form>

            <div style="margin-top: 75px; margin-bottom: 12px">
                <el-button plain style="width: 100%;
                background-color: #C9B57E; color: white;
                border: 1px solid #C9B57E;
                font-weight: bold;
                font-size: 1.1rem
                " @click.prevent="login">LOG IN</el-button>
            </div>
            <p style="color: white; font-size: 0.9rem; font-weight: 300;">Don't have an account?
                <span style="color: #C9B57E; font-weight: bold;"><u>  Sign up</u></span>！
            </p>
        </div>
        
    </div>
</template>

<script>
import { getcode, login } from '~/api/login'

export default {
    data() {
        return {
            options: [{
                value: '+886',
                label: '+886'
            }, {
                value: '+86',
                label: '+86'
            }],
            form: {
                countryCode: '',
                phone: '',
                code: ''
            }
        }
    },
    methods: {
        getSmsCode() {
            const data = {
                phone: this.form.phone,
                countryCode: this.form.countryCode
            }
            getcode(data).then((res) => {
                if(res.data.code === 1) {
                    console.log()
                    this.$notify({
                        title: res.data.msg,
                        message: '這是一條不會自動關閉的消息',
                        duration: 0
                    });
                } else {
                    this.$message.error(res.data.msg);
                }
            })
        },
        login() {
            let uuid = ''
            let token = ''
            for(let i = 0; i < 5; i++) {
                uuid += this.generateString(8)
                if (i !== 4) {
                    uuid += '-'
                }
            }
            Object.assign(this.form, {uuid: uuid})
            login(this.form).then((res) => {
                if (res.data.code === 1) {
                    token = res.data.user.token
                    localStorage.setItem('token', token)
                    this.$router.push({path: '/'})
                    // location.reload()
                } else {
                    this.$message.error(res.data.msg);
                }
            })
        },
        generateString(length) {
            const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
    },
}
</script>