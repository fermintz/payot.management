<template>
  <div class="container">
    <header>
      <h2>
        신청목록
      </h2>
      <div class="btns">
        <el-button @click="visible = true">
          <span class="material-icons">add</span>
          <label>임의등록</label>
        </el-button>
      </div>
    </header>
    
    <div class="contents">
      <div class="search-wrap box">
        <div class="state-text">
          <span class="material-icons">check_circle</span>
          <label>총 <b>5건</b>의 신청이 있습니다.</label>
        </div>
        <div class="search">
          <input type="search" placeholder="매장명검색"/>
          <el-button text>
            <span class="material-icons">search</span>
          </el-button>
        </div>
      </div>

      <div class="cards">
        <div class="no-data">
          등록된 신청이 없습니다.
        </div>
        <el-row gutter="20">
          <el-col :lg="12" :md="24" v-for="item in 5" :key="item">
            <UserCard />
          </el-col>           
        </el-row>
        
      </div>
    </div>

    <DialogAddUser v-model="visible" />
  </div>
</template>

<script lang="ts" setup>

const visible = ref(false)

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

  h2{
    font-size:24px;
  }
  .btns{
    display:flex;
    align-items: center;
    gap:10px;
    .el-button{
      height:40px;
      span{
        font-size:20px;
        margin-right:5px;
        color:#0055FF;
      }
    }
  }
}

.no-data{
  padding:20px;
  background:#eaeaea;
  border-radius:10px;
  margin-bottom:20px;
}

.contents{
  padding:30px;
  height:100%;
}

.search-wrap{
  display:flex;
  justify-content: space-between;
  padding:20px;
  margin-bottom:20px; 
  border-radius:10px;
  .state-text{
    display:flex;
    align-items: center;
    span{
      margin-right:10px;
      color:#E11B51;
    }
    label{
      font-size:18px;
      line-height:1;
      font-weight:bold;

      b{
        color:#E11B51
      }
    }
  }

  .search{
    border:1px solid #c2c2c2;
    border-radius:5px;
    overflow: hidden;
  
    input{
      height:40px;
      outline: none;
      border:0;
      padding:0 10px;
      background:transparent;
    }
    .el-button{
      height:40px;
      width:40px;
    }
  }
}

.el-col{
  margin-bottom:20px;
}

@media (max-width:1200px) {

  .container{
    .contents{
      padding:15px;
    }
  }

  header{
    padding:0 20px;
    height:56px;
    background:#292929;
    h2{
      font-size:18px;
      color:#fff;
    }
    .btns{
      .el-button{
        height:30px;
        padding:0 10px;
        span{
          font-size:18px;
        }
        label{
          font-size:12px;
        }
      }
    }
  }

  .search-wrap{
    flex-direction: column;
    .state-text{
      justify-content: center;
      margin-bottom:15px;
      
    }
    .search{
      display:flex;
      input{
        width:100%;
      }
    }
  }

  
}
</style>