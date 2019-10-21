<template>
  <div>
    <a href="#" class="btn btn-primary add-button"
    data-toggle="modal" data-target="#editmodal">新增書本</a>
    <div class="row">
      <div class="col-lg-4 col-md-6" v-for="(item, index) in bookMembers" :key="index">
          <table class="table table-primary book">
            <thead>
              <tr>
                <td colspan=2 style="padding:0;">
                  <a href="#" class="btn btn-primary rounded-0 book-title"
                  @click.prevent="bookPage(item)">{{item.title}}</a>
                  </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td width="100">作者</td>
                <td>{{item.author}}</td>
              </tr>
              <tr>
                <td>日期</td>
                <td>{{item.publicationDate}}</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
    <!-- Modal -->
        <div class="modal fade" id="editmodal" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title">編輯書本資訊</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="name">書名</label>
                        <input type="text" class="form-control" id="name"
                        v-model="bookTemplate.title"
                        v-validate="'required'"
                        :class="{'is-invalid':errors.has('name')}"
                        name="name"
                        placeholder="請輸入書名">
                        <small class="text-danger" v-if="errors.has('name')">欄位不得為空</small>
                    </div>
                    <div class="form-group">
                        <label for="author">作者</label>
                        <input type="text" class="form-control" id="author"
                        v-model="bookTemplate.author"
                        v-validate="'required'"
                        :class="{'is-invalid':errors.has('author')}"
                        name="author"
                        placeholder="請輸入作者">
                        <small class="text-danger" v-if="errors.has('author')">欄位不得為空</small>
                    </div>
                    <div class="form-group">
                        <label for="isbn">書號</label>
                        <input type="number" class="form-control" id="isbn"
                        v-model="bookTemplate.isbn"
                        v-validate="'required'"
                        :class="{'is-invalid':errors.has('isbn')}"
                        name="isbn"
                        placeholder="">
                        <small class="text-danger" v-if="errors.has('isbn')">欄位不得為空</small>
                    </div>
                    <div class="form-group">
                        <label for="description">書本描述</label>
                        <textarea class="form-control" id="description"
                        v-model="bookTemplate.description"
                        v-validate="'required'"
                        :class="{'is-invalid':errors.has('description')}"
                        name="description"
                        rows="3">
                        </textarea>
                        <small class="text-danger" v-if="errors.has('description')">欄位不得為空</small>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary"
                @click.prevent="addBook">確認送出</button>
            </div>
            </div>
        </div>
        </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      bookTemplate: {
        title: '',
        author: '',
        isbn: '',
        description: '',
      },
    };
  },
  methods: {
    getData() {
      this.$store.dispatch('getData');
    },
    bookPage(item) {
      const newItem = item['@id'].replace('/books/', '');
      this.$store.dispatch('getRecentBook', newItem);
      console.log(newItem);
      this.$router.push({
        path: '/bookpage',
      });
    },
    addBook() {
      this.$store.dispatch('addBook', this.bookTemplate);
    },
  },
  computed: {
    bookData() {
      return this.$store.state.bookData;
    },
    bookMembers() {
      return this.$store.state.bookMembers;
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
  .book{
    box-shadow: 1px 1px 5px grey;
    // border: 1px $secondary solid;
    text-align: left;
    height: 280px;
    opacity: 0.95;
    &-title{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 120px;
      font-size: 24px;
    }
  }
  .form-group{
    text-align: left;
  }
  .add-button{
    font-size: 20px;
    font-weight: 900;
    margin: 20px 0;
  }
</style>
