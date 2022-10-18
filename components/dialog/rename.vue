<template>
  <el-dialog v-model="show" :show-close="false" custom-class="renameDialog">
    <template #header="{close}">
      <div class="head">
        <h2>파일명변경</h2>
        <el-button text circle @click="close">
          <span class="material-icons">close</span>
        </el-button>
      </div>
    </template>
    <div class="form">
      <dl>
        <dt>현재 파일명</dt>
        <dd>
          <input 
            type="text" 
            class="medium" 
            disabled
            value="ajsdkjasbdkjasbdkj65a1ds61651s56d1asdalsdkmnkajsdkjasbdkjasbdkj65a1ds6.jpg"
          />
        </dd>
      </dl>  
      <dl>
        <dt>변경할 파일명</dt>
        <dd>
          <input type="text" class="medium" placeholder="확장자는 제외됩니다."/>
        </dd>
      </dl>    
    </div>
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

.form{
  display:flex;
  flex-direction: column;
  gap:20px;
  .el-divider{
    margin:0;
  }
  dl{
    dt{
      margin-bottom:8px;
      font-size:12px;
    }
    dd{
      input{
        height:40px;
      }
    }
  }
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