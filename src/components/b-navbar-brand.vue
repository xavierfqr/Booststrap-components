<template>
  <div class="brand-container" @click="goToLocation()">
      <slot/>
  </div>
  
</template>

<script>

export default {
  name: 'b-navbar-brand',
  methods:{
    goToLocation: function () {
      if (!this.disabled)
        location.href="/"
    }
  }
}

</script>

<style>

.toggle{
    float: right;
}

.brand-container{
    float: left;

    margin-right: 1.5rem;
    font-size: 1.3rem;
    cursor: pointer;
    padding:0 0.5rem 0 0.5rem;
}

</style>