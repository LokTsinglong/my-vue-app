
<script setup>
  import myButton from "./components/button.vue";
  function add(str){
    console.log(str)
    // 子组件往父组件的通信
    // 带上hello了
  }
</script>
<template>
  <!-- 监听ok 事件，触发add函数 -->
  <myButton @ok='add' text="我是奶龙"></myButton>
  <myButton text="我才是奶龙"></myButton>
  <myButton text="今夜星光闪闪"></myButton>
  <myButton text="爱你的心满满"></myButton>
</template>

<style scoped>

</style>
