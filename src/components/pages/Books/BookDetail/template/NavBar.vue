<template>
  <div>
    <v-card flat tile style="z-index: 5;">
      <v-toolbar color="primary" dense>
        <Back />
        <v-spacer></v-spacer>
        <EditBook :item="item" />
      </v-toolbar>
    </v-card>
  </div>
</template>

<script>
import Back from "./Back";
import EditBook from "./EditBook";
export default {
  components: {
    Back,
    EditBook
  },
  props: {
    item: {
      type: Object
    }
  },
};
</script>