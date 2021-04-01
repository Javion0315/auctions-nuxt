<template>
    <div class="privateSaleForm" id="privateSaleForm">
        <el-divider></el-divider>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <h2 class="title-m txtCenter">How Much Are You Willing To Pay</h2>
            <el-form-item prop="name">
                <el-input v-model="ruleForm.name" placeholder="User Name" clearable></el-input>
            </el-form-item>
            <el-form-item prop="email">
                <el-input v-model="ruleForm.email" placeholder="Email address" clearable></el-input>
            </el-form-item>
            <el-form-item prop="price">
                <el-input v-model.number="ruleForm.price" placeholder="願意出價的金額" show-word-limit clearable></el-input>
            </el-form-item>
             <el-form-item prop="textarea">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 6, maxRows: 10}"
                    placeholder="有任何問題想詢問嗎？"
                    v-model="ruleForm.textarea1"
                    maxlength="30">
                </el-input>
            </el-form-item>
            <el-form-item class="clearfix txtCenter">
                <el-button class="btn btn-solid-gold btn-biggest" @click="submitForm('ruleForm')">送出</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
           ruleForm: {
                name: '',
                email: '',
                price: '',
                textarea1: ''
           },
           rules: {
                name: [
                    { required: true, message: '請輸入您的姓名', trigger: 'blur' },
                ],
                email: [
                    { required: true, message: '請輸入Email', trigger: 'blur' },
                    { type: 'email', message: '請輸入正確格式', trigger: ['blur', 'change'] }
                ],
                price: [
                    { required: true, message: '請輸入金額 $USD', trigger: 'blur' },
                    { type: 'number', message: '請輸入數字', trigger: 'blur' },
                    // { min: 2, message: '請輸入最低兩位數金額', trigger: 'blur' }
                ]
           }
        
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        }
    }       
}

</script>

<style scoped>
    
</style>