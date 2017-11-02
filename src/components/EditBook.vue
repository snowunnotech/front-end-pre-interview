<template>
  <div>
    <md-toolbar class="md-warn">
      <md-button class="nav-text" @click="backhandler">Back</md-button>
      <h2 class="md-title nav-text" style="flex: 1">Edit book</h2>
      <md-button class="nav-text" @click="savehandler">Save</md-button>
      <md-dialog-alert :md-content-html="contentHtml" :md-ok-text="alert.ok" ref="dialog"></md-dialog-alert>
      <md-dialog-alert :md-content-html="contentHtml" :md-ok-text="alert.ok" @close="backhandler" ref="dialog2"></md-dialog-alert>
    </md-toolbar>
    <div class="editbook" v-if="ok === 1">
      <md-layout md-align="center" md-gutter="true">
        <md-layout md-flex="70">
          <md-layout md-column md-gutter>
            <form novalidate @submit.prevent="validateBeforeSubmit">
              <md-card class="inputcard">
                <md-card-content>
                  <md-input-container md-inline md-clearable :class="{'md-input-invalid': errors.has('title')}">
                    <md-icon>book</md-icon>
                    <label>Title</label>
                    <md-input v-model="title" v-validate="'required'" data-vv-value-path="innerValue" data-vv-name="title" required></md-input>
                    <md-tooltip md-delay="400" md-direction="top">The title of the book.</md-tooltip>
                    <span v-show="errors.has('title')" class="md-error">{{ errors.first('title') }}</span>
                  </md-input-container>
                </md-card-content>
              </md-card>
              <md-card class="inputcard">
                <md-card-content>
                  <md-input-container md-inline md-clearable :class="{'md-input-invalid': errors.has('author')}">
                    <md-icon>face</md-icon>
                    <label>Author</label>
                    <md-input v-model="author" v-validate="'required'" data-vv-value-path="innerValue" data-vv-name="author" required></md-input>
                    <md-tooltip md-delay="400" md-direction="top">The author of this content or rating.</md-tooltip>
                    <span v-show="errors.has('author')" class="md-error">{{ errors.first('author') }}</span>
                  </md-input-container>
                </md-card-content>
              </md-card>
              <md-card class="inputcard">
                <md-card-content>
                  <md-input-container md-inline md-clearable :class="{'md-input-invalid': errors.has('time')}">
                    <md-icon>access_time</md-icon>
                    <label>Create at (e.g. 2017-10-31)</label>
                    <md-input v-model="time" v-validate="'required|date_format:YYYY-MM-DD'" data-vv-value-path="innerValue" data-vv-name="time"  required></md-input>
                    <md-tooltip md-delay="400" md-direction="top">The date on which the CreativeWork was created or the item was added to a DataFeed.</md-tooltip>
                    <span v-show="errors.has('time')" class="md-error">{{ errors.first('time') }}</span>
                  </md-input-container>
                </md-card-content>
              </md-card>
              <md-card class="inputcard">
                <md-card-content>
                  <md-input-container md-inline md-clearable :class="{'md-input-invalid': errors.has('desc')}">
                    <md-icon>mode_edit</md-icon>
                    <label>Description</label>
                    <md-textarea v-model="desc" v-validate="'required'" data-vv-value-path="innerValue" data-vv-name="desc" maxlength="400" required></md-textarea>
                    <md-tooltip md-delay="400" md-direction="top">A description of the item.</md-tooltip>
                    <span v-show="errors.has('desc')" class="md-error">{{ errors.first('desc') }}</span>
                  </md-input-container>
                </md-card-content>
              </md-card>
            </form>
            <div v-if="formSubmitted">
              <h1>Success !</h1>
            </div>
          </md-layout>
        </md-layout>
      </md-layout>
    </div>
    <div v-else class="spin">
      <md-spinner md-indeterminate class="md-warn"></md-spinner>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'EditBook',
  data () {
    return {
      id: -1,
      title: '',
      author: '',
      time: '',
      desc: '',
      ok: -1,
      formSubmitted: false,
      putBody: {},
      alert: {
        content: 'Waiting...',
        ok: 'Okay!'
      }
    }
  },
  created () {
    this.id = this.$route.params.id
    this.fetchData(this.$route.params.id)
  },
  methods: {
    fetchData (id) {
      axios.get('https://demo.api-platform.com/books/' + id)
      .then(response => {
        this.title = response.data.title
        this.author = response.data.author
        this.time = response.data.publicationDate.substring(0, 10)
        this.desc = response.data.description
        this.ok = 1
      })
      .catch(e => this.errors.push(e))
    },
    backhandler () { this.$router.go(-1) },
    openDialog (ref) { this.$refs[ref].open() },
    closeDialog (ref) { this.$refs[ref].close() },
    savehandler () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.alert.content = 'Waiting...'
          this.alert.ok = 'OK'
          this.saveBook()
          this.openDialog('dialog2')
        } else {
          this.alert.content = 'Invalid input! Be more careful!'
          this.alert.ok = 'Back'
          this.openDialog('dialog')
        }
      })
    },
    saveBook () {
      this.putBody = {
        title: this.title,
        author: this.author,
        publicationDate: this.time,
        description: this.desc
      }
      console.log('https://demo.api-platform.com/books/' + this.id.toString())
      axios.put('https://demo.api-platform.com/books/' + this.id.toString(), this.putBody)
      .then(response => {
        console.log(response.data)
        this.alert.content = 'PUT SUCCESS!'
      })
      .catch(e => {
        this.alert.content = 'Sorry ! Fetch server failed !'
      })
    }
  },
  computed: {
    contentHtml () {
      return '<span class="md-headline"><center>' + this.alert.content + '</center></span>'
    }
  }
}
</script>
<style scoped>
.nav-text {
  color: white; 
}

.inputcard {
  margin-top: 10px;
}

.editbook {
  margin-top: 20px;
}

.spin {
  margin-top: 20px;
}
</style>
