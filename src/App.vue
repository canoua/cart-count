<template>
  <button class="btn-menu" @click="menuIsActive">меню</button>
  <nav class="menu" :class="{ 'open': menuActive }">
    <button @click="menuIsActive" class="btn-close">x</button>
    <RouterLink class="menu__link menu__link_active" to="/">Выдача</RouterLink>
    <RouterLink class="menu__link" to="/refundview"><= Возврат</RouterLink>
    <RouterLink class="menu__link" to="/adddatabaseview">+ Добавить картридж</RouterLink>
    <RouterLink class="menu__link" to="/cartlistallview">База данных</RouterLink>
    <RouterLink class="menu__link" to="/cartlistview">Картриджи,<br> ожидающие заправку</RouterLink>
    <RouterLink class="menu__link" to="/refillinglistview">Заправки</RouterLink>
  </nav>
  <Transition>
    <RouterView />
  </Transition>
</template>

<script>
  import { RouterView } from 'vue-router';

  export default {
    data() {
      return {
        menuActive: false
      }
    },

    methods: {
      menuIsActive() {
        this.menuActive = !this.menuActive
      }
    }
  }
  
</script>

<style scoped>
  .btn-menu {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  .btn-close {
    background-color: red;
    display: inline-block;
    width: 40px;
    position: absolute;
    right: 10px;
    top: 10px;
  }

  .menu {
    position: relative;
    transition: .5s;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0;
    position: absolute;
    left: -100%;
    top: 0;
    height: 100vh;
    padding: 20px;
    box-shadow: 0px 2px 39px 13px rgba(205, 199, 255, 0.19);
  }

  .menu.open {
    left: 0;
  }

  .menu__link {
    text-decoration: none;
    padding: 10px;
    display: inline-block;
    font-size: 17px;
    color: #000; 
  }

  .menu__link_active {
    background-color: blue;
    color: #fff;
  }
</style>
