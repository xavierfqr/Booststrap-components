<template>
  <div :class="[{'item-container':true}, {disabled:disabled}]">
      <div @click="goToLocation()"><slot/></div>  
  </div>
</template>

<script>

export default {
  name: 'b-navbar-item',
  props:{
      href: String,
      disabled:Boolean
  },
  methods:{
      goToLocation: function () {
        if (!this.disabled)
          location.href=this.href
    }
  }
}

</script>

<style>


.item-container{

    float:left;
    margin-top: 4px;
    cursor: pointer;
    padding:0 0.5rem 0 0.5rem;
    opacity: 0.6;
}

.item-container:hover{
    opacity: 1;
}

.disabled{
    opacity: 0.4;
    cursor: default;
}
.disabled:hover{
    opacity: 0.4;
}

</style>