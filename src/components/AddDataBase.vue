<template>
  <div class="section">
    <form class="form" action="#">
      <h2>Добавить картридж</h2>
      <Input placeholder="Модель картриджа"/>
      <Input placeholder="Штрихкод"/>
      <Input placeholder="Ячейка"/>
      <input class="form-btn" type="submit" value="добавить">
    </form>
  </div>
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
    }
  }
</script>

<style scoped>
 
</style>