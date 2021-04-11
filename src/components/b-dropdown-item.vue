<template>
    <div class="dropdown-item" :class="{'dropdown-active': active, 'dropdown-disabled': disabled}">
        <slot />
    </div>
</template>

<script>
export default {
    name: "b-dropdown-item",
    props: {
        active: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>

    .dropdown-item {
        text-align: left;
        padding: 0.25rem 1.5rem;
        font-weight: 500;
        cursor: pointer;
        white-space: nowrap;
    }

    .dropdown-item:hover {
        background-color: #f8f9fa;
    }

    .dropdown-active {
        background-color: #007bff;
        color: white;
    }
    .dropdown-active:hover {
        background-color: #007bff;
    }


    .dropdown-disabled {
        color: rgba(0, 0, 0, .5);
        pointer-events: none;
    }
</style>