<template>
  <el-dialog v-model="show" :show-close="false" custom-class="addUserDialog">
    <template #header="{close}">
      <div class="head">
        <h2>임의등록</h2>
      </div>
    </template>
    <div class="form">
      <dl>
        <dt>서비스구분</dt>
        <dd>
          <el-checkbox-group v-model="checkList">  
            <el-checkbox label="키오스크" />
            <el-checkbox label="스마트페이" />
          </el-checkbox-group>
        </dd>
      </dl>

      <el-divider></el-divider>
      
      <dl>
        <dt>서비스구분</dt>
        <dd>
          <el-radio-group v-model="radioGroup" size="large" fill="#0055FF">
            <el-radio-button label="개인" />
            <el-radio-button label="법인" />
          </el-radio-group>
        </dd>
      </dl>
      <dl>
        <dt>매장명</dt>
        <dd>
          <input type="text" class="medium" />
        </dd>
      </dl>
      <dl>
        <dt>전화번호</dt>
        <dd>
          <input type="text" class="medium" />
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

const checkList = ref([])
const radioGroup = ref('개인')

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