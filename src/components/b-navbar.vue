<template>
  <div :class="[{container:true}, fixed]">
        <div :class="[{slotContainer:true}, type, computedVariant, {sticky:sticky}]">
            <slot/>
        </div>

  </div>
</template>

<script>

export default {
  name: 'b-navbar',
  props:{
    type:{
        type:String,
        default:"light"
        },
    variant:{
        type:String,
        default:"primary"
    },
    sticky:{
        type:Boolean,
        default: false
    },
    fixed:{
        type:String
    }
  },
  computed:{
      computedVariant(){
        if (this.variant == "light")
            return "variantLight";
        if (this.variant == "dark"){
            return "variantDark";
        }
        return this.variant;
      }
  }
}

</script>

<style scoped>

.container{
    z-index: 10;
    width: 100%;
    background-color: lightblue;
    font-weight: 500;
}

.slotContainer{
    width:100%;
    overflow: hidden;
    padding: 10px;
    text-align: center;
}

.light{
    color:black;
}

.dark{
    color:white;
}

.primary{
    background-color: #007bff;
}

.success{
    background-color: #28a745;
}

.info{
    background-color: #17a2b8;
}

.warning{
    background-color: #ffc107;
}

.danger{
    background-color: #dc3545;
}

.variantLight{
    background-color: #343a40;
}

.variantDark{
    background-color: #f8f9fa;
}

.top{
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
}

.bottom{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
.sticky{
    position: sticky;
}

</style>