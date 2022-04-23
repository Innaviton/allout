import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import lots from '../views/lots.vue'
import createLot from '../views/CreateLot.vue'
import profile from '../views/Profile.vue'
import lot from '../views/lot.vue'
import register from '../views/Register.vue'
import login from '../views/Login.vue'
import header from '../components/header.vue'
import confirmlot from '../views/confirm_your_lot.vue'
import description_lot from '../views/description_lot.vue'
import favorites_active_lot from '../views/favorites_active_lot.vue'
import favorites_completed_lot from '../views/favorites_completed_lot.vue'
import favorites_seller from '../views/favorites_seller.vue'
import lot_check from '../views/lot_check.vue'
import lot_made from '../views/lot_made.vue'
import lot_result from '../views/lot_result.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/header',
    name: 'header',
    component: header
  },
  {
    path: '/lots',
    name: 'lots',
    component: lots
  },
  {
    path: '/create',
    name: 'createLot',
    component: createLot
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/lot',
    name: 'lot',
    component: lot
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/LotConfirm',
    name: 'confitm_your_lot',
    component: confirmlot
  },
  {
    path: '/LotDescription',
    name: 'description_lot',
    component: description_lot
  },
  {
    path: '/FavoriteActiveLot',
    name: 'favorite_active_lot',
    component: favorites_active_lot
  },
  {
    path: '/FavoriteComplitLot',
    name: 'Favorite_comand_lot',
    component: favorites_completed_lot
  },
  {
    path: '/FavoriteSeller',
    name: 'Favorite_seller',
    component: favorites_seller
  },
  {
    path: '/lotCheck',
    name: 'Lot_check',
    component: lot_check
  },
  {
    path: '/lotMade',
    name: 'Lot_made',
    component: lot_made
  },
  {
    path: '/lotResult',
    name: 'Lot_result',
    component: lot_result
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
