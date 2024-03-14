<template>
    <div class="metric-card">
      <h4>{{ title }}</h4>

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
    background-color: #7fbd8d;
    padding: 3px;
    border-radius: 12px;
    display:block;
    box-shadow: 0 6px 16px rgba(0,0,0,0.1);
    text-align: center;
    transition: transform 0.3s ease;
    font-size: 1rem;
    border-radius: 12px; /* Round corners for the metric card */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  }
  
  .metric-value {
    font-size: 1.5rem;
    color: white;
    display: block;
    margin-bottom: 5px;
  }
  
  .metric-change {
    color: #6c757d;
    font-weight: 100;
  }
  
  .metric-card:hover {
    transform: translateY(-5px);
  }
  </style>
  