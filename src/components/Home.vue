<template>
  <section class="section">
    <form class="form form-home" action="#">
      <h1>Выдача клиенту</h1>
      <input class="form-input" type="text" placeholder="штрихкод картриджа">
      <div class="home-form__model">
        <label for="model">Модель картриджа</label>
        <select name="model" id="model">
          <template v-for="model in models">
            <option :value="model.id">{{ model.title }}</option>
          </template>
        </select>
      </div>
      <input class="form-input" type="text" placeholder="номер кабинета">
      <input class="form-input" type="text" placeholder="инвентарный номер принтера/МФУ">
      <button class="form-btn" type="submit">выдать</button>
    </form>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        models: [
          {id: 1, title: '728'},
          {id: 2, title: '725'},
          {id: 3, title: '703'},
        ],
      }
    }
  }
</script>

<style scoped>
  .home-form__model {
    margin-bottom: 20px;
    width: 100%; 
    display: flex; 
    justify-content: space-between;
  }
</style>