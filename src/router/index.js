import { createRouter, createWebHistory } from 'vue-router';

// 定义路由规则
const routes = [
  { 
    path: '/',
    component: () => import('@/App.vue')  // 使用@别名指向src目录
  },
  { 
    path: '/copy',
    component: () => import('@/App copy.vue') 
  }
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;