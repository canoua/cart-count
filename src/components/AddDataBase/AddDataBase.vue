<template>
  <h2>Добавить картридж в базу данных</h2>
  <form action="#">
    <div class="home-form__model">
      <label for="model">Модель картриджа</label>
      <select name="model" id="model" >
        <template v-for="model in models">
          <option :value="model.id">{{ model.title }}</option>
        </template>
      </select>
    </div>
    <button class="home-btn" type="submit">добавить</button>
  </form>
</template>

<script>
  export default { 
    data() {
      return
    }
  }
  
</script>