<template>
  <div class="brand-container">
      <slot/>
  </div>
  
</template>

<script>

export default {
  name: 'b-navbar-brand',
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