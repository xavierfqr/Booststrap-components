<template>
  <div>
    <b-modal showModal centered title="This is the modal title">
      <p>Vertically centered modal!</p>
    </b-modal>
  </div>
</template>

<script>

import BModal from '../components/b-modal.vue';

export default {
  name: 'navModal',
  components: {
    BModal,
  }
}
</script>

<style>
</style>
