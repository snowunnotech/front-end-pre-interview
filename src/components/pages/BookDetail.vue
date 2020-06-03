<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <span class="text-secondary">Author: {{ bookDetail.author }}</span>
                    <span class="text-secondary">{{ bookDetail.publicationDate }}</span>
                </div>
                <div class="col-12 mt-2">
                    <p>{{ bookDetail.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['bookDetail'])
  }
}
</script>
