<template>
  <div class="welcome">
    <div class="content">
      <div class="left">
        <h3>欢迎使用</h3>
        <h2>通用后台管理系统（学习用）</h2>
        <span>- Vue3 + Node + MongoDB + ElementPlus开发的通用后台管理系统</span>
      </div>
      <div class="right">
        <img src="../../assets/images/welcome.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<style scoped lang="scss">
.welcome {
  background-color: #fff;
  height: 100%;
  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10vh 10vw;
    .left {
      flex: 1;
      padding-top: 10vh;
      h3 {
        font-size: 24px;
        font-weight: bold;
        line-height: 50px;
      }
      h2 {
        font-size: 30px;
        color: rgb(8, 170, 219);
        line-height: 80px;
      }
      span {
        font-size: 14px;
        color: #ccc;
      }
    }
    .right {
      img {
        width: 100%;
      }
    }
  }
}
</style>