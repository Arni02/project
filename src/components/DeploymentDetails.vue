<template>
  <div class="header-area">
  <h2>Deployment Details</h2>
</div>
  <div class="deployment-details">
    <h2>{{ ait }} and {{ spk }} in {{ environment }}</h2>
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
     <!-- <div class="history-section">
      History Button and Display 
      <button @click="showHistory = !showHistory">Toggle History</button>
      <div v-if="showHistory" class="history-list">
        <ul>
          <li v-for="history in deploymentHistory" :key="history.id">
            {{ history.event }} - {{ history.date }}
          </li>
        </ul>
      </div>
    </div> -->
    <div class="history-section">
    <button @click="toggleHistoryPopup">Toggle History</button>


  <div v-if="isHistoryPopupVisible" class="history-popup">
    <h4>Deployment History</h4>
    <!-- Duration Dropdown -->
    <select v-model="selectedDuration">
      <option value="week">Week</option>
      <option value="month">Month</option>
      <option value="quarter">Quarter</option>
    </select>
    <!-- History Table -->
    <table>
      <thead>
        <tr>
          <th>Component</th>
          <th>Environment</th>
          <th>Build Version</th>
          <th>Branch</th>
          <th>Date Deployed</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="history in filteredHistory" :key="history.id">
          <td>{{ history.component }}</td>
          <td>{{ history.environment }}</td>
          <td>{{ history.buildVersion }}</td>
          <td>{{ history.branch }}</td>
          <td>{{ history.dateDeployed }}</td>
          <td>{{ history.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
  <!-- ... rest of your template ... -->


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

import { ref, computed, onMounted} from 'vue';
import { useRoute } from 'vue-router';
import BarChart from './BarChart.vue';
import PieChart from './PieChart.vue';

export default {
  components: {
    BarChart,
    PieChart
  },
  setup() {
    const route = useRoute();
    const ait = ref(route.query.ait?.toUpperCase() || ''); // Convert to uppercase or default to empty string
    const spk = ref(route.query.spk?.toUpperCase() || ''); // Convert to uppercase or default to empty string
    const environment = ref(route.query.environment?.toUpperCase() || ''); 
    const selectedDuration = ref('week'); // Default duration set to 'week'
    const isHistoryPopupVisible = ref(false); // To control visibility of the popup
    const detailedHistory = ref([
      
    // Mock data for the history table
   
      { id: 1, component: 'Component A', environment: 'Dev1', buildVersion: 'v1.0.2', branch: 'main', dateDeployed: '2023-03-01', status: 'Success' },
      { id: 2, component: 'Component B', environment: 'Dev2', buildVersion: 'v1.1.0', branch: 'develop', dateDeployed: '2023-03-02', status: 'Failed' },
      // Add more mock data as needed
    ]);
    // Computed property to filter history based on selected duration
    const filteredHistory = computed(() => {
      // This is just an example. Adjust the filtering logic based on your needs.
      return detailedHistory.value.filter(history => {
        if (selectedDuration.value === 'week') {
          // Implement week filter logic
          return true; // Placeholder, replace with actual logic
        } else if (selectedDuration.value === 'month') {
          // Implement month filter logic
          return true; // Placeholder, replace with actual logic
        } else if (selectedDuration.value === 'quarter') {
          // Implement quarter filter logic
          return true; // Placeholder, replace with actual logic
        }
      });
    });

  
  const toggleHistoryPopup = () => {
      isHistoryPopupVisible.value = !isHistoryPopupVisible.value;
    };

    

    
    // ... rest of your setup function ...

    return {
      ait,
      spk,
      environment,
      selectedDuration,
      isHistoryPopupVisible,
      toggleHistoryPopup,
      filteredHistory,
      // ... other reactive properties
    };
  },
  // ... rest of your component options ...

  data() {
    return {
      // Example data
      //Sample data for the bar chart
      barChartData: {
        labels: ['Dev1', 'Dev2', 'Dev3', 'Sit1', 'Sit5'],
        datasets: [{
          label: 'Deployment Frequency',
          backgroundColor: ['#6cb937', '#5289b8', '#05c4f3', '#f5a445', '#40b58d'],
          data: [10, 20, 30, 40, 50]
        }] },
      
      pieChartData: {
        // Data for the pie chart
        labels: ['Success', 'Failed'],
        datasets: [{
          label: 'Success/Failure Rate',
          backgroundColor: ['#76c098', '#decb94'],
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
  font-family: 'Nunito', sans-serif;
}

.header-area {
  background-color: #424650; /* Header background color */
  color: white; /* Color of the text in the header */
  padding: 20px; /* Padding inside the header */
  border-radius: 8px;
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
  background-color: #76c098;
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
.history-popup {
  position:fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 8px 16px rgba(0,0,0,0.1);
  z-index: 10;
 

  border: 1px solid #ccc;
 
}
</style>
