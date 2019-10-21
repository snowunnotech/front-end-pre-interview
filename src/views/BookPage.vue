<template>
    <div>
        <div>
            <a href="#" class="back-button btn btn-primary" style="text-decoration: none;"
            @click.prevent="back">回首頁</a>
            <div class="mx-auto text-left">
                <table class="table table-primary">
                <thead>
                <tr>
                    <td colspan=2 class="p-4">
                        <div class="d-flex align-items-center">
                            <span class="mr-auto">{{recentBook.title}}</span>
                            <a href="#" @click.prevent="openModal"
                            data-toggle="modal" data-target="#editmodal">
                                <i class="fas fa-edit fa-2x"></i>
                            </a>
                        </div>
                    </td>
                </tr>
                </thead>
                <tbody class="bg-white">
                <tr>
                    <td width="100">作者</td>
                    <td>{{recentBook.author}}</td>
                </tr>
                <tr>
                    <td>日期</td>
                    <td>{{recentBook.publicationDate}}</td>
                </tr>
                <tr>
                    <td>書號</td>
                    <td>{{recentBook.isbn}}</td>
                </tr>
                <tr>
                    <td colspan=2>{{recentBook.description}}</td>
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
                        v-validate="'required'"
                        v-model="bookTemplate.title"
                        :class="{'is-invalid':errors.has('tel')}"
                        name="name"
                        placeholder="請輸入書名">
                        <small class="text-danger" v-if="errors.has('name')">欄位不得為空</small>
                    </div>
                    <div class="form-group">
                        <label for="author">作者</label>
                        <input type="text" class="form-control" id="author"
                        v-validate="'required'"
                        v-model="bookTemplate.author"
                        name="author"
                        :class="{'is-invalid':errors.has('tel')}"
                        placeholder="請輸入作者">
                        <small class="text-danger" v-if="errors.has('author')">欄位不得為空</small>
                    </div>
                    <div class="form-group">
                        <label for="isbn">書號</label>
                        <input type="number" class="form-control" id="isbn"
                        v-validate="'required'"
                        v-model="bookTemplate.isbn"
                        :class="{'is-invalid':errors.has('tel')}"
                        name="isbn"
                        placeholder="">
                        <small class="text-danger" v-if="errors.has('isbn')">欄位不得為空</small>
                    </div>
                    <div class="form-group">
                        <label for="description">書本描述</label>
                        <textarea class="form-control" id="description"
                        name="description"
                        v-validate="'required'"
                        :class="{'is-invalid':errors.has('tel')}"
                        v-model="bookTemplate.description" rows="3">
                        </textarea>
                        <small class="text-danger" v-if="errors.has('description')">欄位不得為空</small>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary"
                @click.prevent="editBook">確認送出</button>
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
      bookTemplate: {},
    };
  },
  methods: {
    openModal() {
      this.bookTemplate = Object.assign({}, this.recentBook);
    },
    back() {
      this.$router.push({
        path: '/home',
      });
    },
    editBook() {
      this.$store.dispatch('editbook', this.bookTemplate);
    },
  },
  computed: {
    recentBook() {
      return this.$store.state.recentBook;
    },
  },
};
</script>

<style lang="scss" scoped>
.back-button{
    font-size: 20px;
    font-weight: 900;
    position: absolute;
    top: 15%;
    left: 15%;
    text-decoration: none;
    padding: 5px 10px;
}
table {
    font-size: 24px;
    word-wrap:break-word;
      word-break:break-all;
}
form{
    text-align: left;
}
</style>
