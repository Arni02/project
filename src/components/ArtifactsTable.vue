<template>
    <div class="artifacts-table">
      <table>
        <thead>
          <tr>
            <th>Artifact</th>
            <th>Status</th>
            <th>Created</th>
            <th>Deployed</th>
            <th>Environment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="artifact in artifacts" :key="artifact.id">
            <td>{{ artifact.name }}</td>
            <td><span :class="{'status-success': artifact.status === 'Succeeded', 'status-failed': artifact.status === 'Failed'}">{{ artifact.status }}</span></td>
            <td>{{ artifact.created }}</td>
            <td>{{ artifact.deployed }}</td>
            <td>{{ artifact.environment }}</td>
            <td><button @click="viewDetails(artifact)">View details</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        artifacts: [
          // Populate with data similar to what's shown in your reference image
          { id: 1, name: 'v1.0.0', status: 'Succeeded', created: 'May 1, 2022', deployed: 'May 1, 2022', environment: 'Production' },
          { id: 2, name: 'v1.0.1', status: 'Failed', created: 'May 2, 2022', deployed: 'May 2, 2022', environment: 'Production' },
          // Add more artifacts as needed
        ]
      };
    },
    methods: {
      viewDetails(artifact) {
        // Logic to view details of an artifact
        console.log('Viewing details for:', artifact);
      }
    }
  };
  </script>
  
  <style scoped>
  .artifacts-table table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
  }
  
  .artifacts-table th,
  .artifacts-table td {
    padding: 12px 16px;
    border-bottom: 1px solid #7fbd8d;
  }
  
  .artifacts-table th {
    background-color: #7fbd8d;
    font-weight: bold;
  }
  
  .status-success {
    color: #28a745;
  }
  
  .status-failed {
    color: #cb2431;
  }
  
  button {
    background-color: #3490dc;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #2779bd;
  }
  </style>
  