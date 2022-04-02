import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView,
    meta: {
      title: 'Portafolio Gerardo Cabrera'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
})

export default router
