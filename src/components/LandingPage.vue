<template>
    <div class="dashboard">
      <section class="key-metrics"> 
      <!-- Cards for Key Metrics -->
      <h3>Build Metrics</h3>
     
        

        <div class="card">
          <h3>Builds</h3>
          <p class="metric-value">152 Total</p>
          <p class="metric-note">24 Active Builds</p>
        </div>
        <div class="card">
          <h3>Success</h3>
          <p class="metric-value">98.2</p>
          <p class="metric-note">%10+ since last week</p>
        </div>
        <div class="card">
          <h3>Failed</h3>
          <p class="metric-value">10</p>
          <p class="metric-note">1%- since last week</p>
        </div>
      </section>
  
      <!-- Graphs for Deployment Data -->
      <section class="deployment-graphs">
     <h3>Deployment Metrics</h3>
     <div class="chart-container">
        <LineChart :chart-data="deploymentData"></LineChart>
      </div>
      </section>
  
      <!-- Data Table for Application Status -->
      <section class="app-status">
        <h3>App Status</h3>
        <table>
          <thead>
            <tr>
              <th>Platform</th>
              <th>Environment</th>
              <th>Application</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              
              <td>Adfw</td>
              <td>Dev1</td>
              <td>ADFW</td>
              <td>UP</td>
            </tr>
            <tr>
              
              <td>Dmz Desktop</td>
              <td>Dev4</td>
              <td>AAD</td>
              <td>UP</td>
            </tr>
            <tr>
              
              <td>Dmz Desktop</td>
              <td>Dev2</td>
              <td>AAD</td>
              <td>DOWN</td>
            </tr>
            <tr>
              
              <td>ADFW</td>
              <td>Dev3</td>
              <td>ADFW</td>
              <td>UP</td>
            </tr>
            <!-- Repeat for other products -->
          </tbody>
        </table>
      </section>
    </div>
  </template>
  
  <script>
  import LineChart from './LineChart.vue';

  export default {
    components: {
      LineChart,
    },
    mounted() {
    console.log(this.deploymentData); // Check if data is correct
  },
    data() {
      return {
        deploymentData: {
          // Example structure for chart.js data
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
          {
            label: 'Success Rate',
            backgroundColor: 'rgb(75, 192, 192)',
            borderColor: 'rgb(75, 192, 192)',
            data: [65, 59, 80, 81, 56, 55, 40],
            tension: 0.1,
          },
          {
            label: 'Failure Rate',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [28, 48, 40, 19, 86, 27, 90],
            tension: 0.1,
          },
          ],
        },
        mounted() {
  console.log("Deployment data:", this.deploymentData);
  // It will print the deployment data to the console when the component mounts
},
        // ...other data properties...
      };
    },
  };
  </script>
  
  <style scoped>

.deployment-graphs {
  /* Adjust the max-height or remove it if not needed */
  max-height: none; /* This ensures there's no maximum height restriction */
  width: 950px
}
.sidebar {
  /* Your existing sidebar styles */
  background-color: #e6eaf3; /* Dark but not too dark */
  width: 250px; /* Adjust sidebar width as needed */
  /* Other styling for your sidebar */
}
  .dashboard, .app-status, .app-status table {
    font-family: 'Inter var', sans-serif;
}
/* If you want to specifically target table content */
.app-status table, 
.app-status th, 
.app-status td {
  font-family: 'Nunito', sans-serif; /* This will ensure the font is applied to table elements */
  /* Other font styles */
}
::v-deep .app-status table {
  font-family: 'Nunito', sans-serif;
}
  /* Overall dashboard styling */
  .dashboard-container {
  display: flex; /* Use flex to lay out the sidebar and main dashboard side by side */
}

.dashboard {
    flex-grow: 1; /* Ensures the dashboard section takes up the remaining width */
  background-color: #cdd6f4; /* Slightly lighter dark background */
  color: #f2f4ed; /* Light text color */
  transition: background-color 0.3s ease; /* Smooth transition for any background-color change */
  width: calc(100% - 250px); 
}

.chart-container {
 
  padding: 20px;
  margin: 0px 0 !important;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Remove fixed height to let the container adjust based on its content */
  width: 100%;
  
}
canvas {
  max-width: 100%;
  height: auto;
}
.header {
    border-bottom: 1px solid #eff1ea; /* Slightly lighter border color for definition */
  padding-bottom: 20px;
  margin-bottom: 20px;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-weight: 400; /* Bold weight for headings */
  color: #191e02; /* A darker shade for heading text for better contrast */
}

h1 {
  font-size: 2rem; /* 32px for main titles */
}

h2 {
  font-size: 1.75rem; /* 28px for section titles */
}

h3 {
  font-size: 1.5rem; /* 24px for card titles and such */
}

p, .metric-note, li, a, button, input, label, th, td { /* Regular text and UI elements */
  font-weight: 200; /* Regular weight */
  font-size: 1rem; /* 16px for body text, the standard size for readability */
}

/* Key metrics card styling */
.key-metrics {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

.card {
   background: #f3dd60; /* Lighter dark background for the card to stand out */
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(20, 121, 126, 0.2);
  padding: 20px;
  margin: 10px;
  color: #cdd6f4; /* Text color consistent with the dashboard */
  transition: all 0.3s ease;
}

.metric-value {
    font-size: 2.5rem;
  font-weight: 10;
  color: #ffffff; /* Pure white for important numbers to stand out */
}

.metric-note {
    color: #ed6d57;
}

/* Graph styling */


/* Table styling */
.app-status {
    background: #ed9c9c; /* Same as card for consistency */
  color: #cdd6f4; /* Text color consistent with the dashboard */
  padding: 1rem;
  border-radius: 8px;
  margin-top: 2rem;
  overflow: hidden;
  margin-top: 40px; 
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.app-status:hover {
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

/* Styling the table with subtle colors and modern look */
.app-status table {
    width: 100%;
  border-collapse: collapse;

}

.app-status th, .app-status td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #dadac8; /* Borders are lighter to contrast the darker background */
}

.app-status th {
  background-color: #c8c8b0; /* Header background */
  color: #020612; /* Header text color */
}

.app-status tr:hover {
  background-color: #808000; /* Hover state with a slightly different tone */
}

/* Subtle font style for readability */
body {
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #ba530e; /* Soften the default text color */
}

/* Button styling */
button, a {
    background-color: #3d8bfd; /* A muted blue for buttons */
  color: #ffffff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
}
button {
  background-color: #42b983;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover, a:hover {
    background-color: #3273dc; /* Darken button color on hover */
  cursor: pointer;
}


button:hover {
    background-color: #0a9396;
  cursor: pointer;
}

  .key-metrics {
    display: flex;
    justify-content: space-between;
    /* ... */
  }
  
  .card {
    border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  padding: 20px;
  margin: 10px;
    /* ... */
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  }
  
  .metric-value {
    font-size: 24px;
    font-weight: bold;
    /* ... */
  }
  
  .metric-note {
    font-size: 14px;
    color: #eae8e8;
    /* ... */
  }
  
  /* Additional styles for the graphs and tables */
  </style>
  