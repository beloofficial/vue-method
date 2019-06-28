<template>
	<div class="posts container" >
  		<div class="post border col-sm" :class="{done: result.done}">

  			<p v-if="errors.length">
    			<b>Пожалуйста исправьте указанные ошибки:</b>
    			<ul>
      				<li v-for="error in errors">{{ error }}</li>
    			</ul>
  			</p>

  			<img :src="result.img" class="img-thumbnail" alt="Responsive image" >
			
			<div>
				<input class="form-control justify-content-center" type="text" name="title" v-if="update"  v-model='title' placeholder="Title" required>
	  			<h3 v-else>{{result.title}}</h3>
	  			<div class="border col-sm">
	  				<input class="form-control justify-content-center" type="text" name="body" v-if="update"  v-model='body' placeholder="Body" required>
	  				<h3 v-else>{{result.body}}</h3>
	  			</div>
  			</div>
  		</div>
  		<button class="btn btn-warning" @click="update = !update" v-if="!update" >Update </button>
  		<button class="btn btn-warning" @click="update = !update" v-if="update" >Cancel</button>
  		<button class="btn btn-warning" @click="update1" v-if="update">Confirm</button>
  		<button class="btn btn-danger" @click="delete1">Delete</button>
  		<div v-if='!result.done'>
			<br>
			<button class="btn btn-primary" @click="result.done = !result.done">Done</button>
		</div>
		<div v-else>
			<br>
			<button class="btn btn-primary" @click="result.done = !result.done">Not Done</button>
		</div>
  	</div>
</template>

<script>

 import store from '../store/index.js';

export default {
 
 name: 'Post',
 data () {
    return {
      errors:[],
      update:false,
      title:'',
      body:'',
      done:false,
    }
  },
  computed:{
  	result(){
  		var id = this.$route.params.id
  		var result = store.getters.results[id]
  		this.title = result.title;
  		this.body = result.body;
  		this.done = result.done;
  		return result;
  	}
  },
  methods:{
  update1(e) {
  	this.errors = []
  	if (!this.title) {
        this.errors.push('Требуется указать title.');
    }

    if (!this.body) {
        this.errors.push('Требуется указать body.');
    }

    e.preventDefault();
    if(!this.errors.length)
    {
	  	var result = {
	  		img: this.result.img,
	  		title: this.title,
	  		body: this.body,
	  		done:false,
	  	}
	  	var total = {
	  		id:this.$route.params.id,
	  		result:result
	  	}

	    store.dispatch('update',total);
	    this.$router.push('/Posts')
	}
  },
  delete1(){
  	store.dispatch('delete',this.$route.params.id); 
  	this.$router.push('/Posts')
  }
}
}
</script>
<style>
	.done{
		background-color: aqua;
	}
	img{
		width: 200px;
		height: 200px;
	}
</style>
