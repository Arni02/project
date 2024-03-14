<template>
  <div class="header-area">
    <h2>Overview</h2>
  </div>
  <div class="dashboard">
    <section class="key-metrics"> 
    <!-- Cards for Key Metrics -->
    <h3>Build Metrics</h3>
   
      

      <div class="card">
        <h1>Builds</h1>
        <p class="metric-value">152 Total</p>
        <p class="metric-note">24 Active Builds</p>
      </div>
      <div class="card">
        <h1>Success</h1>
        <p class="metric-value">98.2%</p>
        <p class="metric-note">%10+ since last week</p>
      </div>
      <div class="card">
        <h1>Failed</h1>
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
    <h3>App Status</h3>
    <section class="app-status">
     
      
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
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September'],
        datasets: [
        {
          label: 'Success Rate',
          backgroundColor: '#76c098', // Changed from 'rgba(0, 123, 255, 0.5)'
      borderColor: '#76c098', 
          data: [65, 59, 80, 81, 56, 55, 80],
          tension: 0.1,
        },
        {
          label: 'Failure Rate',
          backgroundColor: '#decb94', // Changed from 'rgba(0, 123, 255, 0.5)'
      borderColor: '#decb94', 
          data: [28, 48, 40, 19, 65, 27, 10],
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
width: 100%;
}
.header-area {
  background-color: #424650; /* Header background color */
  color: white; /* Color of the text in the header */
  padding: 20px; /* Padding inside the header */
  border-radius: 8px;
}
.charts-container {
width: calc(100% - 40px); /* Adjust the value according to padding and margins */
margin: 20px; /* Symmetric margin for top and bottom */
}
.sidebar {
/* Your existing sidebar styles */
background-color: #e6eaf3; /* Dark but not too dark */
width: 250px; /* Adjust sidebar width as needed */
/* Other styling for your sidebar */
}
.dashboard, .app-status, .app-status table {
  font-family: 'Nunito', sans-serif
}
/* If you want to specifically target table content */
.app-status table, 
.app-status th, 
.app-status td {
font-family: 'Nunito', sans-serif; /* This will ensure the font is applied to table elements */
/* Other font styles */
}
.app-status h3 {
margin-top: 0; /* Remove top margin from the title */
}

.app-status table {
font-family: 'Nunito', sans-serif;
width: 100%;
border-collapse: collapse;
}
/* Overall dashboard styling */
.dashboard-container {
display: flex; /* Use flex to lay out the sidebar and main dashboard side by side */
}

.dashboard {
  flex-grow: 1; /* Ensures the dashboard section takes up the remaining width */
/* Slightly lighter dark background */
color: var(--color-gray-blue);/* Light text color */
transition: background-color 0.3s ease; /* Smooth transition for any background-color change */
width: calc(100% - 250px); 
padding: 1rem;
}

.chart-container {


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
padding: 1rem;
color: #decb94;
}
.header {
  border-bottom: 1px solid #eff1ea; /* Slightly lighter border color for definition */
padding-bottom: 20px;
margin-bottom: 20px;
}

/* Typography */
h1, h3, h4, h5, h6 {
font-weight: 400; /* Bold weight for headings */
color: #191e02; /* A darker shade for heading text for better contrast */
}

h1 {
font-size: 1.2rem; /* 32px for main titles */
display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}


h3 {
  font-size: 1.17em;/* 24px for card titles and such */
display: block;
   
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

p, .metric-note, li, a, button, input, label, th, td { /* Regular text and UI elements */
font-weight: 200; /* Regular weight */
font-size: 1rem; /* 16px for body text, the standard size for readability */
color: #191e02;
}

/* Key metrics card styling */
.key-metrics {
display: flex;
justify-content: space-between;
padding: 1rem;
}

.card {
 background: #7fbd8d; /* Lighter dark background for the card to stand out */
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

 /* Same as card for consistency */
 background-color: #fff; /* Text color consistent with the dashboard */
border-radius: 8px;
overflow: hidden;
font: 'Nunito', sans-serif;
width: 100%;
padding: 1rem;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
margin-top: 40px; /* Space from the deployment metrics section */
margin-bottom: 20px; /* Space before the next content */
}
.card:hover {
transform: translateY(-5px);
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.app-status:hover {
box-shadow: 0 8px 25px lightgrey;
}

/* Styling the table with subtle colors and modern look */
.app-status table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  margin-top: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);


}

.app-status th, .app-status td {
  border-bottom: 1px solid #eaeaea;
  padding: 8px;
  text-align: left;
  
}

.app-status th {
  font-size: 1.1em;
  background-color: #7fbd8d;

background-color: #7fbd8d;
}

.app-status tr:hover {
/* Hover state with a slightly different tone */
}

/* Subtle font style for readability */
body {
font-family:  'Nunito', sans-serif;
color: white; /* Soften the default text color */
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
  color: #191e02;
  /* ... */
}

/* Additional styles for the graphs and tables */
</style>
