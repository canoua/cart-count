<template>
  <div class="section">
    <div class="form">
      <h2>Возврат</h2>
      <Input placeholder="Штрихкод"/>
      <input class="form-btn" type="submit" value="возврат">
    </div>
  </div>
</template>

<script>
  import Input from './base/Input.vue';
  export default{
    components: {
      Input
    }
  }
</script>

<style scoped>
 
</style>