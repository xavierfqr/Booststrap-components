<template>
  <div class="modal-window" :class="[{center: centered}, size]" v-if="showModal">
    <div class="modal-header" v-if="!hideHeader">
      <label class="modal-title">{{ title }}</label>
      <span class="modal-quit" @click="showModal = false">X</span>
    </div>
    <div class="modal-body">
      <span class="modal-text"><slot /></span>
    </div>
    <div class="modal-footer" v-if="!hideFooter">
      <button class="btn btn-secondary" @click="showModal = false">Cancel</button>
      <button class="btn btn-primary" @click="showModal = false">OK</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
    centered: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "md",
    },
    "hide-header": {
      type: Boolean,
      default: false,
    },
    "hide-footer": {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.modal-window {
  position: absolute;
  z-index: 2;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: white;
}

.sm {
  width: 30%;
}

.md {
  width: 50%;
}

.lg {
  width: 70%;
}

.modal-header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-title {
  font-size: 1.25rem;
}

.modal-quit {
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.modal-quit:hover {
  color: rgba(0, 0, 0, 0.7);
}

.modal-body {
  padding: 1rem;
}

.btn {
  font-size: 1rem;
  border-radius: .25rem;
  box-shadow: none;
  color: white;
  border: none;
  cursor: pointer;
  padding: .5rem;
  margin: .25rem
}

.btn-primary {
  background-color: #007bff;
}

.btn-primary:hover {
  background-color: #006bff;
}

.btn-secondary {
  background-color: #6c757d;
}

.btn-secondary:hover {
  background-color: #5c656d;
}

.modal-footer {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: .5rem;
  text-align: right;
  bottom: 0;
}

.center {
  left: 50%;
  transform: translateX(-50%);
}
</style>