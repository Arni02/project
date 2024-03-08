<template>
    <div class="metric-card">
      <h3>{{ title }}</h3>
      <p class="metric-value">{{ value }}</p>
      <p class="metric-change">{{ change }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      value: [String, Number],
      change: String
    }
  };
  </script>
  
  <style scoped>
  .metric-card {
    background-color: #d7e8e9;
    padding: 3px;
    border-radius: 12px;
    box-shadow: 0 6px 16px rgba(0,0,0,0.1);
    text-align: center;
    transition: transform 0.3s ease;
  }
  
  .metric-value {
    font-size: 2rem;
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }
  
  .metric-change {
    color: #dee4e9;
    font-weight: 100;
  }
  
  .metric-card:hover {
    transform: translateY(-5px);
  }
  </style>
  