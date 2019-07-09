<template>
  <div>
    <h5>
      Title
    </h5>
    <b-form-input
      :value="value.title"
      placeholder="Title"
      type="text"
      :state="isvalid.title"
      @input="update($event, 'title')"
    ></b-form-input>
    <h5>
      Author
    </h5>
    <b-form-input
      :value="value.author"
      placeholder="Author"
      type="text"
      :state="isvalid.author"
      @input="update($event, 'author')"
    ></b-form-input>
    <h5>
      Create At
    </h5>
    <b-form-input
      :value="value.publicationDate"
      placeholder="Create At"
      type="date"
      :state="isvalid.publicationDate"
      @input="update($event, 'publicationDate')"
    ></b-form-input>
    <h5>
      Description
    </h5>
    <b-form-textarea
      :value="value.description"
      placeholder="Description"
      rows="6"
      :state="isvalid.description"
      @input="update($event, 'description')"
    ></b-form-textarea>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default () {
        return {
          title: '',
          author: '',
          description: '',
          publicationDate: ''
        }
      }
    }
  },
  computed: {
    allValid () {
      for (let n in this.isvalid) {
        if (!this.isvalid[n]) {
          return false
        }
      }
      return true
    },
    isvalid () {
      return {
        title: this.value.title.trim() !== '',
        author: this.value.author.trim() !== '',
        publicationDate: Boolean(this.value.publicationDate),
        description: this.value.description.trim() !== ''
      }
    }
  },
  methods: {
    update (e, type) {
      const clone = Object.assign({}, this.value)
      clone[type] = e
      this.$emit('input', clone)
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  margin-bottom: 1rem;
}
</style>
