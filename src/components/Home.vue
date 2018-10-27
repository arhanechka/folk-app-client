<template>
  <div id="home">
   
    <h1 v-on:click='fetchData()'>{{ msg }}</h1>
  
      </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Collection of Ukrainian Folk'
    }
  },
  methods: {
    fetchData(){
      console.log("In axios");
      axios.get("http://localhost:3000/home")
      .then((response)=>{
        console.log(response)
        this.msg = response.data;
      });
    }
  }
}
</script>