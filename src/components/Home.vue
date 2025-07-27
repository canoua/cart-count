<template>
  <section class="section">
    <form class="form form-home" action="#">
      <h1>Выдача клиенту</h1>
      <div class="form__model">
        <label for="model">Модель картриджа</label>
        <select name="model" id="model">
          <template v-for="model in models">
            <option :value="model.id">{{ model.title }}</option>
          </template>
        </select>
      </div>
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
        models: [
          {id: 1, title: '728'},
          {id: 2, title: '725'},
          {id: 3, title: '703'},
        ]
      }
    },
    components: {
      Input
    },
  }
</script>

<style scoped>
 
</style>