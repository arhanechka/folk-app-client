<template>
  <div id="about">
    
    <h3 v-on:click='fetchData()'>{{ msg }}</h3>
    
      </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'about',
  data () {
    return {
      msg: 'This site was created by @Arhanechka'
    }
  },
  methods: {
    fetchData(){
      console.log("In axios");
      axios.get("http://localhost:3000/about")
      .then((response)=>{
        console.log(response)
        this.msg = response.data;
      });
    }
  }
}
</script>