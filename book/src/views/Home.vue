<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div
          v-for="book in booksShowList"
          :key="book['@id']"
          class="text-center col-xl-3 col-lg-4 col-6 d-flex book"
          @click="goBookInfo(book['@id'])"
        >
          <div class="content bg-white col-12 my-3">
            <div class="tag">
              X
            </div>
            <p>{{ book.title }}</p>
            <p>
              <span>{{ 'by ' + book.author }}</span>
              <span>{{ dateFormat(book.publicationDate, 'YYYY-MM-DD') }}</span>
            </p>
          </div>
        </div>
        <div
          class="col-12 text-center loadBtn"
          @click="getBooksAndShowTopSix"
        >
          Load More
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { getBooks } from '@/utils/service'
import swal from '@/utils/swal'

export default {
  name: 'Home',
  data () {
    return {
      books: [],
      booksShowList: [],
      nowListStage: 0
    }
  },
  async created () {
    this.getBooksAndShowTopSix()
  },
  methods: {
    async getBooksAndShowTopSix () {
      if (this.books.length === 0) {
        this.nowListStage++
        const ret = await getBooks({ 'order[id]': 'asc', 'page': this.nowListStage })
        console.log('[取得書本列表]', ret)
        if (ret.success === false) {
          swal.withWrongStyle.fire({ text: `${ret.data['hydra:description']}` })
          return
        }
        const { data } = ret
        this.books = data['hydra:member']
      }

      this.books.splice(0, 6).forEach(el => this.booksShowList.push(Object.assign({}, el)))
    },

    goBookInfo (path) {
      const id = path.split('/').pop()
      this.$router.push({ name: 'book', params: { id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.book{
  color:#bbbbbb;
}
.tag{
  margin: 1rem 0 0;
  font-size: 1.5rem;
  font-weight: bold;
  color:#4a4a4a;
}
.content{
  > p {
    text-align: left;
    margin: 1rem 0;
  }
  & > p:last-child span{
    padding: 0 4px;
    font-size: 14px;
  }
}
.loadBtn{
  background: $mainColor;
  padding: 12px 0;
  color: #fff;
}
</style>
