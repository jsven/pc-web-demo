<template>
    <div class="login-container">
        <div id="loginBox">
            <div class="loginTitle">系统登录</div>
            <el-form :inline="true" :model="loginForm" ref="loginForm"  class="demo-form-inline">
                <el-row :span="24" class="usernameBox">
                    <div class="titleTip">请输入用户名</div>
                    <el-col :span="24" class="contentBox" >
                        <el-form-item prop="username" :rules="filter_rules({required:true})">
                             <el-input  type="text" v-model="loginForm.username" autoComplete="on" placeholder="用户名"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :span="24" class="passwordBox">
                    <div class="titleTip">请输入密码</div>
                    <el-col :span="24" class="contentBox">
                        <el-form-item prop="password" :rules="filter_rules({required:true})">
                            <el-input  type="password" v-model="loginForm.password" autoComplete="on" placeholder="密码"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :span="24" class="verificationBox">
                    <div class="titleTip">请输入验证码</div>
                    <el-col :span="24" >
                        <el-form-item  :rules="filter_rules({required:true})">
                            <el-input  type="text" v-model="loginForm.verifyCode" autoComplete="on" placeholder="验证码"></el-input>
                        </el-form-item>
                        <img src="http://192.168.185.237:10019/sec/verify/valicode" alt="" class="verificationImg" @click="refresh" :key="loginForm.refreshImg">
                    </el-col>
                </el-row>
                <el-row :span="24" class="btnBox">
                    <el-col :span="24" class="contentBox">
                        <el-form-item >
                            <el-button type="primary" id="loginBtn"  :loading="loading" @click.native.prevent="handleLogin('loginForm')" class="btn-active">登录</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
    </div>
</template>
<script>
/* eslint-disable no-unused-vars */

import { isWscnEmail } from '@/utils/validate'
import { verification } from '@/api/login'
export default {
  data () {
    return {
      loginForm: {
        grant_type: 'password',
        username: '',
        password: '',
        verifyCode: '',
        refreshImg: 0
      },
      loading: false
    }
  },
  methods: {
    refresh () {
      this.loginForm.refreshImg++
    },
    handleLogin (formName) {
      this.loading = true
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch('Login', this.loginForm).then((res) => {
            this.loading = false
            if (res.data.status) {
              this.$router.push({ path: '/' })
              this.$message({
                message: '登录成功',
                type: 'success'
              })
            } else {
              this.loginForm.refreshImg++
              this.$message.error(res.data.message)
            }
          }).catch((res) => {
            // this.$message.error('登录失败，请联系管理员');
            this.loading = false
            this.loginForm.refreshImg++
          })
          /* verification("verifyCode="+this.loginForm.verifyCode).then(res=>{
                            if(res.data.status){
                                this.$store.dispatch('Login', this.loginForm).then((res) => {
                                    this.loading = false;
                                    if(res.data.status){
                                        this.$router.push({ path: '/' });
                                        this.$message({
                                            message: '登录成功',
                                            type: 'success'
                                        });
                                    }else{
                                        this.loginForm.refreshImg++;
                                        this.loginForm.verifyCode = "";
                                        this.$message.error(res.data.message);
                                    }
                                }).catch((res) => {
                                    this.loading = false;
                                    this.loginForm.verifyCode = "";
                                    this.loginForm.refreshImg++;
                                });
                            }else{
                                this.loading = false;
                                this.$message.error(res.data.message);
                            }
                        }); */
        } else {
          this.$message.error('请输入必填项！')
          this.loading = false
          return false
        }
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
    .login-container{
        height: 100vh;
        background:url("../../assets/images/loginBg.png") no-repeat;
        background-size:100% 100%;
        position: relative;
        .loginTitle{
            font-family:MicrosoftYaHei;
            font-size:30px;
            color:#999999;
            margin-top: 20px;
            text-align: center;
        }
    }
    #loginBox{
        width: 450px;
        height: 465px;
        background:#ffffff;
        margin:auto;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        box-shadow:0 2px 10px 0;
        border-radius:4px;
    }
    .contentBox{
        text-align: center;
        .el-form-item {
            margin-right: 0;
            margin-bottom: 0;
        }
        .el-input__inner{
            display: inline-grid;
            width:359px;
            height:49px;
            background:#f5f6fa;
            border:1px solid #e5e5e5;
            border-radius:4px;
            margin-top: 10px;
            font-size:14px;
            color:#333333;
            font-family:MicrosoftYaHei;
        }
    }
    .titleTip{display: inline-block;margin-left: 45px;font-size:14px; color:#666666;}
    .usernameBox{margin-top: 25px;}
    .passwordBox{margin-top: 20px;}
    .verificationImg{
       // border:1px solid #000;
        margin-top: 10px;
        width:160px;
        height:48px;
        display: inline-block;
        cursor: pointer;
    }
    .verificationBox{
        margin-top: 20px;
        .el-form-item{
            margin-left: 46px;
        }
        .el-input__inner{
            display: inline-grid;
            height:49px;
            background:#f5f6fa;
            border:1px solid #e5e5e5;
            border-radius:4px;
            margin-top: 10px;
            font-size:14px;
            color:#333333;
            font-family:MicrosoftYaHei;
        }
    }
    .btnBox{
        margin-top: 20px;
        #loginBtn{
            background:#41bdc7;
            border-radius:4px;
            width:360px;
            height:60px;
            font-size:18px;
            color:#ffffff;
        }
    }

</style>
