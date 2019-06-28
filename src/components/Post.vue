<template>

	<div class="posts container" >
    <link href='https://fonts.googleapis.com/css?family=Didact+Gothic' rel='stylesheet' type='text/css'>
     <div class="wrap" >
      <div class="box box1 shadow1" :class="{done: result.done}">

          <div class="post" >

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
          <div class="col-sm">
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
	.box1.done{
		background-color: #51bad7;
	}
	img{
		width: 200px;
		height: 200px;
    margin-bottom: 20px;
	}

.wrap{
  margin-left:20px;
}
.box{
  width:100%;
  height:85vh;
  float:left;
  background-color:white; 
  margin:25px 15px;
  border-radius:5px;
}
.box h3{
  font-family: 'Didact Gothic', sans-serif;
  font-weight:normal;
  text-align:center;
  padding:30px 0px;
  color:#fff;
}
.box1{
  background-color: #EBA39E;
}
.box2{
  background-color: #EDE89A;
}
.box3{
  background-color: #9EEBA1;
}
.box4{
  background-color: #9EEBBF;
}
.box5{
  background-color: #9ED9EB;
}
.box6{
  background-color: #9EB3EB;
}
.box7{
  background-color: #DB9EEB;
}
.box8{
  background-color: #C49EEB;
}
.shadow1, .shadow2, .shadow3,.shadow4,.shadow5,.shadow6,.shadow7,.shadow8{
  position:relative;
}
.shadow1,.shadow2,.shadow3,.shadow4,.shadow5,.shadow6,.shadow7,.shadow8{
    box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.1) inset;
}
/*****************************************************************dashed border
****************************************************************/
.shadow1 h3, .shadow2 h3, .shadow3 h3, .shadow4 h3, .shadow5 h3, .shadow6 h3, .shadow7 h3, .shadow8 h3{
  width:87%;
  height:100px;
  margin-left:6%;
  border:2px dashed #F7EEEE;
  border-radius:5px;
}
/****************************************************************
*styling shadows
****************************************************************/
.shadow1:before, .shadow1:after{
  position:absolute;
  content:"";
  bottom:12px;left:15px;top:80%;
  width:45%;
  background:#9B7468;
  z-index:-1;
  -webkit-box-shadow: 0 20px 15px #9B7468;
  -moz-box-shadow: 0 20px 15px #9B7468;
  box-shadow: 0 20px 15px #9B7468;
  -webkit-transform: rotate(-6deg);
  -moz-transform: rotate(-6deg);
  transform: rotate(-6deg);
}
.shadow1:after{
  -webkit-transform: rotate(6deg);
  -moz-transform: rotate(6deg);
  transform: rotate(6deg);
  right: 15px;left: auto;
}
.shadow2:before{
  position:absolute;
  content:"";
  width:80%;
  top:140px;bottom:15px;left:30px;
  background-color:#9F8641;
  z-index:-1;
  -webkit-box-shadow:0 23px 17px 0 #9F8641;
  -moz-box-shadow:0 23px 17px 0 #9F8641;
  box-shadow: 0 23px 17px 0 #9F8641;
  -webkit-transform:rotate(-4deg);
  -moz-transform:rotate(-4deg);
  transform:rotate(-4deg);
}
.shadow3:before, .shadow3:after{
  content:"";
  position:absolute;
  bottom:0;top:2px;left:15px;right:15px;
  z-index:-1;
  border-radius:100px/30px;
 -webkit-box-shadow:0 0 30px 2px #479F41;
  -moz-box-shadow:0 0 30px 2px #479F41;
  box-shadow: 0 0 30px 2px #479F41;
}
.shadow4:before, .shadow4:after{
  position:absolute;
  content:"";
  top:14px;bottom:14px;left:0;right:0;
  box-shadow:0 0 25px 3px #548E7F;
  border-radius:100px/10px;
  z-index:-1;
}
.shadow5:before, .shadow5:after{
  position:absolute;
  content:"";
  box-shadow:0 10px 25px 20px #518C96;
  top:40px;left:10px;bottom:50px;
  width:15%;
  z-index:-1;
  -webkit-transform: rotate(-8deg);
  -moz-transform: rotate(-8deg);
  transform: rotate(-8deg);
}
.shadow5:after{
  -webkit-transform: rotate(8deg);
  -moz-transform: rotate(8deg);
  transform: rotate(8deg);
  right: 10px;left: auto;
}
.shadow6:before, .shadow6:after{
  position:absolute;
  content:"";
  top:100px;bottom:5px;left:30px;right:30px;
  z-index:-1;
  box-shadow:0 0 40px 13px #486685;
  border-radius:100px/20px; 
}
.shadow7:before, .shadow7:after{
  position:absolute;
  content:"1";
  top:25px;left:20px;bottom:150px;
  width:80%;
  z-index:-1;
  -webkit-transform: rotate(-6deg);
  -moz-transform: rotate(-6deg);
  transform: rotate(-6deg);
}
.shadow7:before{
  box-shadow:10px -10px 30px 15px #984D8E;
}
.shadow7:after{
  -webkit-transform: rotate(7deg);
  -moz-transform: rotate(7deg);
  transform: rotate(7deg);
  bottom: 25px;top: auto;
  box-shadow:10px 10px 30px 15px #984D8E;
}
.shadow8{
  box-shadow:
 -6px -6px 8px -4px rgba(250,254,118,0.75),
  6px -6px 8px -4px rgba(254,159,50,0.75),
  6px 6px 8px -4px rgba(255,255,0,0.75),
  6px 6px 8px -4px rgba(0,0,255,2.75);
}

</style>
