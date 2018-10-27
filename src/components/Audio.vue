<template>
  <div id="audio">
    <h1 v-on:click='fetchData()'> {{ msg }}</h1>
    
      </div>
</template>

<script>
   import {axiosAPI} from '../controllers/axiosAPI'
  const api = new axiosAPI();
export default {
  name: 'audio',
  data () {
    return {
      msg: 'Audio'
    }
  },
  methods: {
    fetchData(){
      api.getAudioInformation()
      .then((res)=>{
        this.msg = res.data;
      });
    }
  }
}
</script>