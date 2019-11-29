<template>
    <div class="card-container-column">
      <div class="card-media">
        <img
          class="card-img"
          src="../assets/bookDefaultA.jpg"
        />
      </div> 
      <div class="card-content">
        <div class="card-title">
          <span>{{ title }}</span>
        </div>
        <div class="card-des">
          <span>{{ description }}</span>
        </div>
        <div class="card-info card-des">
          <span className="card-des">
              by {{ author }}
              <span className="weight-normal text-hint">
                {{ date.slice(0, 10) }}
              </span>
            </span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    author: String,
    description: String,
    date: String,
    title: String,
    reviews: Array,
    isbn: String // or any other constructor
  }
}
</script>

<style lang="less" scoped>


.card-container-column {
  position: relative;
  color: rgb(72, 72, 72);
  height: 100%;
  max-width: 10vw;
  .card-media {
    width: 100%;
    white-space: normal;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.02);
    border-image: initial;
    border-radius: 12px;
    height: 100%;
    overflow: hidden;
  
    .card-img {
      height: 100%;
      width: 100%;   
    }
  }
  .card-content {
    width: 100%;
    align-self:stretch;
    .card-des {
      font-size: 12px;
      font-weight: 800;
      line-height: 1.3333333333333333em;
      color: rgb(118, 118, 118);
      padding: 1vh 0;
    }
  }
}

.card-title {
  overflow-wrap: break-word;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.375em;
  text-overflow: ellipsis;
  max-height: 4.125em;
  margin: 0px;
  overflow: hidden;  
}
</style>