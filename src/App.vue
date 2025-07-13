<template>
  <div class="menu">
    <a class="menu__link" href="#/">Выдача</a> 
    <a class="menu__link" href="#/refundview">Возврат</a> 
    <a class="menu__link" href="#/adddatabaseview">Добавить картридж в БД</a> 
    <a class="menu__link" href="#/cartlistallview">База данных</a> 
    <a class="menu__link" href="#/cartlistview">Картриджи, ожидающие заправку</a> 
    <a class="menu__link" href="#/refillinglistview">Заправки</a> 
  </div>
   <component :is="currentView" />
</template>

<script setup>
  import HomeView from './views/HomeView.vue';
  import AddDataBaseView from './views/AddDataBaseView.vue';
  import CartListView from './views/CartListView.vue';
  import RefillingListView from './views/RefillingListView.vue';
  import CartListAllView from './views/CartListAllView.vue';
  import RefundView from './views/RefundView.vue';
  import { ref, computed } from 'vue'
   const routes = {
    '/': HomeView,
    '/adddatabaseview': AddDataBaseView,
    '/cartlistview': CartListView,
    '/refillinglistview': RefillingListView,
    '/cartlistallview': CartListAllView,
    '/refundview': RefundView
  }

  const currentPath = ref(window.location.hash)

  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash
  })

  const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/'] || NotFound
  })
</script>

<style scoped>
  .menu {
    background-color: #0066FF;
    display: flex;
    justify-content: center;
  }

  .menu__link {
    color: #fff;
    text-decoration: none;
    padding: 10px;
    display: inline-block;
    font-size: 20px;
  }
</style>
