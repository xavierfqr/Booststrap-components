<template lang="html">
  <div class="tabs-container" :class="[{'tabs-container-vertical': vertical}, {'tabs-container-card': card}, {'tabs-container-end': end}]" :style="[end ? vertical ? {'flex-direction': 'row-reverse'} : {'flex-direction': 'column-reverse'} : '']">
    <div class='tabs-header' :class="align" :style="[card && !vertical ? {'padding-bottom': 0} : '']">
      <div class="tabs-header-filler" v-if="!vertical"></div>
      <div v-for='(tab, idx) in tabs' 
        :key='idx'
        @click='selectTab(idx)' 
        class="tab"
        :class="[tab.isActive ? 'tab-active' : 'tab-unactive', {'tab-disabled' : tab.disabled}]">
        {{ tab.title }}
      </div>
    </div>
    <div class="tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vertical: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'left'
    },
    card: {
      type: Boolean,
      default: false
    },
    end: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selectedIndex: 0, // the index of the selected tab,
      tabs: []
    }
  },
  created () {
    this.tabs = this.$children
  },
  mounted () {
      this.tabs.forEach((tab, idx) => {
        if (tab.isActive) {
          this.selectedIndex = idx
        }
      })
  },
  methods: {
    selectTab (index) {
      this.selectedIndex = index
      
      // loop over all the tabs
      this.tabs.forEach((tab, idx) => {
        tab.isActive = (index == idx)
      })
    }
  }
}
</script>

<style>

  .tab-disabled {
    pointer-events: none; 
    opacity: 0.6;    
    color: #212529 !important;
  }

  .tabs-container {
    display: flex;
    flex-direction: column;
    margin: 1.5rem;
  }

  .tabs-container-vertical {
    flex-direction: row;
    border: 1px solid #e9ecef;
    border-radius: .25rem;
  }

  .tabs-container-vertical .tabs-header {
    flex-direction: column;
  }

  .tabs-container-vertical .tabs-header .tab {
    border-bottom-style: none;
    border-bottom: 1px solid transparent;
  }

  .tabs-container-vertical .tabs-header .tab:hover {
    border-bottom: 1px solid #e9ecef;
  }

  .tabs-container-card {
    border: 1px solid #e9ecef;
    border-radius: .25rem;
  }

  .tabs-container-card .tabs-header {
    padding: .75rem .5rem;
    border-bottom: none;
    background-color: rgba(0,0,0,.03);
  }
  
  .tabs-container-end {
    border: 1px solid #e9ecef;
    border-radius: .25rem;
  }
  
  .tabs-header {
    display: flex;
    position: relative;
  }

  .center {
    justify-content: center;
  }

  .right {
    justify-content: flex-end;
  }

  .tabs-header-filler {
    position: absolute;
    z-index: 0;
    right: 0;
    left: 0;
    bottom: 0;
    border-bottom: 1px solid #e9ecef;
  }

  .tab {
    padding: .5rem 1rem;
    cursor: pointer;
  }

  .tab-unactive {
    color: #007bff;
    border: 1px solid transparent;
    border-bottom-color: #e9ecef;;
  }

  .tab-unactive:hover {
    color:#0056b3;
    border-color: #e9ecef;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  .tab-active {
    z-index: 1;
    background-color: white;
    color: #495057;
    border: 1px solid #e9ecef;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    border-bottom-color: transparent;
  }
  
  .tabs-content {
    width: 100%;
    padding: 0 .5rem;
  }

</style>