<template>
  <div>
    <a href="#/">HomeView</a> |
    <a href="#/cartlistview">Список картриджей, ожидающих заправку</a> |
    <a href="#/adddatabaseview">Добавить картридж в БД</a> |
    <a href="#/refillinglistview">Список заправок</a> |
    <a href="#/cartlistallview">Список ВСЕХ картриджей</a> |
    <component :is="currentView" />
  </div>
</template>

<script setup>
  import HomeView from './views/HomeView.vue';
  import AddDataBaseView from './views/AddDataBaseView.vue';
  import CartListView from './views/CartListView.vue';
  import RefillingListView from './views/RefillingListView.vue';
  import CartListAllView from './views/CartListAllView.vue';
  import { ref, computed } from 'vue'
   const routes = {
    '/': HomeView,
    '/adddatabaseview': AddDataBaseView,
    '/cartlistview': CartListView,
    '/refillinglistview': RefillingListView,
    '/cartlistallview': CartListAllView
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

</style>
