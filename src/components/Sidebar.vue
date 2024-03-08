<template>
    <div class="sidebar">
      <div class="menu-item-wrapper">
        <div class="menu-item dropdown" @click="toggleOlymposMenu">
          <FontAwesomeIcon :icon="['fas', 'city']" />
          <span>Olympos</span>
          <FontAwesomeIcon :icon="['fas', 'caret-down']" class="dropdown-icon" :class="{'flipped': olymposMenuVisible}" />
        </div>
        <!-- The submenu will now be in-flow and will push down other content -->
        <div class="submenu" v-show="olymposMenuVisible">
          <router-link to="/app-inventory" class="menu-item submenu-item">App Inventory</router-link>
          <router-link to="/app-status-panel" class="menu-item submenu-item">App Status Panel</router-link>
          <router-link to="/ansible-dashboard" class="menu-item submenu-item">Ansible Dashboard</router-link>
        </div>
      </div>
      <router-link to="/deployment-metrics" class="menu-item">
      <FontAwesomeIcon :icon="['fas', 'chart-bar']" />
      <span>Deployment Metrics</span>
    </router-link>
      <div class="menu-item"><FontAwesomeIcon :icon="['fas', 'chart-line']" /> Build Metrics</div>
      <div class="menu-item"><FontAwesomeIcon :icon="['fas', 'tools']" /> Dynatrace Dev</div>
      <div class="menu-item"><FontAwesomeIcon :icon="['fas', 'tools']" /> Dynatrace Prod</div>
      <div class="menu-item">
        <FontAwesomeIcon :icon="['far', 'comment-dots']" class="icon" />
        <span class="menu-text">Maya</span>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import {
    faCity,
    faClipboardList,
    faTachometerAlt,
    faStream,
    faChartBar,
    faChartLine,
    faTools,
    faCaretDown
  } from '@fortawesome/free-solid-svg-icons';
  import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
  import { library } from '@fortawesome/fontawesome-svg-core';
  
  // Add the icons to the library
  library.add(
    faCity,
    faClipboardList,
    faTachometerAlt,
    faStream,
    faChartBar,
    faChartLine,
    faTools,
    faCommentDots,
    faCaretDown
  );
  
  export default {
    components: {
      FontAwesomeIcon
    },
    setup() {
      const olymposMenuVisible = ref(false);
  
      const toggleOlymposMenu = () => {
        olymposMenuVisible.value = !olymposMenuVisible.value;
      };
  
      return {
        olymposMenuVisible,
        toggleOlymposMenu
      };
    }
  };
  </script>
  
  <style scoped>

  .sidebar {
    width: 250px;
    height: 100vh;
    background-color: #022001;
    box-sizing: border-box;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  .menu-item {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    cursor: pointer;
    font-family: 'Inter var', sans-serif;
    color:#e0e0e0;
  }
  
  .menu-item svg {
    margin-right: 10px;
  }
  
  .dropdown-icon {
    
    transition: transform 0.2s ease;
  }
  
  .flipped {
    transform: rotate(180deg);
  }
  
  .menu-item-wrapper {
    position: relative;
  }
  
  .submenu {
    display: none; /* Hide by default */
  /* Remove position: absolute; */
  /* Remove other styles related to absolute positioning */
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  width: 100%;
  /* No z-index needed since we're not using absolute positioning */
  }
  
  .submenu-item {
    display: block;
    padding: 10px 20px;
    color: black;
    text-decoration: none;
  }
  
  .menu-item:hover,
  .submenu-item:hover {
    background-color: #090101;
  }
  
  .menu-item.active {
    background-color: #e0e0e0;
  }
  
  .router-link-active {
    font-weight: bold;
  }
  
  .menu-item .chat-icon {
    margin-left: auto;
    margin-right: 0.5rem;
  }
  /* Correcting the positioning of the submenu */
.menu-item-wrapper .submenu {
    display: none; /* hide by default */
  /* Remove any absolute positioning */
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  width: 100%;
  /* No z-index needed as it's not positioned absolutely */
}
  </style>
  