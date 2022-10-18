<template>
  <el-dialog v-model="show" :show-close="false" custom-class="scheduleDialog">
    <template #header="{close}">
      <div class="head">
        <h2>설치일정 안내</h2>
        <el-button text circle @click="close">
          <span class="material-icons">close</span>
        </el-button>
      </div>
    </template>
    <div class="form">
      <dl>
        <dt>설치일정예시</dt>
        <dd>
          <p>
            설치일정 : <b>{{$dayjs().format('YYYY년 MM월 DD일 HH시')}} ~ {{$dayjs().add(1,'hour').format('HH시')}}</b> 사이 방문예정 입니다
            (전후일정 및 교통량에 따라 일부 변경될 수 있습니다.)
          </p>
        </dd>
      </dl>
      
      <dl>
        <dt>날짜입력</dt>
        <dd>
          <div class="text-box">
            <input type="text" :placeholder="$dayjs().format('YYYY')" maxlength="4"/>
            <label>년</label>
          </div>
          <div class="text-box" >
            <input type="text" :placeholder="$dayjs().format('MM')" maxlength="2"/>
            <label>월</label>
          </div>
          <div class="text-box">
            <input type="text"  :placeholder="$dayjs().format('DD')" maxlength="2"/>
            <label>일</label>
          </div>
        </dd>
      </dl>

      <dl>
        <dt>시간입력</dt>
        <dd>
          <div class="text-box">
            <input type="text"  :placeholder="$dayjs().format('HH')" maxlength="2"/>
            <label>시</label>
          </div>
          <div class="text-box empty">
            ~
          </div>
          <div class="text-box" >
            <input type="text" :placeholder="$dayjs().add(1, 'hour').format('HH')" maxlength="2"/>
            <label>시</label>
          </div>
        </dd>
      </dl>
    </div>
    <template #footer>
      <div class="footer">
        <el-button @click="modelValue = false">취소</el-button>
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
  
  p{
    background:#f2f2f2;
    padding:15px;
    border-radius:5px;
    font-size:14px;
    line-height:1.4;
    b{
      font-weight:500;
      color:#E11B51;
    }
  }

  dl{
    dt{
      margin-bottom:8px;
      font-size:12px;
    }
    dd{
      display:flex;
      gap:10px;
      .text-box{
        display:flex;
        flex:1;
        align-items: center;
        position: relative;
        input{
          width:100%;
          height:40px;
          padding-right:40px;
          text-align:center;
          font-size:16px;
        }
        label{
          text-align:center;
          position: absolute;
          right:0px;
          width:40px;
        }
      }

      .text-box.empty{
        justify-content: center;
        flex:1;
        background:#f2f2f2;
        border-radius:5px;
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