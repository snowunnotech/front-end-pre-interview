<template>
  <div>
    <div class="card-container-column">
      <div className="card-media">
        <img
          className="card-img"
          src="test"
        />
      </div> 
      <div className="card-content">
        <div className="card-hint">
          <span>衝浪．在地體驗．恰你個恰恰恰</span>
        </div>
        <div className="card-title">
          <span>test/span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>


.card-container-column {
  position: relative;
  color: rgb(72, 72, 72);
  height: 100%;

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
    .card-hint {
      word-wrap: break-word;
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