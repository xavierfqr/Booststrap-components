<template>
    <div class="progress-container">
        <div class="progress-slot">
            <div class="progress" :class="[variant, value == '100' || value == 100 ? 'progress-full' : '' ]" :style="{ width: value+'%' }">
                <div v-if="striped" class="progress-striped" :class="{'strip-animation': animated}"></div>
                <div v-if="showProgress" class="progress-show">{{value+'%'}}</div>
            </div>
            <div class="progress-filler" :style="{ width: 100-value+'%' }"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            default: '0'
        },
        variant: {
            type: String
        },
        'show-progress': {
            type: Boolean,
            default: false
        },
        animated: {
            type: Boolean,
            default: false
        },
        striped: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>

.progress-container {
    margin: 1rem;
}

.progress-slot {
    height: 1rem;
    border-radius: 0.25rem;
    position: relative;
    background-color: #e9ecef;
}

.progress {
    overflow: hidden;
    background-color: #007bff;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    height: 1rem;
    text-align: center;
    position: relative;
    transition: all 1s;
}

.success {
    background-color: #28a745;
}

.info {
    background-color: #17a2b8; 
}

.warning {
    background-color: #ffc107;
}

.danger {
    background-color: #dc3545;
}

.progress-filler {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #e9ecef;
    height: 1rem;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    transition: all 1s;
}

.progress-full {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
}

.progress-show {
    color: white;
    font-size: 0.75rem;
}

.progress-striped {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -100%;
    background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
    background-size: 1rem 1rem;
}

.strip-animation {
    animation: 10s linear infinite strip-animation;
}

@keyframes strip-animation {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-50%);
    }
}

</style>