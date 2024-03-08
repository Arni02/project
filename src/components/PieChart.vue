<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import { ref, onMounted, onBeforeUnmount } from 'vue';

Chart.register(...registerables);

export default {
  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const canvas = ref(null);
    let chartInstance = null;

    onMounted(() => {
      if (canvas.value) {
        chartInstance = new Chart(canvas.value, {
          type: 'pie',
          data: props.chartData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            // Add any other options you may need
          },
        });
      }
    });

    onBeforeUnmount(() => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    });

    return {
      canvas,
    };
  },
};
</script>
