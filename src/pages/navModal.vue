<template>
  <div>
    <b-modal showModal centered title="This is the modal title">
      <p>Vertically centered modal!</p>
    </b-modal>
    <div class="modal1">
      <b-modal showModal centered size="sm" title="This is not the modal title">
        <p>Vertically centered small modal!</p>
      </b-modal>
    </div>
    <div class="modal2">
      <b-modal showModal size="lg" title="This is not the modal title">
        <p>Vertically not centered large modal!</p>
      </b-modal>
    </div>
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

.modal1{
  position: absolute;
  width: 100%;
  margin-top: 210px;
}

.modal2{
  position: absolute;
  width: 100%;
  margin-top: 420px;
}
</style>
