<template>
  <div id="app">
    <b-navbar :sticky="true" type="dark" fixed="top">
      <b-navbar-brand>NavBar</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#">Link2</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import BNavbar from './components/b-navbar';
import BNavbarNav from './components/b-navbar-nav';
import BNavItem from './components/b-nav-item';
import BNavbarBrand from './components/b-navbar-brand.vue';


export default {
  name: 'App',
  components: {
    BNavbar,
    BNavbarNav,
    BNavItem,
    BNavbarBrand
  }
}
</script>

<style>
#app {
  height: 2000px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
