import {defineStore} from 'pinia';
import {ref} from 'vue';

export const useUserStore = defineStore('user', function () {
  const user = ref();

  function refresh() {
    return true
  }

  return {
    user,
    refresh,
  }
});
