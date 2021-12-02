import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import LoginCadastro from "@/components/LoginCadastro.vue";
import Painel from "@/components/Painel.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Login',
    component: LoginCadastro
  },
  {
    path: '/painel',
    name: 'painel',
    component: Painel
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
