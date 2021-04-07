<template>
    <div>
        <section class="sectionBox ProfileDetails">
            <h2 class="title-m">Profile Details</h2>
            <div class="btn btn-line">Edit</div>
            <ul>
                <li>Full Name : Miss. Hsuan Ma</li>
                <li>Email : Ada@gmail.com</li>
                <li>Address : 1F.no.453-1,oqiwjeoiwjoijsdkfjlskdfjlkfs;ldjwqopedsfk</li>
                <li>Phone : +886 931750110</li>
            </ul>
        </section>
        <section class="sectionBox ContactUs">
            <h2 class="title-m">Contact Us</h2>
            <el-form :model="contactUsForm" ref="contactUsForm">
                <el-form-item prop="category">
                    <el-select v-model="contactUsForm.category" placeholder="請選擇問題類別">
                        <el-option label="物流問題" value="logistics"></el-option>
                        <el-option label="款項問題" value="money"></el-option>
                        <el-option label="系統錯誤回報" value="erro"></el-option>
                        <el-option label="其他" value="other"></el-option>
                    </el-select>                  
                </el-form-item>
                <el-form-item prop="textarea">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 6, maxRows: 10}"
                    placeholder="有任何問題需要協助嗎？我們將盡快回覆您"
                    v-model="contactUsForm.textarea"
                    maxlength="30">
                </el-input>
            </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm">提交</el-button>
                </el-form-item>
            </el-form>
        </section>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
           contactUsForm: {
            category: '',
            textarea: ''
           },

        }
    },
    created() {
       
    },
    methods: {
        submitForm() {
            console.log('submit!');
        }
    },
}
</script>

<style scoped>
    
</style>