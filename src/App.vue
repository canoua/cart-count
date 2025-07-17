<template>
  <nav class="menu">
    <RouterLink class="menu__link" to="/">Выдача</RouterLink>
    <RouterLink class="menu__link" to="/refundview">Возврат</RouterLink>
    <RouterLink class="menu__link" to="/adddatabaseview">Добавить в БД</RouterLink>
    <RouterLink class="menu__link" to="/cartlistallview">База данных</RouterLink>
    <RouterLink class="menu__link" to="/cartlistview">Картриджи,<br> ожидающие заправку</RouterLink>
    <RouterLink class="menu__link" to="/refillinglistview">Заправки</RouterLink>
  </nav>
  <RouterView />
</template>

<script setup>
  import { RouterView } from 'vue-router';
</script>

<style scoped>
  .menu {
    transition: all .7s;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0;
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    padding: 20px;
    box-shadow: 0px 2px 39px 13px rgba(205, 199, 255, 0.19);
  }

  .menu__link {
    text-decoration: none;
    padding: 10px;
    display: inline-block;
    font-size: 17px;
    color: #000; 
  }
</style>
