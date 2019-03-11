<template>
  <div class="info">
    <form>
      <template v-for="(field, key) in fields">
        <input :type="field.type" :class="{ error: isError(key) }"
               :placeholder="field.name"
               v-on="field.onFocus ? { focus: field.onFocus } : {}"
               v-model="field.value" v-if="field.type != 'textarea'" />
        <textarea :class="{ error: isError(key) }"
               :placeholder="field.name"
               v-model="field.value" v-else></textarea>
      </template>
      <button class="delete" v-if="is.edit()" @click="deleteThis">Delete</button>
    </form>
    <Loading v-if="isLoading" />
    <div class="errors">
      <p v-if="errors.length">Error!</p>
      <transition-group name="list" tag="ul">
        <li :key="error.field" :style="`--delay: .${i * 1}s`" v-for="(error, i) in errors">{{error.msg}}</li>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import Loading from '@/components/Loading.vue'

export default {
  name: 'BookInfo',
  props: {
    backPage: String,
    barTitle: String,
    book: Object,
  },
  components: {
    Loading
  },
  data() {
    return {
      fields: {
        title: {
          type: 'text',
          name: 'Title',
          value: '',
          required: true
        },
        author: {
          type: 'text',
          name: 'Author',
          value: '',
          required: true
        },
        date: {
          type: 'text',
          name: 'Created at',
          value: '',
          required: true,
          // Y: 1XXX, 2XXX; M: 0X, 10~12; D: 0X~2X, 30~31
          pattern: /^([12]\d{3})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
          onFocus(e) {
            e.target.type = 'date'
          }
        },
        desc: {
          type: 'textarea',
          name: 'Description',
          value: '',
          required: true
        }
      },
      errors: [],
      booooks: []
    }
  },
  mounted() {
    this.setBar({
      pos: 'left',
      text: 'Back',
      path: this.backPage
    })
    this.setBar({
      pos: 'center',
      text: this.barTitle
    })
    this.setBar({
      pos: 'right',
      text: 'Save',
      func: this.submit
    })
    if(this.is.edit() && this.book) {
      this.fields.title.value = this.book.attributes.title
      this.fields.author.value = this.book.attributes.author
      this.fields.date.value = this.book.attributes.publicationDate.split('T')[0]
      this.fields.desc.value = this.book.attributes.description
    }
  },
  methods: {
    isError(field) {
      const error = this.errors.find(error => error.field == field)
      return error !== undefined
    },
    submit() {
      this.errors = []
      this.$nextTick(() => {
        if(this.validate()) {
          this.disableBar({ pos: 'right' })
          const method = this.is.add() ? 'addBook' : 'updateBook'
          const params = {
            title: this.fields.title.value,
            desc: this.fields.desc.value,
            author: this.fields.author.value,
            date: this.fields.date.value
          }
          if(this.is.edit())
            params['id'] = this.$route.params.id
          this[method](params).then(response => {
            this.clearBooks()
            const id = this.getRealId(response.id)
            this.$router.push('/book/' + id)
          })
        }
      })
    },
    validate() {
      const fieldKeys = Object.keys(this.fields)
      fieldKeys.forEach((name, i) => {
        const field = this.fields[name];
        if(field.required && !field.value) {
          this.errors.push({
            field: fieldKeys[i],
            msg: `"${field.name}" field is required.`
          })
          return
        }
        if(field.pattern && !field.pattern.test(field.value)) {
          this.errors.push({
            field: fieldKeys[i],
            msg: `"${field.name}" field has wrong value.`
          })
          return
        }
      })
      return this.errors.length == 0
    },
    deleteThis() {
      this.deleteBook({
        id: this.$route.params.id
      }).then(response => {
        this.clearBooks()
        this.$router.push('/')
      })
    },
    getRealId(id) {
      return id.match(/books\/([a-z0-9-]+)/)[1]
    },
    ...mapActions('books', [
      'addBook',
      'updateBook',
      'deleteBook'
    ]),
    ...mapMutations('books', [
      'clearBooks',
      'clearBook'
    ]),
    ...mapActions('bar', {
      setBar: 'set',
      clearBar: 'clearAll',
      disableBar: 'disable'
    })
  },
  computed: {
    is() {
      return {
        add: () => this.$route.name == 'add',
        edit: () => this.$route.name == 'edit'
      }
    },
    ...mapState('books', [
      'isLoading'
    ])
  }
}
</script>

<style lang="scss" scoped>
.info {
  --danger: #F44336;
  max-width: 600px;
}
form {

  > * {
    font-size: 15px;
    background: #FFF;
    margin-bottom: 10px;
    padding: 0 10px;
    width: 100%;
    height: 36px;
    line-height: 36px;
    display: block;
    border: 1px solid #EEE;
    border-radius: 3px;
    transition: border .1s linear;
  }
  textarea {
    padding: 10px;
    line-height: 20px;
    height: 130px;
    resize: none;
  }
  .delete {
    color: #FFF;
    background: var(--danger);
    cursor: pointer;
  }
  .error {
    border-color: var(--danger);
    animation: shake .2s linear 2;
  }
}
@keyframes shake {
  0% { transform: translateX(-8px); }
  50% { transform: translateX(8px); }
  100% { transform: translateX(-8px); }
}
.errors {
  p {
    font-size: 18px;
    font-weight: bold;
    color: var(--danger);
  }
  ul {
    margin-top: 5px;
  }
  li {
    list-style-position: inside;
    line-height: 22px;
  }
}
.list-leave-active {
  display: none;
}
</style>
