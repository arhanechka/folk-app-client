<template>
  <div id="app">
    <img src="./assets/logo.jpg">
    <br><br>
     <div id = "links">
      <router-link to="/home">Home</router-link> |
      <router-link to="/audio">Audio</router-link> |
      <router-link to="/video">Video</router-link> |
       <router-link to="/about">About</router-link>

      </div>
      <router-view/>
       
      </div>
</template>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-weight: normal;
}

h3 {
  font-weight: lighter;
  font-style: italic
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
