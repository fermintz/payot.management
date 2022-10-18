<template>
  <el-dialog v-model="show" :show-close="false"  custom-class="confirm">
    <template #header>
      <div class="head">
        <h2>삭제하기</h2>
      </div>
    </template>

    <p>삭제하시겠습니까?</p>

    <template #footer>
      <div class="footer">
        <el-button>취소</el-button>
        <el-button class="complete">확인</el-button>
      </div>
    </template>
    
  </el-dialog>
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


.head{
  display:flex;
  align-items: center;
  justify-content: space-between;
  h2{
    font-size:20px;
    font-weight:600;
  }
  .el-button{
    width:40px;
    height:40px;
    margin:0;
    background:#f2f2f2;
  }
}

p{
  font-size:16px;
}

.footer{
  .el-button{
    height:40px;
    padding:0 20px;
    margin:0;
    margin-left:10px;
  }
  .complete{
    background:#292929;
    color:#fff;
    border:0;
  }
}
</style>