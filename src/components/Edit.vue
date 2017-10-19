<template>
<div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col-3 col-sm-2 text-left">
            <a href="/">Back</a>
          </div>
          <div class="col-6 col-sm-8 text-center title">
            Add New Book
          </div>
          <div class="col-3 col-sm-2 text-right">
            <a :href="url">Save</a>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
        <form>
            <div class="form-group">
                <input type="text" id="author" name="author" class="form-control" placeholder="Author">
            </div>
            <div class="form-group">
                <!-- <input type="date" name="created" class="form-control"> -->
                <input type="text" id="created" name="created" class="form-control" placeholder="Created At">
            </div>
            <div class="form-group">
                <textarea name="description" id="description" class="form-control" cols="30" rows="10">

                </textarea>
            </div>
        </form>
    </div>
</div>
  
</template>

<script>
export default {
  name: 'Edit',
  data () {
    return {
      msg: 'Edit Page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
