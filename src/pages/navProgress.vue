<template>
  <div>
    <b-progress :value="25" variant="success" show-progress striped animated />
    <b-progress :value="50" variant="info" />
    <b-progress :value="75" variant="warning" striped />
    <b-progress :value="100" variant="danger" show-progress />
  </div>
</template>

<script>

import BProgress from "../components/b-progress";


export default {
  name: 'navProgress',
  components: {
    BProgress,
  }
}
</script>

<style>
</style>
