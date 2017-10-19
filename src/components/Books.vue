<template>
<div>
    <header>
      <div class="container clearfix">
          <div class="float-right">
            <a href="/edit">New</a>
          </div>
      </div>
    </header>
    <div class="container">
        <div class="books row">
            <div class="book col-3">
                <a href="/book/2">
                    <div class="delete">x</div>
                    <div class="description">
                        A long but very interesting story about REST and asyncio.
                    </div>
                    <div class="info">
                        <div class="author">by The life!</div>
                        <div class="date">2017-10-19</div>
                    </div>
                </a>
            </div>
        </div>
        <div class="more">
            <a class="btn btn-primary" href="#" role="button">Load More</a>
        </div>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      msg: 'List Page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book {
    background: #fff;
    border-radius: 5px;
}
.more {
    margin: 20px auto;
}
.more a {
    background: #fec267;
    border: 0;
    color: #fff;
    font-size: 1.1rem;
    padding: 15px 0;
    width: 100%;
}
</style>
