<template>
  <div id="app" class="app-container">
    <Sidebar class="app-sidebar"/>
    <div class="app-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  components: {
    Sidebar
  }
}
</script>

<style>

.main-container {
  display: flex;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
  padding: 1rem;
}

/* Global styles */
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

/* App container styles */
.app-container {
  display: flex;
  min-height: 100vh; /* Full height of the viewport */
}

/* Sidebar styles */
.app-sidebar {
  width: 250px; /* Adjust the width of the sidebar as needed */
  /* Your sidebar-specific styles here */
}

/* Main content styles */
.app-content {
  flex-grow: 1; /* Takes up the remaining space */
  background-color: #f3f4f9;; /* Your preferred background color */
  overflow: auto; /* Adds scroll to the main content if needed */
}

</style>
