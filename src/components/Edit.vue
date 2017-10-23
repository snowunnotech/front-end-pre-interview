<template>
<div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col-3 col-sm-2 text-left">
            <router-link :to="{path: '/book/'+info.id}">Back</router-link>
          </div>
          <div class="col-6 col-sm-8 text-center title">
            <span>{{ info.title }}</span>
          </div>
          <div class="col-3 col-sm-2 text-right">
            <a href="#" @click.prevent="actionSaveBook">Save</a>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
        <form>
            <div class="form-group">
                <input type="text" id="author" name="author" v-validate="'required'" class="form-control {'input': true, 'is-danger': errors.has('author') }" placeholder="Author" :value="info.author" @input="updateAuthor">
                <i v-show="errors.has('author')" class="fa fa-warning"></i>
                <span v-show="errors.has('author')" class="help is-danger">{{ errors.first('author') }}</span>
            </div>
            <div class="form-group">
                <!-- <input type="date" name="publicationDate" name="publicationDate" class="form-control"> -->
                <input type="text" id="publicationDate" name="publicationDate" v-validate="'required|date_format:YYYY/MM/DD'" class="form-control {'input': true, 'is-danger': errors.has('publicationDate') }" placeholder="Created At" :value="info.publicationDate" @input="updatePublicationDate">
                <i v-show="errors.has('publicationDate')" class="fa fa-warning"></i>
                <span v-show="errors.has('publicationDate')" class="help is-danger">{{ errors.first('publicationDate') }}</span>
            </div>
            <div class="form-group">
                <input type="text" id="isbn" name="isbn" v-validate="'required|numeric'" class="form-control {'input': true, 'is-danger': errors.has('isbn') }" placeholder="ISBN" :value="info.isbn" @input="updateIsbn">
                <i v-show="errors.has('isbn')" class="fa fa-warning"></i>
                <span v-show="errors.has('isbn')" class="help is-danger">{{ errors.first('isbn') }}</span>
            </div>
            <div class="form-group">
                <textarea name="description" id="description" v-validate="'required'" class="form-control {'input': true, 'is-danger': errors.has('description') }" cols="30" rows="10" placeholder="Description" :value="info.description" @input="updateDescription"></textarea>
                <i v-show="errors.has('description')" class="fa fa-warning"></i>
                <span v-show="errors.has('description')" class="help is-danger">{{ errors.first('description') }}</span>
            </div>
        </form>
    </div>
</div>
  
</template>

<script>
// 引用 vuex
import { mapGetters, mapActions } from 'vuex'

  export default {
  //edit
    name: 'Edit',
    data () {
      return {
        msg: 'Edit Book',
      }
    },
    created(){
      this.$store.dispatch('actionGetBook', this.$route.params.id);
    },
    computed: {
      ...mapGetters({
        info: 'getBook',
      }),
    },
    methods: {
      actionSaveBook () {
        this.$store.dispatch('saveBook', this.info);
      },
      updateAuthor(e) {
        this.$store.dispatch('updateAuthor', e.target.value);
      },
      updatePublicationDate(e) {
        this.$store.dispatch('updatePublicationDate', e.target.value);
      },
      updateIsbn(e) {
        this.$store.dispatch('updateIsbn', e.target.value);
      },
      updateDescription(e) {
        this.$store.dispatch('updateDescription', e.target.value);
      },
    }
  }

</script>
