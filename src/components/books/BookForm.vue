<template>
  <form @submit.prevent="handleSubmit">
    <BaseInput
      v-model="isbn"
      :errorTip="submitted && $v.errors.isbn"
      label="ISBN"
      labelFor="isbn"
    />
    <BaseInput
      v-model="title"
      :errorTip="submitted && $v.errors.title"
      label="Title"
      labelFor="title"
    />
    <BaseInput
      v-model="author"
      :errorTip="submitted && $v.errors.author"
      label="Author"
      labelFor="author"
    />
    <BaseInput
      v-model="publicationDate"
      :errorTip="submitted && $v.errors.publicationDate"
      label="Publication Date"
      type="date"
    />
    <BaseInput
      v-model="description"
      :errorTip="submitted && $v.errors.description"
      textarea
      label="Description"
      labelFor="desc"
    />
    <button :style="{width: '100%'}">Submit</button>
  </form>
</template>

<script>
import BaseInput from '../global/BaseInput';

const requiredValidate = val => val.toString().trim().length > 0;
const requiredMessage = key => `${key} is required`;

export default {
  components: { BaseInput },
  props: {
    initialValues: {
      type: Object,
      default: () => ({
        isbn: '',
        title: '',
        description: '',
        author: '',
        publicationDate: ''
      })
    }
  },
  data() {
    return {
      ...this.initialValues,
      submitted: false
    };
  },
  validations: {
    isbn: {
      validate: (val) => {
        if (!val) return true;
        return /\d{3}-\d{3}-\d{4}-\d{2}-\d{1}/.test(val) || /^\d{13}$/.test(val);
      },
      message: (key, val) => `invalid ${key}: ${val}`
    },
    title: {
      validate: requiredValidate,
      message: requiredMessage
    },
    author: {
      validate: requiredValidate,
      message: requiredMessage
    },
    description: {
      validate: requiredValidate,
      message: requiredMessage
    },
    publicationDate: {
      validate: val => /\d{4}-\d{2}-\d{2}/.test(val),
      message: key => `invalid ${key}`
    }
  },
  methods: {
    handleSubmit() {
      if (!this.submitted) this.submitted = true;
      if (!this.$v.valid) return;
      this.$emit('onSubmit', {
        isbn: this.isbn,
        title: this.title,
        author: this.author,
        publicationDate: this.publicationDate,
        description: this.description
      });
    }
  }
};
</script>

<style lang="scss">
  form {
    width: 500px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 20px;
  }
</style>
