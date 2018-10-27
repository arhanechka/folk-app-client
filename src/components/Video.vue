<template>
  <div id="video">
    <img v-on:click='fetchData()' src="../assets/logo.jpg">
    <h1>{{ msg }}</h1>
    
      </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'video',
  data () {
    return {
      msg: 'Video'
    }
  },
  methods: {
    fetchData(){
      console.log("In axios");
      axios.get("http://localhost:3000/video")
      .then((response)=>{
        console.log(response)
        this.msg = response.data;
      });
    }
  }
}
</script>