
<script setup>
import {ref} from 'vue';
// 创建字符串
const str =ref('12345')
// 在script中使用变量
console.log(str.value)
console.log(str)
// 这样子返回的是一个obj对象
const value=ref('')
// 监听事件函数
function test(){
  console.log(str.value)
}
// 通过单选项进行双向绑定
const abool=ref(true)
function switchBool(){
  console.log(abool.value)
  abool.value=!abool.value
}
const list=ref(
  [
    {inCompleted:false,
      text:"eating"
    },
    {inCompleted:false,
    text:"sleeping"
    },
    {inCompleted:false,
      text:"joking"
    },
  ]
)
function add(){
  // console.log(value.value)
  list.value.push({
    isCompleted:false,
    text:value.value 
  })
  value.value=''
}

function del(index){
  list.value.splice(index,1);
}
</script>
<template>
  <div class="todo-app">
    <div class="title">Todo App {{str}}</div>
    <!-- 在template中可以直接使用str变量 -->

    <div class="todo-form">
      <input
        v-model="value" 
        type="text"
        class="todo-input"
        placeholder="Add a todo"
      />
      <!-- 在input中获取输入的数值，并且实时保存到value变量中，动态绑定v-model与value -->
      <div @click="test" class="todo-button">Add Todo</div>
      <!-- bidirectional binding双向绑定  -->
      <div @mouseenter="test" class="todo-button">Test</div>
      <div @click="switchBool" class="todo-button">Switch</div>

    </div>
    <div v-for="(item,index) in list" :class="[item.isCompleted?'completed':'item']">
      <!-- 不同的条件下选择不同的CSS style类名 -->
      <!-- index代表数组下标 -->
      <div>
        <!-- <input v-model="abool" type="checkbox" /> -->
        <input v-model="item.isCompleted" type="checkbox" />
        <span class="name">{{ item.text }}</span>
        <!-- item here refers to key-value pair in the dict list -->
      </div>
      <div @click="del"  class="del">del</div>

    </div>

  </div>
</template>
<!-- 主要的操作主要在Script(js)和template(html)4.17脑袋绕晕了，明天4.18继续再清一清 -->
<style scoped>
.todo-app {
  box-sizing: border-box;
  margin-top: 40px;
  margin-left: 1%;
  padding-top: 30px;
  width: 98%;
  height: 500px;
  background: #ffffff;
  border-radius: 5px;
}

.title {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
}

.todo-form {
  display: flex;
  margin: 20px 0 30px 20px;
}

.todo-button {
  width: 100px;
  height: 52px;
  border-radius: 0 20px 20px 0;

  text-align: center;
  background: linear-gradient(
    to right,
    rgb(113, 65, 168),
    rgba(44, 114, 251, 1)
  );
  color: #fff;
  line-height: 52px;
  cursor: pointer;
  font-size: 14px;
  user-select: none;
}

.todo-input {
  padding: 0px 15px 0px 15px;
  border-radius: 20px 0 0 20px;
  border: 1px solid #dfe1e5;
  outline: none;
  width: 60%;
  height: 50px;
}

.item {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 50px;
  margin: 8px auto;
  padding: 16px;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 20px;
}

.del {
  color: red;
}

.completed {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 50px;
  margin: 8px auto;
  padding: 16px;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 20px;
  text-decoration: line-through;
  opacity: 0.4;
}
</style>
<!-- script for js; template for html; style for css -->