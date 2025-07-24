<template>
  <div class="input-wrapper">
    <p :class="{'input-placeholder_active': inputActive}" class="input-placeholder">{{ placeholder }}</p>
    <input @focus="placeholderToggle" v-on:blur="placeholderToggle" class="form-input" type="text">
  </div> 
</template>

<script>
  export default {
    props: {
      placeholder: {
        type: String,
        required: true
      },
    },
    data() {
      return {
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

<style>
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
    font-size: 14px;
  }

  .input-placeholder_active {
    font-size: 13px;
    top: -11px;
    background-color: #fff;
    box-shadow: 2px 3px 2px 3px #fff;
  }

  .form-input {
    padding: 10px;
    border: 1px solid #cdc7ff;
    border-radius: 5px;
  }
</style>