<template>
  <div id="about">
    
    <h3 v-on:click='fetchData()'>{{ msg }}</h3>
    
      </div>
</template>

<script>
    import {axiosAPI} from '../controllers/axiosAPI'
  const api = new axiosAPI();
export default {
  name: 'about',
  data () {
    return {
      msg: 'This site was created by @Arhanechka'
    }
  },
  methods: {
    fetchData(){
      api.getAboutInformation()
      .then((res)=>{
        this.msg = res.data;
      });
    }
  }
}
</script>