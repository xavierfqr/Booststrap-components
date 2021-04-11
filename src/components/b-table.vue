<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th v-for="(field, index) in fields" v-bind:class="{cursor:field.sortable, red:field.variant}" :key="index" @click="sortBy(field)">
                        <span v-if="field.label">{{field.label}}</span>
                        <span v-else>{{displayTitle(field.key)}}</span>
                        <div class="arrow">
                            <div v-if="field.sortable"  :class="{arrowTop : true, topActive : sortOrder[field.key] == 1}"></div>
                            <div v-if="field.sortable" :class="{arrowBot : true, botActive : sortOrder[field.key] == -1}"></div>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="body-row"  v-for="(item, index) in filteredItems" :key="index" @mouseover="setHover(index)" @mouseleave="unsetHover(index)" v-bind:class="{striped:striped}">
                    <td v-for="(field, index) in fields" :key="index" :class="{red:field.variant}">
                        <span>{{item[field.key]}}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
</template>

<script>


export default {
    name:"b-table",
    props:{
        striped:{
            type:Boolean,
            default:false
        },
        hover:{
            type:Boolean,
            default:false
        },
        items:{
            type:Array,
            default: () =>[]
        },
        small:{
            type:Boolean,
            default:false
        },
        fields:{
            type:Array,
            default(){
                return{
                    key:{
                        type:String,
                    },
                    sortable:{
                        type:Boolean,
                    },
                }
            }
        },
    },
    data(){
        var sortOrder = {};
        this.fields.forEach(field => {
            sortOrder[field.key] = 1
        })
        return {
            sortOrder: sortOrder,
            sortField: "",
            isHover: false
        }
    },
    computed:{
        filteredItems(){
            if (this.sortField)
            {
                var res = this.items.slice().sort(this.dynamicSort(this.sortField))
                console.log(res)
                return res;
            }
            return this.items;
        },
    },
    methods:{
        setHover(index){
            if (this.hover)
                document.querySelectorAll("tbody > tr")[index].classList.add("myhover");
        },
        unsetHover(index){
            if (this.hover)
                document.querySelectorAll("tbody > tr")[index].classList.remove("myhover");
        },
        dynamicSort(property) {
            var sortOrder = this.sortOrder[property];

            return function (a,b) {
                console.log(property)
                const varA = (typeof a[property] === 'string')
                ? a[property].toUpperCase() : a[property];
                const varB = (typeof b[property] === 'string')
                ? b[property].toUpperCase() : b[property];

                let comparison = 0;
                if (varA > varB) {
                    comparison = 1;
                } else if (varA < varB) {
                    comparison = -1;
                }
                return comparison * sortOrder;
            }
        },
        displayTitle(title){
            return title.charAt(0).toUpperCase() + title.replace("_", " ").slice(1);
        },
        sortBy(field){
            if (!field.sortable){
                this.sortField = "";
                return;
            }
            this.sortOrder[field.key] = this.sortOrder[field.key] * -1;
            this.sortField = field.key;
        },
    }
}
</script>


<style>

.red{
    background-color: #f5c6cb;
}

.cursor{
    cursor: pointer;
}

.arrowTop{
    border-bottom: 6px solid black;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    margin:1px;
    opacity: 0.5;
}

.arrowBot{
    border-top: 6px solid black;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    margin:1px;
    opacity: 0.5;
}

.topActive{
    opacity: 1;
}

.botActive{
    opacity: 1;
}

.arrow{
    margin-top: 4px;
    display:inline;
    float: right;
}

.striped:nth-child(odd){
    background-color: rgba(230, 230, 230, 0.7)
}

table {
    border-collapse: collapse;
    border-spacing: 0;
    background-color: white;
}

th {
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #ddd;
    font-weight: 900;
}


tr {
    background-color: white;
    height: 35px;
}

.myhover{
    background-color: rgba(230,230,230, 1) !important;
}


th, td {
    border-bottom: 1px solid #ddd;
    min-width: 18rem;
    padding-right: 7px;
    text-align: left;
    padding-left: 7px;
}

table{
    font-weight: 500;
}

</style>