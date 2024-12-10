import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import RoomView from '@/views/RoomView.vue'
import UserView from '@/views/UserView.vue'
import LoGin from '@/components/Admin/LoGin.vue'
import ServiceView from '@/views/ServiceView.vue'
import AdduserView from '@/views/AdduserView.vue'
import RoomDetail from '@/components/Admin/RoomDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/room',
      name: 'room',
      component: RoomView,
    },
    {
      path: '/useradmin',
      name: 'useradmin',
      component: UserView,
    },
    {
      path: '/service',
      name: 'service',
      component: ServiceView,
    },
    {
      path: '/adduser',
      name: 'adduser',
      component: AdduserView,
    },
    {
      path: '/roomdetail',
      name: 'roomdetail',
      component: RoomDetail,
    },
    {
      path: '/login',
      name: 'login',
      component: LoGin,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
