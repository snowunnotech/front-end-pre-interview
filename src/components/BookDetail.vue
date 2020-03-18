<template>
  <div>
    <div class="row px-3 py-2 bg-warning text-white">
      <div class="button col-1 text-left" @click="backBtn">Back</div>
      <div class="col text-center">
        <p>Details</p>
      </div>
      <div class="button col-1 text-right" @click="editBtn(detail)">
        <p>Edit</p>
      </div>
    </div>

    <div class="detail p-3" style="height:100vh">
      <div class="row">
        <div class="col-6 mb-5">Author：{{ detail.author }}</div>
        <div class="col-6 text-right">
          PublicationDate：{{ detail.publicationDate }}
        </div>
        <div class="col-12">Description：{{ detail.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      detail: {}
    };
  },
  methods: {
    getDetail() {
      const bookId = this.$route.params.bookId;
      const url = `https://demo.api-platform.com/books/${bookId}`;
      axios.get(url).then(res => {
        this.detail = res.data;
        this.detail.publicationDate = this.detail.publicationDate.substring(
          0,
          10
        );
      });
    },
    backBtn() {
      this.$router.push("/");
    },
    editBtn(detail) {
      this.$router.push({ path: "/addBook", query: { detail } });
    }
  },
  created() {
    this.getDetail();
  }
};
</script>

<style scoped>
.detail {
  background-color: rgb(235, 235, 235);
}
</style>
