<template>
    <div class="breadcrumb-container">
        <div class="breadcrumb-item" v-for="(item, idx) in items" :key="idx">
            <div class="separator" v-if="idx > 0">/</div>
            <a :href="item.href" :class="[item.active ? 'breadcrumb-active' : 'breadcrumb-link']">{{item.text}}</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items : {
            type: Array,
            required: true 
        }
    }
}
</script>

<style>

.breadcrumb-container {
    margin: 1rem;
    padding: 1rem;
    border-radius: 0.25rem;
    background-color: #e9ecef;
}

.separator {
    display: inline;
    margin: 0 .5rem;
    color: #6c757d;
}

.breadcrumb-item { 
    display: inline;
}

.breadcrumb-link {
    text-decoration: none;
    color: #007bff;
}

.breadcrumb-link:hover {
    text-decoration: underline;
    color: #0056b3;
}

.breadcrumb-active {
    text-decoration: none;
    color: #6c757d;
}

</style>