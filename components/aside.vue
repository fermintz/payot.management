<template>
  <aside>
    <div class="logo">
      <img src="~/assets/img/payot_logo.png"/>
      <label>PAYOT</label>
    </div>

    <div class="counter">
      <strong>21</strong>
      <span>총 잔여 신청건</span>
    </div>

    <el-divider></el-divider>

    <nav>
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
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
aside{
  top:0;
  left:0;
  position: fixed;
  width:230px;
  border-right:1px solid #e2e2e2;
  height:100%;
  background:#fff;
  padding:0 20px;

  .logo{
    display:flex;
    align-items: center;
    justify-content: center;
    height:90px;
    border-bottom:1px solid #e2e2e2;

    img{
      height:45px;
      cursor: pointer;
    }
    label{
      font-size:24px;
      margin-left:10px;
      cursor: pointer;
    }
  }

  .counter{
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top:30px;
    strong{
      font-size:40px;
      font-weight:800;
      line-height:1;
      color:#E11B51;
    }
    span{
      margin-top:10px;
      color:#898989;
      font-size:14px;
    }
  }

  .el-divider{
    margin:30px 0;
  }

  nav{
    ul{
      display:flex;
      flex-direction: column;
      gap:24px;

      li{
        display:flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        label{
          font-size:15px;
          cursor: pointer;
        }
        span{
          display:flex;
          align-items: center;
          justify-content: center;
          width:18px;
          height:18px;
          background:#f2f2f7;
          margin-left:8px;
          border-radius:3px;
          font-size:12px;
          font-weight:500;
          line-height:1;
          color:#292929;
        }
      }
    }
  }
}

@media (max-width:1200px){
  aside{
    display:none;
  }
}
</style>