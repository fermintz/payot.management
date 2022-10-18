<template>
  <div class="login">
    <div class="box">
      
      <div class="left">
        <div class="logo">
          <img src="~/assets/img/payot_logo.png" />
          <label>PAYOT</label>
        </div>
      </div>
      <div class="right">
        <h2>LOGIN</h2>

        <div class="form">
          <dl>
            <dt>이메일</dt>
            <dd>
              <input type="email">
            </dd>
          </dl>
          <dl>
            <dt>비밀번호</dt>
            <dd>
              <input type="password">
            </dd>
          </dl>
          <el-button>
            로그인
          </el-button>
        </div>
      </div>
    </div> <!-- box -->
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  layout:'empty'
})
</script>

<style lang="scss" scoped>
.login{
  display:Flex;
  align-items: center;
  justify-content: center;
  height:100vh;
  overflow:hidden;
  background:#f2f2f7;


  .box{
    z-index:3;
    display:flex;
    width:100%;
    max-width:780px;
    min-height:450px;
    background:#fff;
    border:0;

    .left{
      width:300px;
      display:flex;
      align-items: center;
      justify-content: center;
      background:#0055FF;


      .logo{
        display:flex;
        flex-direction: column;
        align-items: center;
        padding:50px 0;

        img{
          display:block;
          height:60px;
        }

        label{
          display:block;
          text-align:center;
          letter-spacing: 5px;;
          color:#fff;
          margin-top:18px;
          font-size:12px;
        }
      }
    }

    .right{
      flex:1;
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h2{
        margin-bottom:30px;
        font-size:18px;
        font-weight:500;
        letter-spacing: 10px;
        color:#e2e2e2;
      }

      .form{
        display:flex;
        flex-direction: column;
        gap:15px;
        max-width:300px;
        width:100%;
        
        dl{
          dt{
            font-size:12px;
            margin-bottom:5px;
          }
          dd{
            input{
              width:100%;
              height:40px;
            }
          }
        }

        .el-button{
          width:100%;
          height:40px;
          background:#292929;
          color:#fff;
          border:0;
        }
      }
    }
  }
}

@media (max-width:772px) {
  .login{
    padding:20px;
    .box{  
      flex-direction: column;

      .left{
        width:100%;
        background:#fff;       
        
        .logo{
          flex-direction: row;
          align-items: center;

          img{
            height:40px;
            margin-right:15px;
          }
          label{
            font-size:18px;
            margin:0;
            color:#292929;
          }
        }
      }
      .right{
        padding:0px 30px 30px 30px;

        h2{
          display:none;
        }
     
        .form{
          max-width:100%;

          dl{
            dd{
              input{
                height:46px;
              }
            }
          }

          .el-button{
            height:46px;
          }
        }
       
      }
    }
  }
  
}
</style>