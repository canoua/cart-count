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
      <!-- <div class="input-wrapper"> -->
        <!-- <p :class="{'input-placeholder_active': inputActive}" class="input-placeholder">Штрихкод</p> -->
        <!-- <input @focus="placeholderToggle" v-on:blur="placeholderToggle" class="form-input" type="text"> -->
      <!-- </div>   -->
      <input class="form-input" type="text" placeholder="штрихкод">
      <input class="form-btn" type="submit" value="добавить">
    </form>
  </div>
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
        inputActive: false
      }
    },
    methods: {
      placeholderToggle() {
        this.inputActive = !this.inputActive;
      }
    }
  }
</script>

<style scoped>
  .home-form__model {
    display: flex;
    flex-direction: column;
  }

    .input-wrapper {
    position: relative;
  }

  .input-placeholder {
    transition: all .3s;
    position: absolute;
    left: 10px;
    top: 10px;
    color: #a0a0a0;
    pointer-events: none;
  }

  .input-placeholder_active {
    font-size: 14px;
    top: -11px;
    background-color: #fff;
    box-shadow: 2px 3px 2px 3px #fff;
  }
</style>