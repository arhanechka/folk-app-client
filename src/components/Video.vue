<template>
  <div id="video">
    <h1 v-on:click='fetchData()'>{{ msg }}</h1>
    
      </div>
</template>

<script>
  import {axiosAPI} from '../controllers/axiosAPI'
  const api = new axiosAPI();
export default {
  name: 'video',
  data () {
    return {
      msg: 'Video'
    }
  },
  methods: {
    fetchData(){
      api.getVideoInformation()
      .then((res)=>{
        this.msg = res.data;
      });
    }
  }
}
</script>