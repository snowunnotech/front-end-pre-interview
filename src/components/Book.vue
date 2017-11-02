<template>
  <md-layout md-flex="35" md-align="center" class="book">
    <md-card md-with-hover class="book">
      <md-card-header>
        <div class="md-title">{{ 'X' }}</div>
      </md-card-header>
      <md-card-content class="content">
        <md-layout md-gutter>
          <md-layout md-column md-gutter>
            <md-layout md-flex="75">
              {{ description }}
            </md-layout>
            <md-layout md-vertical-align="end">
              <md-layout md-row>
                <md-layout md-flex="70" md-align="start">
                  <i>{{ 'by ' + author }}</i> 
                </md-layout>
                <md-layout md-flex="30" md-align="end">
                  <i>{{ publicationDate }}</i>
                </md-layout>
              </md-layout>
            </md-layout>
          </md-layout>
        </md-layout>
      </md-card-content>
    </md-card>
  </md-layout>
</template>
<script>
export default {
  name: 'Book',
  props: ['id', 'title', 'author', 'publicationDate', 'description']
}
</script>
<style scoped>
.book {
  margin: 10px;
  width: 100%;
}

.content {
  text-align: left;
}

</style>
