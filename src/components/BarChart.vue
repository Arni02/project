<template>
  <div class="bar-chart-container">
    <canvas ref="barChartCanvas"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import { ref, onMounted, onBeforeUnmount } from 'vue';

Chart.register(...registerables);

export default {
  props: {
    chartData: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const barChartCanvas = ref(null);
    let barChartInstance = null;

    onMounted(() => {
      if (barChartCanvas.value) {
        barChartInstance = new Chart(barChartCanvas.value.getContext('2d'), {
          type: 'bar',
          data: props.chartData,
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            },
            responsive: true,
            maintainAspectRatio: false
          }
        });
      }
    });

    onBeforeUnmount(() => {
      if (barChartInstance) {
        barChartInstance.destroy();
      }
    });

    return {
      barChartCanvas
    };
  }
};
</script>

<style>
.bar-chart-container {
  width: 100%;
  max-height: 400px;
  color: #decb94;
}
</style>
