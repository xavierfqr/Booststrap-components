<template>
  <div id="app">

    <b-navbar :sticky="true" type="light" fixed="top">
      <b-navbar-brand>NavBar</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item href="/navModal">Modal</b-nav-item>
        <b-nav-item href="/navTable">Table</b-nav-item>
        <b-nav-item href="/navTabs">Tabs</b-nav-item>
        <b-nav-item href="/navDropdown">Dropdown</b-nav-item>
        <b-nav-item href="/navProgress">Progress</b-nav-item>
        <b-nav-item href="/navBreadcrumb">Breadcrumb</b-nav-item>
        <b-nav-item href="/navSkeleton">Skeleton</b-nav-item>

        <b-nav-item href="/navTabs" disabled>Disabled</b-nav-item>

      </b-navbar-nav>
    </b-navbar>

    <router-view></router-view>

  </div> 
</template>

<script>


import BNavbar from './components/b-navbar';
import BNavbarNav from './components/b-navbar-nav';
import BNavItem from './components/b-nav-item';
import BNavbarBrand from './components/b-navbar-brand.vue';


export default {
  name: "App",
  components: {
    BNavbar,
    BNavbarNav,
    BNavItem,
    BNavbarBrand,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
