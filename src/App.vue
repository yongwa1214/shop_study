<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { watch, onMounted} from 'vue';
import { useRoute } from 'vue-router';
import{ check } from '@/services/accountService';
import { useAccountStore } from './stores/account';

const route = useRoute();
const account = useAccountStore();

//로그인 여부 확인 
const checkAccount = async () => {
  console.log('로그인 체크')

  const res = await check();
  if(res === null || res.status != 200) {
    account.setChecked(false);
    return;
    } 
    account.setChecked(true);
    account.setLoggedIn(res.data > 0);  
}

onMounted(() =>{
  checkAccount();
})

watch(() => route.path, ()=> {
  checkAccount();
});

</script>
<template>
  <template v-if="account.state.checked">
      <Header />
      <router-view></router-view>
      <Footer />
  </template>
  <template v-else>
    <h1>502 Bad Gateway</h1>
    <hr>
    <span>sorry sorry</span>
  </template>
</template>

<style scoped>
h1{
  display: flex;
  font-size: 50px;
  font-weight: 900;
  justify-content: center;
  margin: 20px 0 30px 0;
}
span{
  display: flex;
  justify-content: center;
  font-size: 25px;
}
hr{
  margin:0;
}

</style>