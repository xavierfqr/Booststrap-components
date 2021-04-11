<template lang="html">
  <div class="tab-content" v-show='isActive'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isActive: false
    }
  },
  created() {
    this.isActive = this.active
  }
}
</script>

<style>
.tab-content {
  text-align: left;
}
</style>