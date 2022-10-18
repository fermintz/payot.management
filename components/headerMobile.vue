<template>
  <div class="m-header">
    <div class="logo">
      <img src="~/assets/img/payot_logo.png"/>
      <label>PAYOT</label>
    </div>
    <div class="btns">
      <el-button circle text @click="visible = true">
        <span class="material-icons">menu</span>
      </el-button>
    </div>

    <Drawer v-model="visible"/>
  </div>
</template>

<script lang="ts" setup>
const visible = ref(false)
</script>

<style lang="scss" scoped>
.m-header{
  position:sticky;
  z-index:5;
  background:#fff;
  top:0;
  display:none;
  align-items: center;
  justify-content: space-between;
  height:70px;
  padding:0 20px;

  .logo{
    display:flex;
    align-items: center;
    img{
      height:32px;
    }
    label{
      font-size:20px;
      line-height:1;
      font-weight:400;
      margin-left:10px;
    }
  }

  .btns{
    .el-button{
      height:40px;
      width:40px;
    }
  }
}

@media (max-width:1200px){
  .m-header{
    display:flex;
  }
}
</style>