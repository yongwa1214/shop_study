import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'


export const useAccountStore = defineStore("account",() => {
  const state = reactive({
    checked: false,
    loggedIn: false
  });

  const setChecked = val => state.checked = val;
  const setLoggedIn = val => state.loggedIn = val;

  return {state, setChecked, setLoggedIn}
});