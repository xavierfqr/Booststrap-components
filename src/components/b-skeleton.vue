<template>
    <div class="progress-container">
        <div class="progress-slot" :class="animation" :style="{ width: width, height: height }" >
        </div>
    </div>
</template>

<script>
export default {
    props: {
        width: {
            type: String,
            required: true
        },
        height: {
            type: String
        },
        animation: {
            type: String,
            default: "wave"
        }
    }
}
</script>

<style>

.progress-container {
    margin: 0.25rem;
}

.progress-slot {
    height: 1rem;
    border-radius: 0.25rem;
    position: relative;
    background-color: #e9ecef;
}
.wave{
    overflow: hidden;
}
.wave:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(90deg,transparent,hsla(0,0%,100%,.4),transparent);
    animation: wave 1.75s linear infinite;
}

.fade {
    animation: fade 0.875s ease-in-out infinite alternate;
}

.throb {
    animation: throb 0.875s ease-in infinite alternate;
}

@keyframes wave {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}

@keyframes fade {
    from {
        opacity: 1;
    }
    to {
        opacity: 0.4;
    }
}

@keyframes throb {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(0.975);
    }
}
</style>