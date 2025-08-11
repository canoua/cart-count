<template>
  <section class="section">
    <form class="form form-home" action="#">
      <h1>Выдача клиенту</h1>
      <Input placeholder="Модель картриджа"/>
      <Input placeholder="Штрихкод"/>
      <Input placeholder="номер кабинета"/>
      <Input placeholder="инвентарный номер принтера/МФУ"/>
      <input class="form-btn" type="submit" value="выдать">
    </form>
  </section>
</template>

<script>
  import Input from './base/Input.vue';

  export default {
    data() {
      return {
      }
    },
    components: {
      Input
    },
  }
</script>

<style scoped>
 
</style>