<template>
  <div class="card box">
    <div class="top">
      <div class="row">
        <div class="service">
          <span class="kiosk">키오스크</span>
          <span class="smartpay">스마트페이</span>
        </div>
        <div class="request-date">
          {{$dayjs().format('YYYY년 MM월 DD일')}} 신청
        </div>
      </div>

      <div class="shop-name">
        워시타임 김해진영점
      </div>
    </div> <!-- top -->

    <div class="middle">
      <el-divider />
      <dl class="member">
        <dt>가맹정보</dt>
        <dd>
          <span class="on">KEY</span>
          <span>MID</span>
          <span>TID</span>
        </dd>
      </dl>
      <el-divider />
    
      <dl>
        <dt>대표자</dt>
        <dd>정일봉</dd>
      </dl>
      <dl>
        <dt>연락처</dt>
        <dd>010-9311-0710</dd>
      </dl>
      <dl>
        <dt>생년월일</dt>
        <dd>1998년 07월 14일</dd>
      </dl>
      <dl>
        <dt>메일</dt>
        <dd>parkeunjpp@naver.com</dd>
      </dl>
          
      <el-divider />
      <dl>
        <dt>가입구분</dt>
        <dd>개인사업자자</dd>
      </dl>
      <dl>
        <dt>사업자번호</dt>
        <dd>445-17-00384</dd>
      </dl>
      <dl>
        <dt>매장주소</dt>
        <dd>경남 김해시 진영읍 김해대로 407번길 24-20</dd>
      </dl>
      <el-divider />
      <dl>
        <dt>은행명</dt>
        <dd>BNK경남</dd>
      </dl>
      <dl>
        <dt>계좌번호</dt>
        <dd>207-004-0371-06</dd>
      </dl>
      <el-divider/>
      <dl>
        <dt>전자계약 유무</dt>
        <dd><el-switch v-model="value" /></dd>
      </dl>
    </div>

    <div class="bottom">
      <div class="write-date">
        수정일시: 2022년 09월 19일 14시 52분
      </div>
      <div class="btns">
        <el-button>전자계약독촉</el-button>
        <el-button>반복요청</el-button>
        <el-button>링크복사</el-button>
        <el-button>문자</el-button>
        <el-button class="complete">완료</el-button>
      </div>
    </div>

    <div class="m-bottom">
      <div class="btns">
        <el-button class="complete">완료</el-button>
        <el-popover
          placement="top-start"
          trigger="click"
        >
          <div class="col-btns">
            <el-button text>전자계약독촉</el-button>
            <el-button text>반복요청</el-button>
            <el-button text>링크복사</el-button>
            <el-button text>문자전송</el-button>
          </div>
          
          <template #reference>
            <el-button class="more">
              <span class="material-icons-outlined">more_vert</span>
            </el-button>
          </template>
        </el-popover>
      </div>
      
      <div class="rewrite-date">
        수정일시: 2022년 09월 19일 12시 34분
      </div>


    </div>

  </div>
</template>

<script lang="ts" setup>
const value = ref(false)
</script>

<style lang="scss" scoped>
.card{
  position: relative;
  display:flex;
  flex-direction: column;
  padding:20px;
  border-radius:10px;
  height:100%;
  cursor: pointer;

  &:hover{
    border-color:#c2c2c2;
  }
 
  .el-divider{
    margin:20px 0;
    border-color:#e8e8e8;
  }

  .top{
    .row{
      display:flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom:20px;
    }

    .service{
      display:flex;
      align-items: center;
      gap:5px;
      span{
        display:flex;
        align-items: center;
        justify-content: center;
        height:20px;
        font-size:11px;
        padding:0 5px;
        border-radius:3px;
        line-height:1;
        color:#fff;
      }
      span.kiosk{
        background:#E11B51;
      }
      span.smartpay{
        background:#08AAA4;
      }
    }

    .request-date{
      color:#797979;
      font-size:12px;
    }

    .shop-name{
      font-size:18px;
      font-weight:bold;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
    }    
  }

  .middle{
    .member{
      dd{
        display:flex;
        align-items: center;
        gap:5px;
        span{
          display:flex;
          align-items: center;
          height:20px;
          background:#e2e2e2;
          padding:0 5px;
          border-radius:3px;
          color:#aaa;
          line-height:1;
        }
        span.on{
          background:#0055FF;
          color:#fff;
        }
      }
    }
    dl{
      display:flex;
      align-items: center;
      margin-bottom:10px;

      dt{
        font-size:12px;
        color:#898989;
        width:90px;
      }
      dd{
        flex:1;
        font-size:14px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
      }
    }
  }

  .bottom{
    .write-date{
      text-align:right;
      font-size:12px;
      margin-bottom:10px;
      color:#898989;
    }
    .btns{
      display:flex;
      align-items: center;
      justify-content: flex-end;
      gap:5px;

      .el-button{
        padding:0 10px;
        margin:0;
      }
      .el-button.complete{
        color:#fff;
        border:0;
        background:#292929;
      }
    }
    
    
  }
}

.m-bottom{
  display:none;
  margin-top:10px;
  .btns{
    display:flex;
    align-items: center;
    gap:10px;

    .el-button.complete{
      width:100%;
      height:45px;
      margin:0;
      background:#292929;
      color:#fff;
    }
  
    .el-button.more{
      width:45px;
      height:45px;
      margin:0;
    }
  }

   
  
  .rewrite-date{
    text-align:center;
    font-size:12px;
    margin-top:10px;
    color:#898989;
  }
}

.el-popover.el-popper{
  .col-btns{
    border-radius:3px;
    .el-button{
      font-size:14px;
      width:100%;
      border:0;
      height:40px;
      padding:0 10px;
      margin:0;

    }
  } 
}


@media (max-width:1200px){
  .card{
    padding:15px;
    .bottom{
      display:none;
    }
    .m-bottom{
      display:block;
    }
  }
}
</style>