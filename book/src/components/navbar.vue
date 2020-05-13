<template>
  <div id="nav">
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex justify-content-between">
          <p
            v-if="showBackbtn"
            @click="handleBack"
          >
            Back
          </p>
          <h1 class="title">
            {{ title }}
          </h1>
          <p @click="handleFuc">
            {{ editorBtnText }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import { postNewBook, patchBook } from '@/utils/service'
import swal from '@/utils/swal'

export default {
  name: 'Navbar',
  computed: {
    ...mapState({
      bookTitle: state => state.book.info.title,
      bookId: state => state.book.info['@id'],
      form: state => state.form.form,
      inValid: state => state.form.inValid
    }),
    title () {
      if (this.$route.meta.title === '' && this.$route.meta.bookTitle) {
        return this.bookTitle
      }
      return this.$route.meta.title
    },
    editorBtnText () {
      return this.$route.meta.editorBtnText
    },
    showBackbtn () {
      return this.$route.name !== 'home'
    }
  },
  methods: {
    ...mapActions({
      initForm: 'form/initForm',
      setBookinfoTOForm: 'form/setBookinfoTOForm'
    }),

    async handleFuc () {
      if (this.$route.name === 'home') {
        this.$router.push({ name: 'newBook' })
        return
      }

      if (this.$route.name === 'newBook') {
        if (this.inValid) {
          swal.withWrongStyle.fire({ text: `表單資料尚未完成` })
          return
        }
        const result = await swal.withTwoButtons.fire({ text: '確定要儲存了嗎？' })
        if (!result.value) {
          return
        }

        const ret = await postNewBook(this.form)
        console.log('[新增書本]', ret)
        if (ret.success === false) {
          swal.withWrongStyle.fire({ text: `${ret.data['hydra:description']}` })
          return
        }
        swal.withSuccessStyle
          .fire({ text: `success!!!!` })
          .then(() => {
            this.initForm()
            this.$router.push({ name: 'home' })
          })
        return
      }

      if (this.$route.name === 'book') {
        this.$router.push({ name: 'edit', param: { id: `${this.bookId}` } })
        return
      }

      if (this.$route.name === 'edit') {
        if (this.inValid) {
          swal.withWrongStyle.fire({ text: `表單資料尚未完成` })
          return
        }
        const result = await swal.withTwoButtons.fire({ text: '確定更新了嗎？' })
        if (!result.value) {
          return
        }
        const id = this.bookId.split('/').pop()
        const ret = await patchBook(this.form, id)
        if (ret.success === false) {
          swal.withWrongStyle.fire({ text: `${ret.data['hydra:description']}` })
          return
        }
        swal.withSuccessStyle
          .fire({ text: `success!!!!` })
          .then(() => {
            this.initForm()
            this.$router.push({ name: 'home' })
          })
      }
    },

    handleBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  #nav{
    padding: 10px 0;
    background: $mainColor;
    p {
      padding: 8px 0;
      font-size: 1.2rem;
      color: #fff;
    }
  }
  .title{
    font-size: 26px;
    color: #fff;
    align-self: center;
    text-align: center;
    margin: 0;
    @include respond-to(px480) {
      @include txt-overflow(240px)
    }
  }
</style>
