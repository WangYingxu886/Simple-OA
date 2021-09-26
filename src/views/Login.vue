<template>
  <div class="login-wrapper">
    <div class="model">
      <el-form :model="user" status-icon :rules="rules" ref="userForm">
        <h3>登录</h3>
        <el-form-item prop="userName">
          <el-input type='text' v-model.trim="user.userName" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input type='password' v-model.trim="user.userPwd" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item>
          <el-button type='primary' @click="login" >登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
    name :'Login',
    data(){
      return {
        user:{
          userName:'',
          userPwd:''
        },
        rules:{
          userName:[
            {required:true, message:'请输入用户名', trigger:"blur"}
          ],
          userPwd:[
            {required:true, message:'请输入密码', trigger:"blur"}
          ]
        }
      }
    },
    methods:{
      login(){
        this.$refs.userForm.validate((valid)=>{
          if(valid){
            this.$api.login(this.user).then((res)=>{
              if (res.code === 200) {
                this.$store.commit('saveUserInfo',res.data)
                this.$router.push('/welcome')
              }else if (res.code === 40001) {
                this.$notify.error({
                  title:"错误",
                  message:res.msg
                });
              }
            })
          }else{
            return false
          }
        })
      }
    }
}
</script>

<style lang="scss" scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fcff;
  height: 100vh;
  width: 100%;
  .model {
    width: 500px;
    padding: 0 50px 50px 40px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 0px 5px #ccc;
    h3 {
      text-align: center;
      line-height: 80px;
      font-size: 20px;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>