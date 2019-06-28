<template>
	<div class="posts">
	<hr>
		<div class="post" v-for="(post,index) in results" :class="{done: post.done}">
			<img :src="post.img" class="img-thumbnail" alt="Responsive image" >
			<h3>{{post.title}}</h3>
			<button class="btn btn-danger">
				<router-link :to="{name: 'Post', params: { id:index } }">
					<span>Подробнее</span>
				</router-link>
			</button>
			
			<div v-if='!post.done'>
				<br>
				<button class="btn btn-primary" @click="post.done = !post.done">Done</button>
			</div>
			<div v-else>
				<br>
				<button class="btn btn-primary" @click="post.done = !post.done">Not Done</button>
			</div>
			<hr>
		</div>
	</div>
</template>
<script>
 import store from '../store/index.js';
export default {

  name: 'Posts',
  data () {
    return {
      done:true,
    }
  },
  computed:{
  	results(){
  		 return (store.getters.results)
  	}
  }
}
</script>
<style>
	img{
		width: 200px;
		height: 200px;
	}
	span{
		color:white;
	}
	.post.done{
		background-color: aqua;
	}
	.post{
		background-color: #E0E0E0;
	}
</style>
