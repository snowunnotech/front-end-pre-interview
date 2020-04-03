<template>
  <div>
    <v-card flat tile style="z-index: 5;">
      <v-toolbar color="primary" dense>
        <v-spacer></v-spacer>
        <AddBook />
      </v-toolbar>
    </v-card>
  </div>
</template>

<script>
import AddBook from "./AddBook"
export default {
  components: {
    AddBook
  }
};
</script>