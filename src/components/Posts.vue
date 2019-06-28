<template>
	
	<div class="posts row">
	<hr>
		<div class="postClass col-12 col-md-3" v-for="(post,index) in results" :class="{done: post.done}" >
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
      color:'#e5faff',
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
	position: relative;
    max-width:  200px;
    max-height: 250px;
    background-position: 50% 50%;
    background-repeat:   no-repeat;
    background-size:     cover;

	}
	span{
		color:white;
	}
	.postClass.done{
		background-color: #51bad7;
	}
	.postClass{
		border:1px solid #EBA39E;
		padding-bottom:5px;
		background-color: #e5faff;
	}
</style>
