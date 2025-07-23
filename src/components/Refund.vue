<template>
  <div class="section">
    <div class="form">
      <h2>Возврат</h2>
      <div class="input-wrapper">
        <p :class="{'input-placeholder_active': inputActive}" class="input-placeholder">Штрихкод</p>
        <input @focus="placeholderToggle" v-on:blur="placeholderToggle" class="form-input" type="text">
      </div>    
      <input class="form-btn" type="submit" value="возврат">
    </div>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        inputActive: false,
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
  .form-input {
    width: 100%;
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