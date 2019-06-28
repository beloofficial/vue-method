<template>
  <div id="app">
    <nav>
      <button class="btn btn-warning"><router-link to="/Posts">Posts</router-link></button>
      <button class="btn btn-warning"><router-link to="/create">Create</router-link></button>
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
  components:{Posts, Create, Update}
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
