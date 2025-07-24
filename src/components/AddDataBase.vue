<template>
  <div class="section">
    <form class="form" action="#">
      <h2>Добавить картридж</h2>
      <div class="form__model">
        <label for="model">Модель картриджа</label>
        <select name="model" id="model" >
          <template v-for="model in models">
            <option :value="model.id">{{ model.title }}</option>
          </template>
        </select>
      </div>
      <Input placeholder="Штрихкод"/>
      <input class="form-btn" type="submit" value="добавить">
    </form>
  </div>
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
        ],
      }
    },
    components: {
      Input
    }
  }
</script>

<style scoped>
 
</style>