<template>
  <div>
    <b-tabs card end align="center">
      <b-tab title="First" active ><p>I'm the first tab</p></b-tab>
      <b-tab title="Second"><p>I'm the second tab</p></b-tab>
      <b-tab title="Disabled" disabled><p>I'm the disabled tab</p></b-tab>
    </b-tabs>

    <b-tabs card vertical>
      <b-tab title="First" ><p>I'm the first tab</p></b-tab>
      <b-tab title="Second" active><p>I'm the second tab</p></b-tab>
      <b-tab title="Disabled" disabled><p>I'm the disabled tab</p></b-tab>
    </b-tabs>
  </div>
</template>

<script>

import BTabs from '../components/b-tabs.vue';
import BTab from '../components/b-tab.vue';

export default {
  name: 'navTabs',
  components: {
    BTab,
    BTabs,
  }
}
</script>

<style>
</style>
