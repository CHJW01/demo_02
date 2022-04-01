<template>
  <div>
    <el-form  :rules="rules" ref="dynamicValidateForm" :model="dynamicValidateForm" class="loginContainer">
      <h3 class="loginTitle">系统登录</h3>
  <el-form-item label="账户名" prop="username">
    <el-input type="text" v-model="dynamicValidateForm.username" placeholder="请输入账号"></el-input>
    </el-form-item>    
  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="dynamicValidateForm.password" placeholder="请输入密码"></el-input>
  </el-form-item>
  <el-form-item label="验证码" prop="code">
    <el-input type="text" auto-complete="false" v-model="dynamicValidateForm.code" placeholder="点击图片更换验证码" style="width:200px"></el-input>
    <img :src="captchaUrl">
  </el-form-item>
   <el-checkbox v-model="checked" class="loginjizuwo">记住我</el-checkbox>
    <el-button type="primary" style="width:100%" @click="submitLogin">登录</el-button>
  </el-form>
  </div>
</template>

<script>
export default {
    name:'Login',
    data(){
      return{
        captchaUrl:' ',
        dynamicValidateForm:{
          username:'小杜',
          password:'123456',
          code:''
        },
        checked: true,
        rules:{
          username:[{required:true,message:'请输入用户名',tigger:'blur'}],
          password:[{required:true,message:'请输入密码',trigger:'blur'}],
          code:[{required:true,message:'请输入验证码',trigger:'blur'}]
        }
      }
    },
    methods:{
      submitLogin(){
        this.$refs.dynamicValidateForm.validate((valid)=>{
          if(valid){
            alert('submit!')
            this.$router.push('Myhome')
          }else{
            console.log('error submit!')
            return false
          }
        })
      }
    }
}
</script>

<style scoped>
  .loginContainer{
    border-radius:10px;
    background-clip: 15px;
    margin: 180px auto;
    width: 350px;
    padding: 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .loginTitle{
    margin: 0px auto;
    text-align: center;
  }
  .loginjizuwo{
    text-align: left;
    margin: 0 0 15px 0;
  }
</style>