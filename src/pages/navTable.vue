<template>
  <div>
    <b-table hover striped :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>


import BTable from '../components/b-table.vue'

export default {
  name: 'navTable',
  components: {
    BTable
  },
  data(){
    return{
        fields:[
          {
            key: 'last_name',
            sortable: true
          },
          {
            key: 'first_name',
            sortable:false
          },
          {
            key: 'age',
            label: 'Person age',
            sortable: true,
            variant: 'danger'
          }
        ],
        items:[
          {age:40, first_name: 'Dickerson', last_name:'Macdonald'},
          {age:21, first_name: 'Larsen', last_name:'Shaw'},
          {age:89, first_name: 'Geneva', last_name:'Wilson'},
          {age:38, first_name: 'Jami', last_name:'Carney'},
        ]
      }
  }
}
</script>

<style>
</style>
