<template>
    <select v-model="selectedValue" class="dropdown-select">
      <option value="" disabled>{{ placeholder }}</option>
      <!-- Dynamically generated options -->
      <option v-for="(option, index) in options" :key="index" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </template>
  
  <script>
  export default {
    props: {
      options: Array,
      placeholder: String
    },
    data() {
      return {
        selectedValue: ''
      };
    }
  };
  </script>
  
  <style>
  .dropdown-select {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #7fbd8d;
    width: 100%;
  }
  </style>
  