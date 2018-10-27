<template>
  <div id="home">
   
    <h1 v-on:click='fetchData()'>{{ msg }}</h1>
  
      </div>
</template>

<script>
  import {axiosAPI} from '../controllers/axiosAPI'
  const api = new axiosAPI();

export default {
  name: 'home',
  data () {
    return {
      msg: 'Collection of Ukrainian Folk'
    }
  },
  methods: {
    fetchData(){
      api.getHomeInformation()
      .then((res)=>{
        this.msg = res.data;
      });
    }
  }
}
</script>