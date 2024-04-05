<template>
  <div class="header-area">
    <div class="header-content">
    <h2>OLYMPOS</h2>
    <img src="../assets/images/olym.png" alt="Olympos Logo" class="header-logo">
  </div>
  </div>
  
  <header class="main-header">
    
    <nav class="main-nav">
      <ul>
        <li><a href="#build-metrics">Build Metrics</a></li>
        <li><a href="deployment-metrics">Deploy Metrics</a></li>
        <li><a href="#app-inventory">App Inventory</a></li>
        <li><a href="#app-health">App Health</a></li>
        <li><a href="#Release-info">Release info</a></li>
        <li><a href="#Vulnerability-Dashboard"> Vulnerability Dashboard</a></li>
        <li><a href="#Horizon-Outages">Horizon Outages</a></li>
        <li><a href="#Patching-Schedule">Patching Schedule</a></li>
        <li><a href="#Maya">Maya</a></li>
      </ul>
    </nav>
  </header>
  <main class="content">
    <div class="highlights">
      <section id="Patching-Schedule" class="highlight-section">
        <div class="highlight-content">
          <h3>Patching Schedule</h3>
          <p>Ensure your systems are robust and secure with our comprehensive patching schedule, designed to keep your infrastructure resilient against threats.</p>
          <a href="#Patching-Schedule" class="learn-more">Learn more »</a>
        </div>
        <div class="highlight-image">
          <img src="../assets/patching-schedule.jpg" alt="Patching Schedule">
        </div>
      </section>

      <section id="Horizon-Outages" class="highlight-section">
        <div class="highlight-content">
          <h3>Horizon Outages</h3>
          <p>Get ahead of outages with our predictive alerts. Our platform provides actionable insights to reduce downtime and maintain seamless operations.</p>
          <a href="#Horizon-Outages" class="learn-more">Learn more »</a>
        </div>
        <div class="highlight-image">
          <img src="../assets/horizon-outages.jpg" alt="Horizon Outages">
        </div>
      </section>
    </div>

  </main>
  <section class="deployment-graphs" v-if="showMetrics">
   <h3>Deployment Metrics</h3>
   <div class="chart-container">
      <LineChart :chart-data="deploymentData"></LineChart>
    </div>
  </section>
</template>

<script>
import LineChart from './LineChart.vue';

export default {
  components: {
    LineChart,
  },
data() {
    return {
      showMetrics: true, 
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
methods: {
    toggleMetrics() {
      this.showMetrics = !this.showMetrics; // Toggle the visibility
    },
    // ...other methods if needed...
  },
      // ...other data properties...
    };
  },
};
</script>
<style scoped>
.main-header {
  background-color: light; /* Adjust the color to fit your brand */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.main-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center; /* Center the menu */
}

.main-nav li {
  padding: 1rem;
}

.main-nav a {
  text-decoration: none;
  font-family: 'Nunito', sans-serif;
  color: #fff; /* Change as needed */
  font-weight: bold;
  background-color: #76c098
}

.main-nav a:hover {
  text-decoration: underline;
  background-color: #decb94;
}
.header-link:hover {
  color: #decb94; /* New hover color */
}

.section-container {
  padding: 4rem 1rem;
}

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
.olympos{
  width:100%;
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
padding: 10rem;
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
/* .content-section {
   display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  width: 100%;
  font-family: 'Nunito', sans-serif
}
.text-section {
  flex-basis: 50%; /* Adjust the width as necessary 
  padding-right: 20px; /* Give some space between the text and the image 
  width: 30%; 
  font-family: 'Nunito', sans-serif;
}
.image-section {
  
  flex-grow: 1;
  display: flex;
  flex-basis: 70%;  
  justify-content: flex-end; /* This will push your image to the right 
}
.image-section img {
  max-width: 100%;
  flex-basis: 70%; 
  height: auto;
 
} */
.header-logo {
  max-width: 50px; /* Adjust as needed for your design */
  max-height: 50px; /* Adjust as needed for your design */
  margin-left: 10px; /* Add some space between text and the logo */
}
.header-content {
  display: flex;
  align-items: center; /* This will vertically center the items in the header */
  font-family: 'Nunito', sans-serif;
}
.highlights {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 2rem ;
  font-family: 'Nunito', sans-serif;
}

.highlight-section {
  flex: 1;
  display: flex;
  margin-right: 6rem; /* Adjust spacing between the two sections */
  font-family: 'Nunito', sans-serif;
}

.highlight-content {
  flex-basis: 50%;
  padding-right: 3rem; /* Adjust spacing within the content */
  font-family: 'Nunito', sans-serif;

}

.highlight-image {
  flex-basis: 50%;
}

.highlight-image img {
  width: 100%;
  height: auto;
  border-radius: 8px; /* Optional: for rounded corners */
}

.learn-more {
  text-decoration: none;
  color: white; /* Olympos brand color */
  font-weight: bold;
  font-family: 'Nunito', sans-serif;
  background-color: #76c098;
}

.learn-more:hover {
  text-decoration: underline;
  background-color: #76c098;
}
/* Additional styles for the graphs and tables */
</style>
