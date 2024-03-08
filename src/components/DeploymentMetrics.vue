<template>
  <div class="dashboard">
    <h2>Dashboard</h2>
    <p>View and manage your Deployment services</p>

    <div class="tabs">
      <button class="tab" :class="{active: activeTab === 'overview'}" @click="activeTab = 'overview'">Overview</button>
      <button class="tab" :class="{active: activeTab === 'metrics'}" @click="activeTab = 'metrics'">Metrics</button>
      <button class="tab" :class="{active: activeTab === 'logs'}" @click="activeTab = 'logs'">Logs</button>
    </div>

    <section class="continuous-deployment">
      <h2>Search deployments</h2>

          
          <div class="filters">
      <select name="ait" class="dropdown" v-model="selectedAit">
        <option disabled value="">Select AIT</option>
        <option v-for="ait in aits" :key="ait.value" :value="ait.value">{{ ait.text }}</option>
      </select>

      <select name="spk" class="dropdown" v-model="selectedSpk">
        <option disabled value="">Select SPK</option>
        <option v-for="spk in spks" :key="spk.value" :value="spk.value">{{ spk.text }}</option>
      </select>

      <select name="environment" class="dropdown" v-model="selectedEnvironment">
        <option disabled value="">Select Environment</option>
        <option v-for="environment in environments" :key="environment.value" :value="environment.value">{{ environment.text }}</option>
      </select></div>
          <button @click="navigateToDetails">Generate</button>
    
    </section>

    <section class="deployment-metrics">
      <h2>Deployment Metrics</h2>
      <div class="metric-cards">
        <metric-card title="Deployments this week" value="42" change="+12%"></metric-card>
        <metric-card title="Success Rate" value="98.3%" change="-4.2%"></metric-card>
        <metric-card title="Failed" value="1" change="+3"></metric-card>
        <metric-card title="Pending" value="0" change="-1"></metric-card>
      </div>
      
      <div class="charts-container">
  <div class="chart-container">
    <line-chart :chart-data="deploymentChartData"></line-chart>
  </div>
  <div class="chart-container">
    <bar-chart :chart-data="barChartData"></bar-chart>
  </div>
</div>
    </section>

    <section class="deployed-artifacts">
      <h2>Deployed Artifacts</h2>
      <artifacts-table :artifacts="deployedArtifacts"></artifacts-table>
    </section>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { useRouter } from 'vue-router';
import LineChart from './LineChart.vue';
import MetricCard from './MetricCard.vue';
import ArtifactsTable from './ArtifactsTable.vue';
import BarChart from './BarChart.vue';
export default {
  components: {
    LineChart,
    MetricCard,
    ArtifactsTable,
   BarChart, 
  },
  setup() {
    const router = useRouter();
    const selectedAit = ref('');
    const selectedSpk = ref('');
    const selectedEnvironment = ref('');

    const aits = ref([
      { value: 'ait1', text: 'AIT 1' },
      { value: 'ait2', text: 'AIT 2' },
      // ... other AITs
    ]);

    const spks = ref([
      { value: 'spk1', text: 'SPK 1' },
      { value: 'spk2', text: 'SPK 2' },
      // ... other SPKs
    ]);

    const environments = ref([
      { value: 'env1', text: 'Environment 1' },
      { value: 'env2', text: 'Environment 2' },
      // ... other environments
    ]);

    const deploymentChartData = ref({
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Deployments',
        data: [10, 12, 8, 15, 18, 9, 11],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      }],
    });

    const deployedArtifacts = ref([
      // Populate this with your artifacts data
    ]);

    const navigateToDetails = () => {
      if (selectedAit.value && selectedSpk.value && selectedEnvironment.value) {
        router.push({
          name: 'DeploymentDetails',
          query: {
            ait: selectedAit.value,
            spk: selectedSpk.value,
            environment: selectedEnvironment.value,
          },
        });
      } else {
        alert('Please select all the required options before generating.');
      }
    };

    const isGenerateButtonDisabled = computed(() => {
      return !(selectedAit.value && selectedSpk.value && selectedEnvironment.value);
    });

    onMounted(() => {
      console.log('DeploymentMetrics component is mounted');
    });

    onBeforeUnmount(() => {
      console.log('DeploymentMetrics component is about to be unmounted');
    });

    return {
      selectedAit,
      selectedSpk,
      selectedEnvironment,
      aits,
      spks,
      environments,
      deploymentChartData,
      deployedArtifacts,
      navigateToDetails,
      isGenerateButtonDisabled,
    };
  },
  data() {
    return {
      // ...
      deploymentChartData: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Total Deployments',
          data: [/* ... */], // Your normal graph data
          // Other chart.js properties for normal graph
        }],
      },
      barChartData: {
        labels: ['Environment 1', 'Environment 2'],
        datasets: [{
          label: 'Deployment Count',
          backgroundColor: 'rgba(0, 123, 255, 0.5)',
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 1,
          data: [5, 10] // Example data
        }]
      },
      // ...
    };
  },
  methods: {
    fetchData() {
      // Method to fetch data
    },
    // ... other methods ...
  },
  computed: {
    // Example of computed property
    someComputedProperty() {
      return this.someDataProperty.toUpperCase();
    },
    // ... other computed properties ...
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

.dashboard {
  padding: 20px;
  background-color: #edf2f7; /* A light, modern background color */
  min-height: 100vh;
  font-family: 'Inter var', sans-serif;
}
.filters {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem; /* Space for the Generate button */
}
.dropdown {
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  font-size: 0.9rem; /* Modern text size */
  cursor: pointer;
  appearance: none; /* Removes platform-specific styling */
  background-color: #90EE90;
  background-image: url('data:image/svg+xml;charset=USA-ASCII,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"%3E%3Cpath fill="rgb(0, 123, 255)" d="M0 132l96 96 96-96z"%3E%3C/path%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 0.65em;
}
button.generate {
  background-color: #3490dc; /* A vibrant button color */
  color: #90EE90;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  margin-top: 1rem; /* Space from the last dropdown */
  cursor: pointer;
  transition: background-color 0.2s;
}
button.generate:hover {
  background-color: #008B8B; /* Darken button on hover */
}
.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  color: #4CAF50;
}

.tab {
  padding: 10px 20px;
  background-color: transparent;
  border: 2px solid transparent;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.tab.active {
  color: #fff;
  background-color: #4CAF50; /* Green color for the active tab */
  border-color: #4CAF50;
}

.tab:hover:not(.active) {
  border-color: #d3d3d3; /* Light border for hover state */
}

.metric-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

/* Add .metric-card component styles here */

.charts {
  /* Add .line-chart component styles here */
}

/* Add .artifacts-table component styles here */
.charts-container {
  display: flex; /* Use flexbox to place children side by side */
  justify-content: space-between; /* Add space between the charts */
  margin-bottom: 20px; /* Add some space below the chart container */
}

.chart-container {
  flex: 1; /* Both children will take equal width */
  margin: 0 10px; /* Add some margin to the left and right of each chart */
}
</style>

