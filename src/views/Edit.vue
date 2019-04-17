<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="wrap">
            <nav class="Content__P">
                <div class="back" @click="backData">Back</div>
                <div class="Content__title" v-if="isNew">Add new book</div>
                <div class="Content__title" v-else>{{tempData.title}}</div>
                <div class="edit" @click="updateData">Save</div>
            </nav>
            <section class="Edit__b">
                <div class="Edit">
                    <input type="text" placeholder="Author" v-model="tempData.author"
                    v-validate="'required'" name="name">
                    <span class="text-danger" v-if="errors.has('name')">姓名必須輸入</span>
                    <input type="text" placeholder="Created at" v-model="tempData.publicationDate"
                    v-validate="'required'" name="date">
                    <span class="text-danger" v-if="errors.has('date')">時間必須輸入</span>
                    <textarea v-model="tempData.description" v-validate="'required|min:10'" name="msg"></textarea>
                    <span class="text-danger" v-if="errors.has('msg')">內文需超過十個字</span>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      // cid: '',
      // edit: {},
      // isNew: false,
    };
  },
  methods: {
    updateData() {
      this.$validator.validate().then((result) => {
        if (result) {
          this.$store.dispatch('updateData');
          if (this.$store.state.isNew) {
            this.$router.push(`/`);
          } else {
            this.$router.push(`/content/books/${this.$store.state.cid}`);
          }
          console.log(result);
        }
      });
    },
    backData() {
      this.$router.go(-1);
      this.$store.state.isLoading = true;
      setTimeout(() => {
        this.$store.state.isLoading = false;      
      }, 600);
    },
    getSingleData() {
      this.$store.dispatch('postSingleData');
    },
    getDate() {
      const n = Date.now();
      const d = new Date(n);
      const y = d.getFullYear();
      const m = d.getMonth() + 1;
      const dt = d.getDate();
      const hour = d.getHours();
      const min = d.getMinutes();
      const sec = d.getSeconds();
      const minis = d.getMilliseconds();
      const day = `${y}-${m}-${dt}T${hour}:${min}:${sec}.${minis}Z`;
      return day;
    },
  },
  computed: {
    tempData() {
      return this.$store.state.tempData;
    },
    cid() {
      return this.$store.state.cid;
    },
    edit() {
      return this.$store.state.edit;
    },
    isNew() {
      return this.$store.state.isNew;
    },
    author() {
      return this.$store.state.author;
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  watch: {
    'this.$store.state.tempData': 'getSingleData',
  },
  created() {
    this.$store.state.cid = this.$route.query.to;
    if (this.$store.state.cid === undefined) {
      this.$store.state.isNew = true;
      this.$store.state.tempData = {};
    } else {
      this.getSingleData();
      this.$store.state.isNew = false;
    }
    this.$store.state.tempData.publicationDate = this.getDate();
    this.$store.state.isLoading = true;
    setTimeout(() => {
      this.$store.state.isLoading = false;      
    }, 600);
  },
};
</script>
