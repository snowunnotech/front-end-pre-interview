<template>
  <div class="modal fade" id="modal" tabindex="-1" data-backdrop="static">
    <ValidationObserver ref="form">
      <div class="modal-dialog" role="document">
        <form @submit.prevent="done">
          <div class="modal-content">
            <div class="modal-header">
              <div class="form-row flex-column w-100">
                <ValidationProvider name="title" rules="required" v-slot="{ errors }">
                  <label for="title">Title</label>
                  <input
                    id="title"
                    name="title"
                    class="form-control"
                    type="text"
                    v-model="book.title"
                    placeholder="請輸入書名"
                  />
                  <span class="text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>
            <div class="modal-body">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <ValidationProvider name="author" rules="required" v-slot="{ errors }">
                    <label for="author">Author</label>
                    <input
                      id="author"
                      name="author"
                      class="form-control"
                      type="text"
                      v-model="book.author"
                      placeholder="請輸入作者"
                    />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="form-group col-md-6">
                  <ValidationProvider name="publicationDate" rules="required" v-slot="{ errors }">
                    <label for="publicationDate">Publication date:</label>
                    <input
                      id="publicationDate"
                      class="form-control"
                      type="date"
                      v-model="book.publicationDate"
                    />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>

              <ValidationProvider name="description" rules="required" v-slot="{ errors }">
                <textarea
                  class="w-100"
                  cols="30"
                  rows="10"
                  v-model="book.description"
                  placeholder="請在此填寫敘述 ..."
                ></textarea>
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-outline-danger mr-auto" @click="deleteBook">
                刪除
              </button>
              <button type="button" class="btn btn-secondary" @click="closeModal">關閉</button>
              <button type="submit" class="btn btn-warning px-5">送出</button>
            </div>
          </div>
        </form>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
import $ from 'jquery';
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', { ...required, message: '此欄位不得為空' });
export default {
  data() {
    return {
      state: '',
      book: {},
    };
  },
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  methods: {
    editBook() {
      $('#modal').modal('show');
      this.state = 'edit';
      this.book = { ...this.$store.state.Book.book };
    },
    newBook() {
      this.book = {};
      this.state = 'new';
      $('#modal').modal('show');
    },
    done() {
      return this.state === 'edit' ? this.editDone() : this.newBookDone();
    },
    editDone() {
      const vm = this;
      const api = `${process.env.VUE_APP_CUSTOMPATH}/edit/${vm.book.isbn}`;
      vm.$store.commit('CHANGELOADING', true);
      vm.axios
        .post(api, vm.book)
        .then(() => {
          $('#modal').modal('hide');
        })
        .then(() => {
          setTimeout(() => {
            vm.$store.dispatch('getBook', vm.book.isbn);
            vm.$store.commit('CHANGELOADING', false);
          }, 2000);
        });
    },
    newBookDone() {
      const vm = this;
      const api = `${process.env.VUE_APP_CUSTOMPATH}/new`;
      vm.$store.commit('CHANGELOADING', true);
      vm.axios
        .post(api, vm.book)
        .then(() => {
          $('#modal').modal('hide');
        })
        .then(() => {
          setTimeout(() => {
            vm.$store.dispatch('getBooks');
            vm.$store.commit('CHANGELOADING', false);
          }, 2000);
        });
    },

    deleteBook() {
      const vm = this;
      const api = `${process.env.VUE_APP_CUSTOMPATH}/delete/${vm.book.isbn}`;
      vm.$store.commit('CHANGELOADING', true);
      vm.axios
        .delete(api)
        .then(() => {
          $('#modal').modal('hide');
        })
        .then(() => {
          setTimeout(() => {
            vm.$store.commit('CHANGELOADING', false);
            vm.$router.push('/');
          }, 2000);
        });
    },
    closeModal() {
      $('#modal').modal('hide');
      // 清除錯誤訊息
      this.$refs.form.reset();
    },
  },
};
</script>
