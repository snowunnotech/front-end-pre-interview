<template>
  <div>
    <v-btn color="primary" depressed @click="backBtn">Back</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    backBtn: function() {
      var vm = this;
      vm.$router.back();
    }
  }
};
</script>