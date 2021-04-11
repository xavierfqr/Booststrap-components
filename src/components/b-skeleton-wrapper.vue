<template>
    <div class="skeleton-container">
        <div class="skeleton-header">
            <div class="skeleton-progress">
                <b-progress :value="progressValue" show-progress :variant="variant"/>
            </div>
            <div class="btn-reload" @click="reload()">Reload</div>
        </div>
        <slot name="loading" v-if="isLoading"/>
        <slot v-if="!isLoading"/>
    </div>
</template>


<script>

import bProgress from "./b-progress";

export default {
    components: {
        bProgress
    },
    props: {
        variant: {
            type: String
        }
    },
    data() {
        return {
            progressValue: 100,
            isLoading: true 
        }
    },
    methods: {
        async reload() {
            this.isLoading = true

            this.progressValue = 0
            let p2 = () => new Promise(resolve => setTimeout(() => resolve(33.33), 1000))
            let p3 = () => new Promise(resolve => setTimeout(() => resolve(66.66), 1000))
            let p4 = () => new Promise(resolve => setTimeout(() => resolve(100), 1000))
            this.progressValue = await p2()
            this.progressValue = await p3()
            this.progressValue = await p4()
            await p4()

            this.isLoading = false
        }
    },
    mounted() {
        this.reload()
    }
}
</script>

<style>

.skeleton-container {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border: .2rem solid rgba(0, 0, 0, .05);
}

.skeleton-header {
    display: flex;
    align-items: center;
}

.skeleton-progress {
    width: 90%;
}

.btn-reload {
    padding: .5rem;
    border-radius: 0.25rem;
    box-shadow: none;
    color: white;
    cursor: pointer;
    background-color: #6c757d;
}

.btn-reload:hover {
    background-color: #5c656d;
}

</style>