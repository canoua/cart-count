<template>
  <nav class="menu">
    <div @click="burgerClick" :class="{'active': burgerAnimation}" class="burger"></div>
    <RouterLink class="menu__link" to="/">
      <img height="100%" src='/return.png' alt="refund" />
      <span :class="{ 'open': menuLinkActive }" class="menu__link__text">Выдача</span>
    </RouterLink>
    <RouterLink class="menu__link" to="/refundview">
      <img height="100%" src='/refund.png' alt="refund" />
      <span :class="{ 'open': menuLinkActive }" class="menu__link__text">Возврат</span>
    </RouterLink>
    <RouterLink class="menu__link" to="/adddatabaseview">
      <img height="100%" src='/add.png' alt="add" />
      <span :class="{ 'open': menuLinkActive }" class="menu__link__text">Добавить картридж</span>
    </RouterLink>
    <RouterLink class="menu__link" to="/cartlistallview">
      <img height="100%" src='/db.png' alt="db" />
      <span :class="{ 'open': menuLinkActive }" class="menu__link__text">БД</span>
    </RouterLink>
    <RouterLink class="menu__link" to="/cartlistview">
      <img height="100%" src='/list.png' alt="list" />
      <span :class="{ 'open': menuLinkActive }" class="menu__link__text">Ожидание заправки</span>
    </RouterLink>
    <RouterLink class="menu__link" to="/refillinglistview">
      <img height="100%" src='/refilling.png' alt="refilling" />
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
        menuLinkActive: false,
        burgerAnimation: false
      }
    },

    methods: {
      burgerClick() {
        this.menuLinkIsActive()
        this.burgerAnimationClick()
      },
      menuLinkIsActive() {
        this.menuLinkActive = !this.menuLinkActive
      },
      burgerAnimationClick() {
        this.burgerAnimation = !this.burgerAnimation;
      }
    }
  }
  
</script>

<style scoped>
  .menu {
    position: relative;
    transition: width .5s;
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

  .burger {
    position: relative;
    border: none;
    background: transparent;
    width: 40px;
    height: 26px;
  }
  .burger::before,
  .burger::after {
    content: '';
    left: 0;
    position: absolute;
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 10px;
    background-color: #0066FF;
  }
  .burger::before {
    top: 0;
    box-shadow: 0 11px 0 #0066FF;;
  }
  .burger::after {
    bottom: 0;
  }

  .menu__link {
    text-decoration: none;
    padding: 10px;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 17px;
    color: #000; 
    width: 100%;
    transition: width .5s;
    height: 50px;
  }

  .menu__link__text {
    opacity: 0;
    width: 0;
  }

  .menu__link__text.open {
    opacity: 1;
    width: auto;
    margin-left: 15px;
    transition: width .5s;
  }

  .burger {
    width: 30px;
    background: #fff;
    cursor: pointer;
    position: absolute;
    top: 20px;
    left: 30px;
  }

  .burger::before {
    transition: box-shadow .3s .15s, top .3s .15s, transform .3s;
  }
  .burger::after {
    transition: bottom .3s .15s, transform .3s;
  }
  .burger.active::before {
    top: 11px;
    transform: rotate(45deg);
    box-shadow: 0 6px 0 rgba(0,0,0,0);
    transition: box-shadow .15s, top .3s, transform .3s .15s;
  }
  .burger.active::after {
    bottom: 11px;
    transform: rotate(-45deg);
    transition: bottom .3s, transform .3s .15s;
  }
</style>
