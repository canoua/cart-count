<template>
  <h1>Выдача клиенту</h1>
  <section class="home-section">
    <form class="home-form" :class="form.class" action="#">
      <input class="home-input" type="text" placeholder="штрихкод картриджа">
      <div class="home-form__model">
        <label for="model">Модель картриджа</label>
        <select name="model" id="model" >
          <template v-for="model in models">
            <option :value="model.id">{{ model.title }}</option>
          </template>
        </select>
      </div>
      <!-- <input type="file"> -->
      <input class="home-input" type="text" placeholder="номер кабинета">
      <input class="home-input" type="text" placeholder="инвентарный номер принтера/МФУ">
      <p>{{ dateNow }}</p>
      <button class="home-btn" type="submit">выдать</button>
    </form>
    
  </section>
</template>

<script>
  const dateNow = new Date();
  export default {
    data() {
      return {
        form: {
          class: 'form'
        },
        dateNow: dateNow,
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
  input {
    margin-bottom: 20px;
  }
  .home-section {
    width: 100%; 
    height: 100vh; 
    display: flex; 
    justify-content: center; 
    align-items: center;
  }
  .home-form {
    width: 400px; 
    display: flex; 
    flex-direction: column;
    text-align: center;
    border: 1px solid #000;
    border-radius: 10px;
    padding: 50px;
  }
  .home-form__model {
    margin-bottom: 20px;
    width: 100%; 
    display: flex; 
    justify-content: space-between;
  }
  .home-input {
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
  }
  .home-btn {
    cursor: pointer;
    background: transparent;
    padding: 5px;
    width: 40%;
    margin: 0 auto;
    border: 1px solid #000;
    border-radius: 10px;
    margin-bottom: 10px;
  }
</style>