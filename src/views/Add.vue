<template>
  <article class="add">
    <nav class="nav">
      <div class="nav-btn back" @click="back">Back</div>
      <span class="nav-title">Add new book</span>
      <div class="nav-btn save" @click="save">Save</div>
    </nav>
    <section class="input-field">
      <input
        class="input"
        :class="{error: error.title.length>0}"
        type="text"
        placeholder="Title"
        v-model="title"
        @input="validateTitle"
        @blur="checkIsEmpty('title')"
      />
      <span class="errorMsg" v-if="error.title.length>0">{{error.title[0]}}</span>
      <input
        class="input"
        :class="{error: error.author.length>0}"
        type="text"
        placeholder="Author"
        v-model="author"
        @input="validateAuthor"
        @blur="checkIsEmpty('author')"
      />
      <span class="errorMsg" v-if="error.author.length>0">{{error.author[0]}}</span>
      <input
        class="input"
        :class="{error: error.date.length>0}"
        type="text"
        placeholder="dd-mm-yyyy"
        v-model="date"
        @input="formatDate"
        @blur="checkIsEmpty('date')"
      />
      <span class="errorMsg" v-if="error.date.length>0">{{error.date[0]}}</span>
      <textarea
        class="textarea"
        rows="13"
        :class="{error: error.detail.length>0}"
        v-model="detail"
        @input="validateDetail"
        @blur="checkIsEmpty('detail')"
      ></textarea>
      <span class="errorMsg" v-if="error.detail.length>0">{{error.detail[0]}}</span>
    </section>
    <div class="dialog" v-if="isDialogShow">
      <section class="dialog-window">
        <div class="dialog-nav"></div>
        <div class="dialog-content">
          <span class="dialog-msg">{{dialogMsg}}</span>
          <br />
          <div class="dialog-btn" @click="closeDialog">Got it</div>
          <div class="dialog-btn" @click="back">Home</div>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      author: "",
      date: "",
      detail: "",
      error: {
        title: [],
        author: [],
        date: [],
        detail: []
      },
      dialogMsg: "",
      isDialogShow: false
    };
  },
  methods: {
    back() {
      this.$router.back(-1);
    },
    checkIsEmpty(key) {
      if (this[key] === "") {
        this.error[key].push("Required.");
      }
    },
    validateTitle() {
      this.error.title.length = 0;
      if (this.title.length === 0) {
        return this.error.title.push("Required.");
      }
      if (/[^A-Za-z0-9\s]/.test(this.title)) {
        return this.error.title.push("Please enter words only.");
      }
    },
    validateAuthor() {
      this.error.author.length = 0;
      if (this.author.length === 0) {
        return this.error.author.push("Required.");
      }
      if (/[^A-Za-z0-9\s]/.test(this.author)) {
        return this.error.author.push("Please enter words only.");
      }
    },
    formatDate() {
      this.date = this.date.replace(/\D/g, "");
      if (this.date.length > 2) {
        this.date = `${this.date.slice(0, 2)}-${this.date.slice(2)}`;
      }
      // We add a '-' already, so is 5 instaed of 4.
      if (this.date.length > 5) {
        this.date = `${this.date.slice(0, 5)}-${this.date.slice(5)}`;
      }
      this.validateDate();
    },
    validateDate() {
      this.error.date.length = 0;
      if (this.date.length === 0) {
        return this.error.date.push("Required.");
      }

      const dd = +this.date.slice(0, 2);
      if (dd === 0 || dd > 31) {
        return this.error.date.push("No such day.");
      }

      const mm = +this.date.slice(3, 5);
      if (mm === 0 || mm > 12) {
        return this.error.date.push("No such month.");
      }

      const yyyy = +this.date.slice(6);
      if (yyyy === 0 || yyyy > 2120) {
        return this.error.date.push("No such year.");
      }
    },
    validateDetail() {
      this.error.detail.length = 0;
      if (this.detail.length === 0) {
        return this.error.detail.push("Required.");
      }
    },
    save() {
      this.validateTitle();
      this.validateAuthor();
      this.validateDate();
      this.validateDetail();
      if (Object.values(this.error).every(e => e.length === 0)) {
        const newBook = {
          title: this.title,
          author: this.author,
          publicationDate: this.date,
          description: this.detail
        };
        const options = {
          method: "POST",
          mode: "cors",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(newBook)
        };
        fetch(`${this.$store.state.bookUrl}/books`, options)
          .then(res =>
            res.status === 201
              ? this.handleSaveSuccess()
              : this.handleSaveError()
          )
          .catch(e => console.log("Error in save() in Add.vue: ", e));
      }
    },
    handleSaveSuccess() {
      this.isDialogShow = true;
      this.dialogMsg = "New book added!";
    },
    handleSaveError() {
      this.isDialogShow = true;
      this.dialogMsg =
        "Sorry, yet seems like the servers still have some problems.";
    },
    closeDialog() {
      this.isDialogShow = false;
      this.title = "";
      this.author = "";
      this.date = "";
      this.detail = "";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/vars";
@import "../assets/extends";
@import "../assets/mixins";
.add {
  @extend %normal-view-container;
}
.nav {
  @extend %nav;
  text-align: center;
  .back {
    float: left;
  }
  .save {
    float: right;
  }
}
.input-field {
  box-sizing: border-box;
  padding: 8px;
  .input,
  .textarea {
    width: 100%;
    box-sizing: border-box;
    border-style: none;
    margin-top: 16px;
    padding: 8px;
  }
  .input {
    height: 36px;
  }
  .error {
    border: 1px solid $error-color;
    color: $error-color;
    &::placeholder {
      color: $error-color;
    }
  }
  .errorMsg {
    display: inline-block;
    margin-top: 8px;
    color: $error-color;
    font-size: 0.8em;
  }
}
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 0 24px;
  background: rgba(0, 0, 0, 0.5);
  .dialog-window {
    box-sizing: border-box;
    margin-top: 70%;
    border: 1px solid $main-color;
    border-radius: 8px;
    background: $sub-color;
    text-align: center;
  }
  .dialog-nav {
    height: 24px;
    background: $main-color;
    border-radius: 8px 8px 0 0;
  }
  .dialog-content {
    padding: 24px;
  }
  .dialog-msg {
    font-size: 1.3em;
  }
  .dialog-btn {
    @extend %clickable-item;
    @include line(40px);
    display: inline-block;
    width: 80px;
    box-sizing: border-box;
    margin-top: 16px;
    border: 1px solid $main-color;
    border-radius: 8px;
    &:nth-of-type(1) {
      margin-right: 16px;
      background: $main-color;
      color: $sub-color;
    }
  }
}
@media screen and(min-width: 768px) {
  .input-field {
    margin-top: 48px;
  }
  .dialog {
    .dialog-window {
      margin-top: 50%;
    }
    .dialog-content {
      padding: 48px;
    }
    .dialog-btn {
      margin-top: 40px;
    }
  }
}
@media screen and(min-width: 1024px) {
  .dialog {
    .dialog-window {
      width: 560px;
      margin: 10% auto 0 auto;
      margin-top: 10%;
    }
    .dialog-btn {
      margin-top: 24px;
    }
  }
}
</style>