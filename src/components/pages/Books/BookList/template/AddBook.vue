<template>
  <div>
    <v-btn depressed outlined dark @click="openDialog">New</v-btn>
    <v-dialog v-model="dialog" width="500">
      <v-form ref="form">
        <v-card>
          <v-card-title>新增書籍</v-card-title>
          <v-card-text>
            <v-flex class="mt-5">
              <p class="font-weight-bold">作者</p>
              <v-text-field v-model="query_options.author" outlined dense :rules="authorRules"></v-text-field>
            </v-flex>
            <v-flex class="mt-5">
              <p class="font-weight-bold">書名</p>
              <v-text-field v-model="query_options.title" outlined dense :rules="titleRules"></v-text-field>
            </v-flex>
            <v-flex class="mt-5">
              <p class="font-weight-bold">描述</p>
              <v-text-field v-model="query_options.description" outlined dense :rules="descRules"></v-text-field>
            </v-flex>
            <v-flex class="mt-5">
              <p class="font-weight-bold">日期</p>
              <v-text-field
                v-model="query_options.publicationDate"
                outlined
                dense
                :rules="dateRules"
              ></v-text-field>
            </v-flex>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="addBook">確認</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      query_options: {
        title: "",
        author: "",
        description: "",
        publicationDate: ""
      },
      authorRules: [v => !!v || "作者不得為空"],
      titleRules: [v => !!v || "書名不得為空"],
      descRules: [v => !!v || "描述不得為空"],
      dateRules: [v => !!v || "日期不得為空"],
      check_status: ""
    };
  },
  methods: {
    openDialog: function() {
      var vm = this;
      vm.dialog = true;
      vm.reset();
    },
    //新增 books
    addBook: function() {
      var vm = this;
      var api = `${process.env.VUE_APP_API}/books`;
      switch (vm.checkField()) {
        case "0":
          vm.dialog = false;
          vm.axios
            .post(api, JSON.stringify(vm.query_options), {
              headers: {
                "content-type": "application/json"
              }
            })
            .then(response => {
              switch (response.response.status) {
                case 201:
                  vm.$bus.$emit("alertMessage", "success", "新增成功");
                  break;
                case 400:
                  vm.$bus.$emit("alertMessage", "error", "400 Invalid input");
                  break;
                case 404:
                  vm.$bus.$emit(
                    "alertMessage",
                    "error",
                    "404 Resource not found"
                  );
                  break;
              }
            })
            .catch(function(error) {
              vm.$bus.$emit("alertMessage", "error", error);
            });
          break;
        case "1":
          vm.$bus.$emit("alertMessage", "error", "欄位不得為空");
          break;
      }
    },
    checkField: function() {
      var vm = this;
      if (vm.$refs.form.validate()) {
        return (vm.check_status = "0");
      } else {
        return (vm.check_status = "1");
      }
    },
    reset: function() {
      var vm = this;
      if (vm.$refs.form == undefined) {
        return;
      } else {
        vm.$refs.form.reset();
      }
    }
  }
};
</script>