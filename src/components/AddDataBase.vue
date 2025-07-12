<template>
  <div class="section">
    <form class="form" action="#">
      <h2>Добавить картридж в базу данных</h2>
      <div class="home-form__model">
        <label for="model">Модель картриджа</label>
        <select name="model" id="model" >
          <template v-for="model in models">
            <option :value="model.id">{{ model.title }}</option>
          </template>
        </select>
        <input class="form-input" type="text" placeholder="штрихкод">
      </div>
      <button class="home-btn" type="submit">добавить</button>
    </form>
  </div>
</template>

<script>
  export default { 
    
  }
</script>

<style scoped>
  .home-form__model {
    display: flex;
    flex-direction: column;
  }
</style>