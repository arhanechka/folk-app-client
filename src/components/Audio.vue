<template>
  <div id="audio">
    <img v-on:click='fetchData()' src="../assets/logo.jpg">
    <h1>{{ msg }}</h1>
    
      </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'audio',
  data () {
    return {
      msg: 'Audio'
    }
  },
  methods: {
    fetchData(){
      console.log("In axios");
      axios.get("http://localhost:3000/audio")
      .then((response)=>{
        console.log(response)
        this.msg = response.data;
      });
    }
  }
}
</script>