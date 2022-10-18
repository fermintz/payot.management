<template>
  <el-drawer v-model="show" :with-header="false" size="70%">
    <div class="top">
      <div class="logo">
        <img src="~/assets/img/payot_logo.png" />
        <label>PAYOT</label>
      </div>
    </div>
    <el-divider />
      
    <div class="inner">
      <div class="counter">
        <strong>24</strong>
        <span>총 잔여신청</span>
      </div>
      <el-divider />
      <ul>
        <li>
          <label>신청목록</label>
          <span>1</span>
        </li>
        <li>
          <label>서류요청완료</label>
          <span>4</span>
        </li>
        <li>
          <label>서류접수 및 심사</label>
          <span>3</span>
        </li>
        <li>
          <label>심사완료</label>
        </li>
      </ul>
    </div>

    

    
  </el-drawer>
</template>

<script lang="ts" setup>

const props = defineProps<{
  modelValue: boolean
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', state:boolean): void
}>()

const show = computed({
  get(){
    return props.modelValue;
  },
  set(change: boolean) {
    emits('update:modelValue', change)
  }
})

</script>

<style lang="scss" scoped>
.top{
  display:flex;
  align-items: center;
  justify-content: center;
  padding:20px 0;
  .logo{
    display:flex;
    align-items: center;
    img{
      height:36px;
      display:block;
    }
    label{
      font-size:24px;
      margin-left:10px;
      font-weight:400;
    }
  }
}

.inner{
  
}
.counter{
  padding:0 20px;
  display:flex;
  flex-direction: column;
  align-items: center;
  strong{
    font-size:40px;
    font-weight:600;
    color:#E11B51;
  }
  span{
    font-size:14px;
    color:#898989;
  }
}

ul{
  display:flex;
  flex-direction: column;
  gap:10px;
  
  li{
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:40px;
    padding:0 20px;
    cursor: pointer;

    span{
      display:flex;
      background:#f2f2f2;
      justify-content: center;
      align-items: center;
      width:20px;
      height:20px;
      font-size:12px;
      font-weight:500;
      line-height:1;
    }
  }
}
</style>