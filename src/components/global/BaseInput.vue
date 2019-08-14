<template>
  <div class="form-group">
    <label
      v-if="label"
      :for="labelFor"
      class="form-group__label"
    >
      {{ label }}
    </label>
    <textarea
      v-if="textarea"
      v-model="val"
      :id="labelFor"
      cols="30"
      rows="10"
    />
    <input
      v-else
      v-model="val"
      :type="type"
      :name="name"
      :id="labelFor"
      :placeholder="placeholder"
      class="form-group__input"
    />
    <span
      v-if="errorTip"
      class="form-group__error-tip"
    >
      {{ errorTip }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    labelFor: {
      type: String,
      default: ''
    },
    errorTip: {
      type: [String, Boolean],
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: 'write something...'
    },
    textarea: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    val: {
      get() { return this.value; },
      set(val) { this.$emit('input', val); }
    }
  }
};
</script>

<style lang="scss">
  .form-group {
    display: flex;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    &__label {
      display: inline-block;
      width: 100px;
    }
    &__error-tip {
      display: inline-block;
      margin-left: 10px;
      color: red;
    }
  }
</style>
