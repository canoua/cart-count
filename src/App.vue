<template>
  <nav class="menu">
    <div @click="menuLinkIsActive" class="burger">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <RouterLink class="menu__link" to="/">
      <img height="50px" src='/return.png' alt="refund" />
      <span :class="{ 'open': menuLinkActive }" class="menu__link__text">Выдача</span>
    </RouterLink>
    <RouterLink class="menu__link" to="/refundview">
      <img height="50px" src='/refund.png' alt="refund" />
      <span :class="{ 'open': menuLinkActive }" class="menu__link__text">Возврат</span>
    </RouterLink>
    <RouterLink class="menu__link" to="/adddatabaseview">
      <img height="50px" src='/add.png' alt="add" />
      <span :class="{ 'open': menuLinkActive }" class="menu__link__text">Добавить картридж</span>
    </RouterLink>
    <RouterLink class="menu__link" to="/cartlistallview">
      <img height="50px" src='/db.png' alt="db" />
      <span :class="{ 'open': menuLinkActive }" class="menu__link__text">БД</span>
    </RouterLink>
    <RouterLink class="menu__link" to="/cartlistview">
      <img height="50px" src='/list.png' alt="list" />
      <span :class="{ 'open': menuLinkActive }" class="menu__link__text">Ожидание заправки</span>
    </RouterLink>
    <RouterLink class="menu__link" to="/refillinglistview">
      <img height="50px" src='/refilling.png' alt="refilling" />
      <span :class="{ 'open': menuLinkActive }" class="menu__link__text">Заправки</span>
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
        menuLinkActive: false
      }
    },

    methods: {
      menuLinkIsActive() {
        this.menuLinkActive = !this.menuLinkActive
      }
    }
  }
  
</script>

<style scoped>
  .menu {
    position: relative;
    transition: all .5s;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 17px;
    color: #000; 
    width: 100%;
  }

  .menu__link__text {
    opacity: 0;
    width: 0;
  }

  .menu__link__text.open {
    opacity: 1;
    width: auto;
    margin-left: 15px;
    transition: all .3s;
  }

  .burger {
    width: 45px;
    background: #fff;
    cursor: pointer;
    position: absolute;
    top: 20px;
    left: 30px;
  }

  .burger > span {
    display: block;
    width: 100%;
    height: 4px;
    background-color: #0066FF;
    margin-bottom: 10px;
    border-radius: 10px;
  }
</style>
