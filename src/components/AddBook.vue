<template>
  <div>
    <ValidationObserver v-slot="{ validate }">
      <div class="row px-3 py-2 bg-warning text-white">
        <div class="button col-1 text-left" @click="back">Back</div>
        <div class="col text-center">
          <p>Edit/Create a book</p>
        </div>
        <div class="button col-1 text-right" @click="validate(saveBtn)">
          <p>Save/Create</p>
        </div>
      </div>

      <div class="back py-4 px-5">
        <label>PublicationDate</label>
        <ValidationProvider
          name="publicationDate"
          rules="required"
          v-slot="{ errors }"
          ><input
            v-model="editBookTemp.publicationDate"
            type="date"
            class="form-control mb-3"
            :class="{ 'is-invalid': errors[0] }"
            placeholder="Create At"
          />
          <span>{{ errors[0] }} </span>
        </ValidationProvider>

        <ValidationProvider name="author" rules="required" v-slot="{ errors }">
          <div class="mb-3">
            <label>Author</label>
            <input
              v-model="editBookTemp.author"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors[0] }"
              placeholder="Author"
            />
            <span>{{ errors[0] }} </span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="title" rules="required" v-slot="{ errors }">
          <div class="mb-3">
            <label>Title</label>
            <textarea
              v-model="editBookTemp.title"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors[0] }"
              rows="10"
              placeholder="title"
            />
            <span>{{ errors[0] }} </span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          name="description"
          rules="required"
          v-slot="{ errors }"
        >
          <div>
            <label>Description</label>
            <textarea
              v-model="editBookTemp.description"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors[0] }"
              rows="10"
              placeholder="description"
            />
            <span>{{ errors[0] }} </span>
          </div>
        </ValidationProvider>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";

export default {
  data() {
    return {
      editBookTemp: {},
      isNew: false
    };
  },
  methods: {
    back() {
      this.$router.push("/");
    },
    saveBtn() {
      this.addBook(this.editBookTemp);
    },
    addBook(book) {
      if (this.isNew) {
        const url = "https://demo.api-platform.com/books";
        axios.post(url, book).then(
          res => {
            if (res.status == 201) {
              swal({ title: "新增成功", icon: "success" }).then(() => {
                this.$router.push("/");
              });
            }
          },
          err => {
            if (err) {
              swal({ title: "新增失敗", icon: "error" });
            }
          }
        );
      } else {
        const bookId = this.editBookTemp["@id"].replace("/books/", "");
        const url = `https://demo.api-platform.com/books/${bookId}`;
        axios
          .patch(url, book, {
            headers: {
              "Content-Type": "application/merge-patch+json"
            }
          })
          .then(
            res => {
              if (res.status == 200) {
                swal({ title: "修改成功", icon: "success" }).then(() => {
                  this.$router.push("/");
                });
              }
            },
            err => {
              if (err) {
                swal({ title: "修改失敗", icon: "error" });
              }
            }
          );
      }
    }
  },
  created() {
    if (Object.keys(this.$route.query).length !== 0) {
      this.editBookTemp = this.$route.query.detail;
      this.editBookTemp.publicationDate = this.editBookTemp.publicationDate.substring(
        0,
        10
      );
      this.isNew = false;
    } else {
      this.editBookTemp.publicationDate = new Date()
        .toISOString()
        .substring(0, 10);
      this.isNew = true;
    }
  }
};
</script>

<style>
.button:hover {
  cursor: pointer;
}

p {
  margin: 0;
}

textarea {
  resize: none;
}
</style>
