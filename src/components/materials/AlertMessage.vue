<template>
  <div class="message-alert">
    <v-alert dark :color="status" border="top" v-if="status" dismissible>{{message}}</v-alert>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      status: null,
      message: ""
    };
  },
  methods: {
    updateMessage: function(status, message) {
      var vm = this;
      vm.status = status;
      vm.message = message;
      var timer = setTimeout(() => {
        this.status = null;
      }, 3000);
    }
  },
  created() {
    var vm = this;
    vm.$bus.$on("alertMessage", (status, message) => {
      vm.updateMessage(status, message);
    });
  }
};
</script>

<style scope>
.message-alert {
  position: fixed;
  max-width: 50%;
  top: 56px;
  right: 20px;
  z-index: 1100;
}
</style>