import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ResetPassword from '../views/ResetPassword.vue'
import Reset from '../views/Reset.vue'
import UserInfo from '../views/UserInfo.vue'
import LandingPage from '../views/LandingPage.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/register', name: 'register', component: Register },
  { path: '/login', name: 'login', component: Login },
  { path: '/ResetPassword', name: 'ResetPassword', component: ResetPassword },
  { path: '/reset', name: 'Reset', component: Reset },
  { path: '/userinfo', name: 'UserInfo', component: UserInfo },
  { path: '/landingpage', name: 'LandingPage', component: LandingPage },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
