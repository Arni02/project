<template>
    <table class="deployment-table">
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
        <tr v-for="entry in tableData" :key="entry.id">
          <td>{{ entry.componentName }}</td>
          <td>{{ entry.environment }}</td>
          <td>{{ entry.branch }}</td>
          <td>{{ entry.artifact }}</td>
          <td>{{ entry.deployedBy }}</td>
          <td>{{ entry.status }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  export default {
    props: {
      tableData: Array
    }
  };
  </script>
  
  <style>
  .deployment-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
  }
  
  .deployment-table th,
  .deployment-table td {
    padding: 0.5rem;
    border: 1px solid #ddd;
    text-align: left;
  }
  
  .deployment-table th {
    background-color: #f4f4f4;
  }
  </style>
  