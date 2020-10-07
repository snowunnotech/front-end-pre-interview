<template>
  <div class="book-edit">
    <div class="form-container">
       <div class="group">      
        <input type="text" required v-model="title">
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Title</label>
      </div>  

      <div class="group">      
        <input type="text" required v-model="author">
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Author</label>
      </div>
        
      <div class="group">      
        <input type="text" required v-model="date">
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Date</label>
      </div>

       <div class="group">      
        <input type="text" required v-model="isbn">
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>ISBN</label>
      </div>    

      <div class="group">      
        <input type="textarea" required v-model="description">
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Description</label>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookCreate',
  computed: {
    formData() {
      return this.$store.state.form
    },
    title: {
      set(title) {
        this.$store.commit('SET_TITLE', title)
      },
      get() {
        return this.formData.title
      }
    },
    author: {
      set(author) {
        this.$store.commit('SET_AUTHOR', author)
      },
      get() {
        return this.formData.author
      }
    },
    date: {
      set(date) {
        this.$store.commit('SET_DATE', date)
      },
      get() {
        return this.formData.date
      }
    },
    isbn: {
      set(isbn) {
        this.$store.commit('SET_ISBN', isbn)
      },
      get() {
        return this.formData.isbn
      }
    },
    description: {
      set(description) {
        this.$store.commit('SET_DESCRIPTION', description)
      },
      get() {
        return this.formData.description
      }
    }
  }
}
</script>

<style lang="less" scoped>

.form-container {
  margin-top: 5vh;
}
.group 			  { 
  position:relative; 
  margin-bottom:45px; 
}
input 				{
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width:300px;
  border:none;
  border-bottom:1px solid #757575;
}
input:focus 		{ outline:none; }

/* LABEL ======================================= */
label 				 {
  color:#999; 
  font-size:18px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:10px;
  transition:0.2s ease all; 
}

/* active state */
input:focus ~ label, input:valid ~ label 		{
  top:-20px;
  font-size:14px;
  color: #f9bc59;
}

/* BOTTOM BARS ================================= */
.bar 	{ position:relative; display:block; width:300px; }
.bar:before, .bar:after 	{
  content:'';
  height:2px; 
  width:0;
  bottom:1px; 
  position:absolute;
  background: #f9bc59; 
  transition:0.2s ease all; 
}
.bar:before {
  left:50%;
}
.bar:after {
  right:50%; 
}

/* active state */
input:focus ~ .bar:before, input:focus ~ .bar:after {
  width:50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
  position:absolute;
  height:60%; 
  width:100px; 
  top:25%; 
  left:0;
  pointer-events:none;
  opacity:0.5;
}

/* active state */
input:focus ~ .highlight {
  animation:inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
@keyframes inputHighlighter {
	from { background: #f9bc59; }
  to 	{ width:0; background:transparent; }
}
</style>