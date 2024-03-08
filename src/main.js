import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import './assets/styles.css';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


const app = createApp(App);

app.use(router); // Use the router

app.mount('#app');