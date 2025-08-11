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
      title: 'Выдача',
      icon: '/return.png',
      component: HomeView
    },
    {
      path: '/refundview',
      name: 'refundview',
      title: 'Возврат',
      icon: '/refund.png',
      component: RefundView
    },
    {
      path: '/adddatabaseview',
      name: 'adddatabaseview',
      title: 'Добавить в БД',
      icon: '/add.png',
      component: AddDataBaseView
    },
    {
      path: '/cartlistallview',
      name: 'cartlistallview',
      title: 'База данных',
      icon: '/db.png',
      component: CartListAllView
    },
    {
      path: '/cartlistview',
      name: 'cartlistview',
      title: 'Ожидание заправки',
      icon: '/list.png',
      component: CartListView
    },
    {
      path: '/refillinglistview',
      name: 'refillinglistview',
      title: 'Заправки',
      icon: '/refilling.png',
      component: RefillingListView
    }
  ]
})

export default router