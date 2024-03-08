import { createRouter, createWebHistory } from 'vue-router';
import DeploymentMetrics from '../components/DeploymentMetrics.vue';
import NotFound from '../components/NotFound.vue';
import LandingPage from '../components/LandingPage.vue';

// Import your components
import AppInventory from '../views/AppInventory.vue';
import AppStatusPanel from '../views/AppStatusPanel.vue';
import AnsibleDashboard from '../views/AnsibleDashboard.vue';
import DeploymentDetails from '../components/DeploymentDetails.vue';

// Define your routes
const routes = [{
        path: '/',
        name: 'LandingPage',
        component: LandingPage,
    },
    {
        path: '/deployment-metrics',
        name: 'DeploymentMetrics',
        component: DeploymentMetrics,
    },
    {
        path: '/deployment-details',
        name: 'DeploymentDetails',
        component: DeploymentDetails,
    },
    { path: '/app-inventory', name: 'AppInventory', component: AppInventory },
    { path: '/app-status-panel', name: 'AppStatusPanel', component: AppStatusPanel },
    { path: '/ansible-dashboard', name: 'AnsibleDashboard', component: AnsibleDashboard },
    // ...other routes...
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
    },
];

// Create the router instance and pass the `routes` option
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;