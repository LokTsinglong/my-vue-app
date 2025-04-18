<script setup>
    import { defineProps,defineEmits } from 'vue';
    const props = defineProps(['text'])
    const emit =defineEmits(['ok'])
    function send(){
        emit('ok','hello')
        // ok事件发生的时候，带了一个参数hello
    }
</script>

<template>
    <div @click='send' class="button">{{ props.text }}</div>
    <!-- 子组件向父组件传输 -->
</template>

<style scoped>
.button{
    margin:100px 0 0 200px;
    width: 100px;
    height:50px;
    line-height: 50px;
    text-align:center;
    background-color: antiquewhite;
    border-radius: 10px;
}
</style> 