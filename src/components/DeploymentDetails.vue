<template>
  <div class="deployment-details">
    <h1>Deployment Details</h1>

    <div class="graphs">
      <!-- Bar Chart for Deployment Frequency -->
      <div class="chart-container">
        <bar-chart :chart-data="barChartData"></bar-chart>
      </div>

      <!-- Pie Chart for Success/Failure Rate -->
      <div class="chart-container">
        <pie-chart :chart-data="pieChartData"></pie-chart>
      </div>
    </div>
     <div class="history-section">
      <!-- History Button and Display -->
      <button @click="showHistory = !showHistory">Toggle History</button>
      <div v-if="showHistory" class="history-list">
        <ul>
          <li v-for="history in deploymentHistory" :key="history.id">
            {{ history.event }} - {{ history.date }}
          </li>
        </ul>
      </div>
    </div>
    <section class="deployment-table">
      <h2>Deployment Table</h2>
      <!-- Deployment Details Table -->
      <table>
        <thead>
          <tr>
            <th>Component Name</th>
            <th>Environment</th>
            <th>Branch</th>
            <th>Artifact</th>
            <th>Deployed By</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="detail in deploymentDetails" :key="detail.id">
            <td>{{ detail.componentName }}</td>
            <td>{{ detail.environment }}</td>
            <td>{{ detail.branch }}</td>
            <td>{{ detail.artifact }}</td>
            <td>{{ detail.deployedBy }}</td>
            <td>{{ detail.status }}</td>
          </tr>
        </tbody>
      </table>
    </section>

   
  </div>
</template>

<script>
import BarChart from './BarChart.vue'; // Ensure you have this component
import PieChart from './PieChart.vue'; // Ensure you have this component

export default {
  components: {
    BarChart,
    PieChart
  },
  data() {
    return {
      // Example data
      //Sample data for the bar chart
      barChartData: {
        labels: ['Dev1', 'Dev2', 'Dev3', 'Sit1', 'Sit5'],
        datasets: [{
          label: 'Deployment Frequency',
          backgroundColor: ['#3498db', '#e74c3c', '#95a5a6', '#2ecc71', '#9b59b6'],
          data: [10, 20, 30, 40, 50]
        }] },
      
      pieChartData: {
        // Data for the pie chart
        labels: ['Success', 'Failed'],
        datasets: [{
          label: 'Success/Failure Rate',
          backgroundColor: ['#2ecc71', '#e74c3c'],
          data: [70, 30]
        }]
      },
      deploymentDetails: [
        // Example details data
        { componentName: 'Component A', environment: 'Dev1', branch: 'main', artifact: 'artifact-a-v1.0.2', deployedBy: 'Abcd', status: 'Success' },
        { componentName: 'Component b', environment: 'Dev1', branch: 'main', artifact: 'artifact-a-v1.2.0', deployedBy: '1234', status: 'Success' },
        { componentName: 'Component c', environment: 'Dev2', branch: 'main', artifact: 'artifact-a-v1.0.0', deployedBy: 'jndjk', status: 'Failure' },
        { componentName: 'Component A', environment: 'Dev2', branch: 'main', artifact: 'artifact-a-v1.9.0', deployedBy: 'jddc', status: 'Success' },
        { componentName: 'Component b', environment: 'SIT1', branch: 'main', artifact: 'artifact-a-v1.9.0', deployedBy: 'jhdf', status: 'Failure' },
        { componentName: 'Component A', environment: 'Dev3', branch: 'main', artifact: 'artifact-a-v1.4.0', deployedBy: 'ytedk', status: 'Success' },
      ],
      deploymentHistory: [
        // Example history data
      ],
      showHistory: false
    };
  },
  // Fetch your data when component is created
  created() {
    this.fetchDeploymentDetails();
    this.fetchBarChartData();
    this.fetchPieChartData();
    this.fetchDeploymentHistory();
  },
  methods: {
    fetchDeploymentDetails() {
      // Fetch and populate deployment details data
    },
    fetchBarChartData() {
      // Fetch and populate bar chart data
    },
    fetchPieChartData() {
      // Fetch and populate pie chart data
    },
    fetchDeploymentHistory() {
      // Fetch and populate deployment history data
    },
  }
};
</script>

<style scoped>
.deployment-details {
  padding: 20px;
  background-color: #edf2f7;
}

.graphs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.chart-container {
  width: 49%;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.deployment-table table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  margin-top: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.deployment-table th,
.deployment-table td {
  border-bottom: 1px solid #eaeaea;
  padding: 8px;
  text-align: left;
}

.deployment-table th {
  background-color: #f5f5f5;
}

.history-section {
  margin-top: 20px;
}

.history-list {
  margin-top: 10px;
}

button {
  padding: 8px 16px;
  background-color: #3490dc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2779bd;
}
</style>
