<script setup>
import { getItems, removeItem, clearAll } from '@/services/cartService';
import { reactive, onMounted } from 'vue';
import { computed } from 'vue';


// 반응형 상태 
const state = reactive({
  items:[]
});


const calc = computed(()=>{
  let sum = 0;
  state.items.forEach(item => {
    sum += item.price - item.price * item.discountPer / 100
  });
  return sum; 
})

//장바구니 상품 조회
const load = async()=>{
  const res = await getItems();
  console.log("res:", res)

  if(res === undefined || res.status !== 200){
    alert('통신실패')
    return;
  }
  state.items = res.data;
  
}

 onMounted(() => {
  load();
  
});
//장바구니 상품 삭제 
const remove = async (cartId) =>{
  
  const res = await removeItem(cartId);
  if(res.status !== 200 || res === undefined){
    return;
  } 
  //다시 리로딩
    load();
    
}

const clear = async () => {

  if(res.status !== 200 || res === undefined){
    return;
  } 
  
   else if(confirm('장바구니를 다 비우시겠습니까?')){
    const res = await clearAll();
    console.log("알이에스:", res)
  }
  
  state.items =[];
  
  
  
  
  

}
</script>

<template>
  <div class="cart">
    <div class="container">
      <template v-if="state.items.length">
        <ul class="items">
          <li v-for="i in state.items">
            <img :alt="`상품 사진 (${i.name})`" :src="`pic/item/${i.imgPath}`"/>
            <b class="name">{{ i.name }}</b>
            <span class="price">
              {{ (i.price - i.price *i.discountPer / 100).toLocaleString() }}원
            </span>
            <span class="remove float-end" @click="remove(i.id)" title="삭제">&times;</span>
          </li>
        </ul>
        <div class="sum">총 금액: {{ calc.toLocaleString() }}원</div>
        <div class="act d-flex justfiy-content-between">
          <button @click ="clear" class="btn btn-warning">장바구니 비우기</button>
          <router-link to="/order" class="btn btn-primary">주문하기</router-link>
        </div>
      </template>
      <div class="text-center py-5" v-else>장바구니가 비어있습니다.</div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.cart{
  .items{
    list-style: none;
    margin: 0;
    padding: 0;

    li{
    border: 1px solid #eee;
    margin-top: 25px;
    margin-bottom: 25px;
    }

    img{
      width: 150px;
      height: 150px;
    }

    .name{
      margin: 0 25px;
    }

    .price{
      max-lines: 25px;;
    }

    .remove{
      cursor: pointer;
      font-size: 30px;
      padding: 5px 15px;
    }
  }

  .act .btn {
  width: 300px;
  display: block;
  margin: 10px auto;
  padding: 20px 30px;
  font-size: 20px;
  }
}



</style>