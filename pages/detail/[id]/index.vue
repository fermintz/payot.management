<template>
  <div class="container">
    <header>
      <div class="left">
        <el-button text circle>
          <span class="material-icons">arrow_back</span>
        </el-button>
        <h2><b>에코런드렛 수원영화점</b> 상세정보</h2>
      </div>
      
      <div class="btns">
        <el-button class="save">
          <span class="material-icons">check</span>
          <label>저장하기</label>
        </el-button>
      </div>
    </header>
    
    <div class="contents">
      <div class="left">
        <div class="top">
          <h4>
            서류요청완료
          </h4>
          <div class="btns">
            
            <el-button>반복요청</el-button>
            <el-button>CMS-서류출력</el-button>
            <el-button @click="visible = true">설치일정 안내</el-button>
            <el-button @click="message('링크가 복사를 되었습니다.')">링크복사</el-button>
            <el-button @click="message('TID가 복사를 되었습니다.')">TID 복사</el-button>
            <el-button @click="message('MID가 복사를 되었습니다.')">MID 복사</el-button>
            <el-button @click="message('HASH가 복사를 되었습니다.')">HASH 복사</el-button>
            <el-button>삭제하기</el-button>
            <el-button class="complete">완료하기</el-button>
          </div>
        </div>
  
        <div class="form box">
          <dl>
            <dt>가입서비스</dt>
            <dd>
              <el-checkbox-group v-model="checkList">  
                <el-checkbox label="키오스크" />
                <el-checkbox label="스마트페이" />
              </el-checkbox-group>
            </dd>
          </dl>
        </div>
        <div class="form box">
          <dl>
            <dt>사업자구분</dt>
            <dd>
              <el-radio-group v-model="radioGroup" size="large" fill="#0055FF">
                <el-radio-button label="개인" />
                <el-radio-button label="법인" />
              </el-radio-group>
            </dd>
          </dl>
          <dl>
            <dt>매장명</dt>
            <dd><input type="search" class="medium"/></dd>
          </dl>
          <dl>
            <dt>사업자번호</dt>
            <dd><input type="search" class="small"/></dd>
          </dl>
          <dl>
            <dt>우편번호</dt>
            <dd>
              <input type="search" class="small"/>
              <el-button>
                검색
              </el-button>
            </dd>
          </dl>
          <dl>
            <dt>상세주소</dt>
            <dd><input type="search" class="large"/></dd>
          </dl>
          <dl>
            <dt>매장구성</dt>
            <dd>
              <textarea  placeholder="예) 세탁기3대 건조기 3대"/>
            </dd>
          </dl>
          <el-divider/>
          <dl>
            <dt>대표자명</dt>
            <dd><input type="search" class="small"/></dd>
          </dl>
          <dl>
            <dt>생년월일</dt>
            <dd><input type="search" class="small" placeholder="숫자만 입력"/></dd>
          </dl>
          <dl>
            <dt>연락처</dt>
            <dd>
              <input type="search" class="small" placeholder="숫자만 입력"/>
            </dd>
          </dl>
          <dl>
            <dt>메일주소</dt>
            <dd><input type="search" class="medium"/></dd>
          </dl>
          <el-divider/>
          <dl>
            <dt>은행명</dt>
            <dd><input type="search" class="small"/></dd>
          </dl>
          <dl>
            <dt>계좌번호</dt>
            <dd><input type="search" class="medium"/></dd>
          </dl>          
        </div>
        <div class="form box">
          <dl>
            <dt>전자계약유무</dt>
            <dd>
              <el-switch v-model="switchValue" />
            </dd>
          </dl>
          <dl>
            <dt>PG</dt>
            <dd>
              <input type="search" class="small" placeholder="MID"/>
              <input type="search" class="small" placeholder="KEY_HASH"/>
            </dd>
          </dl>
          <dl>
            <dt>VAN</dt>
            <dd><input type="search" class="medium" placeholder="TID"/></dd>
          </dl>
        </div>
        <div class="files box">
          <div class="box-top">
            <h5>첨부파일</h5>
            <el-button>
              <span class="material-icons">file_upload</span>
              <label>파일업로드</label>
            </el-button>
          </div>

          <div class="file" v-for="item in 4" :key="item">
            <div class="name">
              <span>ajsdkjasbdkjasbdkj65a1ds61651s56d1asdalsdkmnkajsdkjasbdkjasbdkj65a1ds6.jpg</span>
            </div>
            <div class="btns">
              <el-tooltip
                placement="top-end"
                effect="dark"
                content="파일명편집"
              >
                <el-button text @click="visible2 = true">
                  <span class="material-icons">edit</span>
                </el-button>
              </el-tooltip>

              <el-tooltip
                placement="top-end"
                effect="dark"
                content="미리보기"
              >
                <el-button text>
                  <span class="material-icons">image</span>
                </el-button>
              </el-tooltip>

              <el-tooltip
                placement="top-end"
                effect="dark"
                content="다운로드"
              >
                <el-button text>
                  <span class="material-icons">download</span>
                </el-button>
              </el-tooltip>

              <el-tooltip
                placement="top-end"
                effect="dark"
                content="삭제"
              >
                <el-button text @click="confirm = true">
                  <span class="material-icons">delete</span>
                </el-button>
              </el-tooltip>
            </div>
          </div>
        </div>   
      </div>
      <div class="right">
        <div class="memo">
          <h4>관리자메모</h4>
          <textarea placeholder="관리에 필요한 정보를 입력해주세요"/>
        </div> 
        <div class="history">
          <h4>작업내역</h4>
          <div class="row">
            <div class="line" />

            <ul>
              <li>
                <b></b>
                <div class="icons">
                  <label class="response">응답</label>
                </div>
                <strong>작성을 완료하였습니다</strong>
                <span>2022.10.12 09:34</span>
              </li>

              <li v-for="item in 5" :key="item">
                <b></b>
                <div class="icons">
                  <label class="request">요청</label>
                </div>
                <strong>카드가맹서류 접수링크를 다시한번 전달드립니다</strong>
                <span>2022.10.12 09:34</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <DialogRename v-model="visible2"/>
    <DialogSchedule v-model="visible"/>
    <DialogConfirm v-model="confirm" />
  </div>
</template>

<script lang="ts" setup>
import {ElMessage} from 'element-plus'

definePageMeta({
  layout:'sub'
})

const message = (val)=>{
  ElMessage({
    showClose:false,
    duration:1000,
    message:val,
    type:'success'
  })
}

const visible = ref(false)
const visible2 = ref(false)
const switchValue = ref(false)
const confirm = ref(false)
const checkList = ref(['키오스크','스마트페이'])
const radioGroup = ref('개인')
</script>


<style lang="scss" scoped>
header{
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding:0 30px;
  height:90px;
  border-bottom:1px solid #e2e2e2;
  background:#fff;

  .left{
    display:flex;
    align-items: center;
    
    
    .el-button{
      width:50px;
      height:50px;
      margin-right:20px;
      background:#f2f2f2;
    }

    h2{
      font-size:24px;
      font-weight:400;
      b{
        font-weight:600;
      }
    }
  }
  
  .btns{
    display:flex;
    align-items: center;
    gap:10px;
    .el-button{
      margin:0;
      height:40px;
      cursor: pointer;
      span{
        font-size:18px;
        margin-right:5px;
        color:#0055FF;
      }
      label{
        cursor: pointer;
      }
    }

    .el-button.save{
      background:#292929;
      color:#fff;
      border:0;
      span{
        color:#fff;
      }
    }
  }
}
.contents{
  display:flex;
  height:100%;

  h4{
    margin-bottom:15px;
    font-size:22px;
    font-weight:600;
  }

  .left{
    flex:1;
    border-right:1px solid #e2e2e2;
    padding:30px;
    padding-bottom:80px;
    min-height:100vh;
    overflow:hidden;
    .box{
      padding:30px;
      margin-bottom:20px;
    }

    .top{
      display:flex;
      justify-content: space-between;

      .btns{
        display:flex;
        gap:5px;
        .el-button{
          margin:0;
          padding:0 10px;
          font-size:12px;
        }
        .complete{
          border:0;
          background:#E11B51;
          color:#fff
        }
      }
    }
  }

  .right{
    width:100%;
    max-width:370px;
    padding:30px;   
  }
}



.memo{
  width:100%;
  margin-bottom:40px;
  textarea{
    width:100%;
    background:transparent;
    height:120px;
    padding:10px;
  }
}

.form{
  display:flex;
  flex-direction: column;
  gap:20px;

  .el-divider{
    margin:10px 0;
  }

  dl{
    display:flex;
    dt{
      width:120px;
      font-size:14px;
      line-height:36px;
    }
    dd{
      display:flex;
      align-items: center;
      gap:10px;
      flex:1;
      input{
        border-radius:5px;
        padding:0 10px;
      }
      .el-button{
        height:36px;
        border:1px solid #c2c2c2;
      }
      textarea{
        width:100%;
        height:80px;
      }

      .el-radio-button--large{
        padding:0;
      }
    }
  }
}

.files{
  display:flex;
  flex-direction: column;
  gap:10px;
  .box-top{
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:10px;
    h5{
      flex:unset;
      font-size:18px;
      font-weight:500;
    }
    .el-button{
      span{
        font-size:18px;
        margin-right:8px;
      }
    }
  }

  .file{
    display:flex;
    justify-content: space-between;
    border:1px solid #e2e2e2;
    border-radius:5px;
    overflow:hidden;

    .name{
      display:flex;
      align-items: center;
      padding:0 10px;
      height:40px;
      overflow:hidden;
      font-size:14px;
      span{
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
      }
    }
    .btns{
      display:flex;
      .el-button{
        width:50px;
        padding:0;
        height:40px;
        border-radius:0;
        border-left:1px solid #e2e2e2;
        background:#fff;
        margin:0;
        span{font-size:16px;}
        label{font-size:12px;display:none;}
      }
    }
  }
}


.history{
  .row{
    display:flex;
  }

  .line{
    display:flex;
    justify-content: center;
    margin-top:4px;
    transform: translateX(4px);
    &:after{
      content:'';
      display:block;
      width:1px;
      border-right:1px dashed #d2d2d2;
      height:100%;
    }
  }
  ul{
    display:flex;
    flex-direction: column;
    gap:30px;
    li{
      position: relative;
      display:flex;
      flex-direction: column;
      padding-left:40px;
      gap:6px;
      b{
        position: absolute;
        width:8px;
        height:8px;
        background:#d2d2d2;
        top:6px;
        border-radius:5px;
        left:0;
      }

      strong{
        font-size:14px;
      }
      .icons{
        display:flex;
        align-items: center;
        gap:5px;
        label{
          display:flex;
          align-items: center;
          height:20px;
          font-size:11px;
          line-height:1;
          background:#000;
          color:#fff;
          padding:0 10px;
          border-radius:3px;
        }

        label.response{
          background:#E11B51
        }

        label.request{
          background:#0055FF
        }
      }

      span{
        font-size:12px;
        color:#898989;
      }
      
    }
  }
}


@media (max-width:1200px) {
  header{
    position: sticky;
    top:0;
    flex-direction: column;
    align-items: flex-start;
    height:auto;
    padding:0px;

    .left{
      height:80px;
      padding:0 15px;
      h2{
        font-size:16px;
        color:#898989;
        b{
          color:#292929;
          display:block;
        }
      }
      .el-button{
        width:40px;
        height:40px;
        margin-right:15px;
      }

    }
    .btns{
      width:100%;
      padding:10px 15px;
      padding-top:0px;

      .el-button{
        width:100%;
      }
    }
  }
  .contents{
    flex-direction: column;
    .left{
      padding:15px;

      .box{
        padding:15px;
      }
      .top{
        flex-direction: column;

        .btns{
          display:grid;
          grid-template-columns: 1fr 1fr 1fr;
          margin-bottom:20px;
        }
      }
    }
    .right{
      max-width:100%;
      padding:15px;
    }
    
  }

  .form{
 
    dl{
      flex-direction: column;

      dt{
        line-height:1.3;
        margin-bottom:10px;
      }
      dd{
        input{
          height:42px;
        }
      }
    }
  }

  .files{
    .file{
      display:block;
      .name{
        max-width:100%;
        width:100%;
        border-bottom:1px solid #e2e2e2;
        background:#f8f8f8;
        height:45px;
      }
      .btns{
        display:flex;
        .el-button{
          flex:1;

          &:first-child{
            border-left:0;
          }
        }
      }
    }
  }
}

</style>