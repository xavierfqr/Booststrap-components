<template>
  <div>
    <b-breadcrumb :items="items" />
  </div>
</template>

<script>

import BBreadcrumb from "../components/b-breadcrumb";



export default {
  name: 'navBreadcrumb',
  components: {
    BBreadcrumb,
  },
  data() {
    return {
      items: [
        {
          text: 'Admin',
          href: '#'
        },
        {
          text: 'Manage',
          href: '#',
        },
        {
          text: 'Library',
          active: true
        }
      ]
    }
  }
}
</script>

<style>
</style>
