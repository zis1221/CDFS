import Vue from 'vue'
import VueRouter from 'vue-router'
import Enroll from '../components/Enroll.vue'
import Account from '@/components/Account.vue'
import SearchBox from '@/components/SearchBox.vue'
// import { component } from 'vue/types/umd'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'enroll1',
    component: Login,
    children: [
      {
        path: '/',
        component: Enroll
      }
    ]
  },
  {
    path: '/acc',
    name: 'account',
    component: Login,
    children: [
      {
        path: 'login',
        component: Account
      }
    ]
  },
  {
    path: '/enr',
    name: 'enroll',
    component: Login,
    children: [
      {
        path: 'login',
        component: Enroll
      }
    ]
  },
  {
    path: '/reg',
    name: 'account',
    component: Account
  },
  {
    path: '/n',
    component: SearchBox
  },]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
