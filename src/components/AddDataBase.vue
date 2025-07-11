<template>
  <h2>Добавить картридж в базу данных</h2>
  <form class="form" action="#">
    <div class="home-form__model">
      <label for="model">Модель картриджа</label>
      <select name="model" id="model" >
        <template v-for="model in models">
          <option :value="model.id">{{ model.title }}</option>
        </template>
      </select>
      <input type="text" placeholder="штрихкод">
    </div>
    <button class="home-btn" type="submit">добавить</button>
  </form>
</template>

<script>
  export default { 
    
  }
</script>

<style scoped>
  .form {
    width: 600px;
  }
  .home-form__model {
    display: flex;
    flex-direction: column;
  }
</style>