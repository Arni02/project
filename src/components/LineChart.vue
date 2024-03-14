<template>
  <div class="chart-container">
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, watchEffect } from 'vue';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default {
  name: 'LineChart',
  props: {
    chartData: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      default: () => ({
        responsive: true,
        maintainAspectRatio: false,
      })
    }
  },
  setup(props) {
    const chartRef = ref(null);
    let chartInstance = null;

    watchEffect(() => {
      if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
      }
      if (chartRef.value) {
        initializeChart();
      }
    });

    onMounted(() => {
      if (chartRef.value) {
        initializeChart();
      }
    });

    onBeforeUnmount(() => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    });

    function initializeChart() {
      console.log('Chart Data:', props.chartData); // Check if data is correct
      chartInstance = new Chart(chartRef.value.getContext('2d'), {
        type: 'line',
        data: props.chartData,
        options: props.options
      });
    }

    return {
      chartRef
    };
  }
};
</script>

<style>
.chart-container {
  width: 20%; 
  height: 300px; 
  position: relative;
}

canvas {
  width: 100% !important;
  height: 100% !important;
  color: #decb94;
}
</style>
