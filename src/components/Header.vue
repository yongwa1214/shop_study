<script setup>
import { useAccountStore } from '@/stores/account';
import { logout ,login} from '@/services/accountService'
//로그아웃




const account = useAccountStore();

const logoutAccount = async ()=>{

  const res = await logout();
  console.log('res:',res);
  if(res === undefined || res.status != 200) {
    alert('로그아웃 실패')
    return;
  } 
  account.setLoggedIn(false);
    
}

const name = async () =>{
  const res = await login();
}

</script>

<template>
   <header>
    <div class="navbar navbar-dark bg-dark text-white shadow-sm">
      <div class="container">
        <router-link to="/" class="navbar-brand">
          <strong>Gallery</strong>
        </router-link>
        <div class="menus d-flex gap-3">
          <template v-if="account.state.loggedIn">
            <span> </span>
            <a @click="logoutAccount()">로그아웃</a>
            <router-link to="/orders">주문내역</router-link>
            <router-link to="/cart">장바구니</router-link>
          </template>
          <template v-else>
            <router-link to="/login">로그인</router-link>
            <router-link to="/join">회원가입</router-link>
          </template>
        </div>
      </div>
    </div>
  </header>

</template>

<style lang="scss" scoped>
header{
  .menus{
    a{
      color: #fafafa;
      text-decoration: none;
      cursor: pointer;
    }
  }
}

</style>