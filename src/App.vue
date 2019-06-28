<template>
  


  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#">TODO-LIST</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
         <router-link class="nav-link"  to="/Posts">Posts</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link"  to="/create">Create</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <nav>

      
      
    
    

    </nav>
    <router-view/>
  </div>
</template>
<script>
import Posts from './components/Posts.vue';
import Create from './components/Create.vue';
import Update from './components/Update.vue';
export default {
  name: 'App',
  components:{ Posts, Create, Update}
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:60px;
}
</style>
