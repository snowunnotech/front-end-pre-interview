<template>
  <div class="newBook">
    <div class="col-12 py-4">
      <validation-observer
        ref="observer"
        v-slot="{ invalid }"
      >
        <div class="input-group mb-3 flex-wrap">
          <p class="input-customTitle">
            ISBN
          </p>
          <input
            v-model="form.isbn"
            type="text"
            class="form-control"
            aria-label="isbn input"
            placeholder="isbn"
          >
        </div>
        <div class="input-group mb-3">
          <p class="input-customTitle">
            Title
          </p>
          <validation-provider
            v-slot="{ errors }"
            rules="required"
            class="validate"
          >
            <input
              v-model="form.title"
              type="text"
              class="form-control"
              aria-label="title Input"
              placeholder="title"
              @change="output(invalid)"
            >
            <span>{{ errors[0] }}</span>
          </validation-provider>
        </div>
        <div class="input-group mb-3">
          <p class="input-customTitle">
            Description
          </p>
          <validation-provider
            v-slot="{ errors }"
            rules="required"
            class="validate"
          >
            <input
              v-model="form.description"
              type="text"
              class="form-control"
              aria-label="description Input"
              placeholder="description"
              @change="output(invalid)"
            >
            <span>{{ errors[0] }}</span>
          </validation-provider>
        </div>
        <div class="input-group mb-3">
          <p class="input-customTitle">
            Author
          </p>
          <validation-provider
            v-slot="{ errors }"
            rules="required"
            class="validate"
          >
            <input
              v-model="form.author"
              type="text"
              class="form-control"
              aria-label="Author Input"
              placeholder="Author"
              @change="output(invalid)"
            >
            <span>{{ errors[0] }}</span>
          </validation-provider>
        </div>
        <div class="input-group mb-3">
          <p class="input-customTitle">
            Publication Date
          </p>
          <validation-provider
            v-slot="{ errors }"
            rules="required"
            class="validate"
          >
            <input
              v-model="form.publicationDate"
              type="text"
              class="form-control"
              aria-label="publicationDate input"
              placeholder="publicationDate"
              @change="output(invalid)"
            >
            <span>{{ errors[0] }}</span>
          </validation-provider>
        </div>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'NewBook',
  data () {
    return {
      // form: {
      //   isbn: '',
      //   title: '',
      //   description: '',
      //   author: '',
      //   publicationDate: '',
      //   reviews: {}
      // }
    }
  },
  computed: {
    ...mapState({
      form: state => state.form.form
    })
  },
  async created () {
    if (this.$route.name !== 'newBook') {
      await this.getBookInfo(this.$route.params.id) // 取得書本資料
      await this.setBookinfoTOForm() // 將書本資料塞進表單
      this.output(false) // 只要是進到 edit 頁，一律先預設通過驗證表單
    }
  },
  beforeDestroy () {
    this.initForm()
  },
  methods: {
    ...mapActions({
      initForm: 'form/initForm',
      setBookinfoTOForm: 'form/setBookinfoTOForm',
      getBookInfo: 'book/getBookInfo',
      changeFormStatus: 'form/changeFormStatus'
    }),
    output (inValid) {
      this.changeFormStatus(inValid)
    }
  }

}
</script>

<style lang="scss" scoped>
  .input{
    &-customTitle {
      width: 100%;
    }
  }
  .validate{
    width: 100%;
    color: red;
  }
</style>
