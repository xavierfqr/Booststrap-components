<template>

    <div class="dropdown-container" >
        <div class="dropdown">
            <div class="dropdown-inner" :class="[{'dropdown-left': dropleft}]">
                <div class="dropdown-title dropdown-title-split" :class="[dropleft ? 'border-right' : 'border-left', variant]" v-if="split">{{text}}</div>
                <div class="dropdown-content">
                    <div class="dropdown-header" :class="[split ? 'dropdown-header-split': variant, {'dropdown-left': dropleft}]" @click="drop()">
                        <div class="dropdown-header-content" :class="{'dropdown-left': dropleft}">
                            <div class="dropdown-title" v-if="!split">{{text}}</div>
                            <div class="dropdown-btn" :class="[split ? variant : '', dropleft ? 'border-left' : 'border-right',]">
                                <div :class="{'arrow-down': dropdown, 'arrow-left': dropleft, 'arrow-up': dropup, 'arrow-right': dropright}"></div>
                            </div>
                        </div>
                    </div>
                    <div class="option-list-container" :class="{'drop-up': dropup, 'drop-left': dropleft, 'drop-right': dropright}" v-show="isDropped">
                        <slot/> 
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name:'b-dropdown',
    data() {
        return {
            isDropped: false,
            dropdown: false
        }
    },
    props:{
        text: {
            type:String,
            require:true
        },
        dropup: {
            type: Boolean,
            default: false
        },
        dropright: { 
            type: Boolean, 
            default: false
        },
        dropleft: { 
            type: Boolean,
            default: false
        },
        split: {
            type: Boolean,
            default: false
        },
        variant: {
            type: String,
            default: "primary"
        }
    },
    created() {
        this.dropdown = !(this.dropup || this.dropright || this.dropleft)
    },
    methods: {
        drop() {
            this.isDropped = !this.isDropped
        }
    }
}
</script>

<style>

.dropdown-container {
    text-align: center;
}

.dropdown-left {
    flex-direction: row-reverse;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-inner {
    display: flex;
}

.dropdown-content {
    position: relative;
}

.dropdown-header { 
    cursor: pointer;
    border-radius: .25rem;
}

.dropdown-header-split .dropdown-header-content {
    padding: 0;
}

.dropdown-header-split .dropdown-header-content .dropdown-btn {
    padding: .85rem;
}

.dropdown-header-content {
    display: flex;
    padding: .5rem;
}

.primary {
    background-color: #007bff;
}

.primary:hover {
    background-color: #006bff;
}

.secondary {
    background-color: #6c757d;
}

.secondary:hover {
    background-color: #6c657d;
}

.dropdown-title {
    color: white;
    cursor: pointer;
}

.dropdown-title-split {
    padding: .5rem;
}

.option-list-container{ 
    position: absolute;
    z-index: 2;
    border: 1px solid rgba(0, 0, 0, .1);
    padding: .75rem 0;
    background-color: white;
    border-radius: .25rem;
}

.drop-up {
    bottom: 100%;
}

.drop-left {
    right: 100%;
    top: 0;
}

.drop-right {
    left: 100%;
    top: 0;
}

.dropdown-btn {
    cursor: pointer;
    padding: .35rem .25rem;
}

.border-right {
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
}

.border-left {
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
}

.arrow-down {
    border-top: 7px solid white;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
}

.arrow-right {
    border-left: 6px solid white;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
}

.arrow-left {
    border-right: 6px solid white;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
}

.arrow-up {
    border-bottom: 7px solid white;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
}


</style>