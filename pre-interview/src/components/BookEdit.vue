<template>
  <div class="book-edit">
    <form class="edit">
      <div class="edit-input">
        <label for="author">
          <input id="author" type="text" v-model="author" @focus="handle_focus('author')" @blur="handle_blur('author')">
        </label>
      </div>
      <div class="edit-input">
        <label for="createDate">
          <input id="createDate" type="text" v-model="createDate" @focus="handle_focus('createDate')" @blur="handle_blur('createDate')">
        </label>
      </div>
      <div class="edit-input">
        <textarea name="book" cols="30" rows="10"></textarea>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'BookEdit',
  data () {
    return {
      author: 'Author',
      createDate: 'Created at'
    }
  },
  methods: {
    ...mapActions([
      'onEdited',
      'endEdited'
    ]),
    handle_focus (data) {
      this[data] = ''
    },
    handle_blur (data) {
      if (!this[data].length) {
        switch (data) {
          case 'author':
            this[data] = 'Author'
            break
          case 'createDate':
            this[data] = 'Created at'
        }
      }
    }
  },
  mounted () {
    console.log(this)
    this.onEdited()
  },
  beforeDestroy () {
    this.endEdited()
  }
}
</script>

<style lang="scss" scoped>
.book-edit{
 width: 100%;
}
.edit-input{
  width: 100%;
  margin-bottom: 12px;
  color: #A7A7A7;
  input{
    border: none;
    border-radius: 4px;
    padding: 12px;
    width: 100%;
    font-size: 16px;
    color: inherit;
    &:focus{
      outline: none;
    }
  }
  textarea{
    border: none;
    width: 100%;
    padding: 12px;
    resize: none;
    color: inherit;
    &:focus{
      outline: none;
    }
  }
}

</style>
