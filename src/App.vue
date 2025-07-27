<template>
  <!-- <button class="btn-menu" @click="menuIsActive">меню</button> -->
  <!-- <nav class="menu" :class="{ 'open': menuActive }">
    <button @click="menuIsActive" class="btn-close">x</button>
    <RouterLink class="menu__link menu__link_active" to="/"><img width="30px" style="margin-right: 15px;" src='/return.png' alt="refund" />Выдача</RouterLink>
    <RouterLink class="menu__link" to="/refundview"><img width="30px" style="margin-right: 15px;" src='/refund.png' alt="refund" />Возврат</RouterLink>
    <RouterLink class="menu__link" to="/adddatabaseview"><img width="30px" style="margin-right: 15px;" src='/add.png' alt="add" /> Добавить картридж</RouterLink>
    <RouterLink class="menu__link" to="/cartlistallview"><img width="30px" style="margin-right: 15px;" src='/db.png' alt="db" />База данных</RouterLink>
    <RouterLink class="menu__link" to="/cartlistview"><img width="30px" style="margin-right: 15px;" src='/list.png' alt="list" />Ожидание заправки</RouterLink>
    <RouterLink class="menu__link" to="/refillinglistview"><img width="30px" style="margin-right: 15px;" src='/refilling.png' alt="refilling" />Заправки</RouterLink>
  </nav> -->
  <!-- <button class="btn-menu" @click="menuIsActive">меню</button> -->
  <nav class="menu" :class="{ 'open': menuActive }">
    <button @click="menuIsActive" class="btn-close">x</button>
    <RouterLink class="menu__link menu__link_active" to="/">
      <img width="30px" src='/return.png' alt="refund" />
    </RouterLink>
    <RouterLink class="menu__link" to="/refundview">
      <img width="30px" src='/refund.png' alt="refund" />
    </RouterLink>
    <RouterLink class="menu__link" to="/adddatabaseview">
      <img width="30px" src='/add.png' alt="add" />
    </RouterLink>
    <RouterLink class="menu__link" to="/cartlistallview">
      <img width="30px" src='/db.png' alt="db" />
    </RouterLink>
    <RouterLink class="menu__link" to="/cartlistview">
      <img width="30px" src='/list.png' alt="list" />
    </RouterLink>
    <RouterLink class="menu__link" to="/refillinglistview">
      <img width="30px" src='/refilling.png' alt="refilling" />
    </RouterLink>
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
        // menuActive: false
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
    left: 0;
    /* left: -100%; */
    top: 0;
    height: 100vh;
    padding: 20px;
    box-shadow: 0px 2px 39px 13px rgba(205, 199, 255, 0.19);
  }

  /* .menu.open {
    left: 0;
  } */

  .menu__link {
    text-decoration: none;
    padding: 10px;
    display: inline-flex;
    align-items: center;
    font-size: 17px;
    color: #000; 
  }

  /* .menu__link_active {
    background-color: blue;
    color: #fff;
  } */
</style>
