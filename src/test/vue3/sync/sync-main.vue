<template>
  <q-toggle v-model="visible"/>
  <!-- 以sync模式传入visible，当前父组件可操作visible使其显示或隐藏，子组件也可读写父组件的visible -->
  <sync-sub></sync-sub>
</template>

<script setup lang="ts">
import SyncSub from 'src/test/vue3/sync/sync-sub.vue';
import {ref} from 'vue';

const visible = ref(false)

// 这是父组件
</script>
