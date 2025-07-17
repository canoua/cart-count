import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import AddDataBaseView from "@/views/AddDataBaseView.vue"
import CartListAllView from "@/views/CartListAllView.vue"
import CartListView from "@/views/CartListView.vue"
import RefillingListView from "@/views/RefillingListView.vue"
import RefundView from "@/views/RefundView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homeview',
      component: HomeView
    },
    {
      path: '/adddatabaseview',
      name: 'adddatabaseview',
      component: AddDataBaseView
    },
    {
      path: '/cartlistallview',
      name: 'cartlistallview',
      component: CartListAllView
    },
    {
      path: '/cartlistview',
      name: 'cartlistview',
      component: CartListView
    },
    {
      path: '/refillinglistview',
      name: 'refillinglistview',
      component: RefillingListView
    },
    {
      path: '/refundview',
      name: 'refundview',
      component: RefundView
    }
  ]
})

export default router