<template>
  <div id="about">
    <img src="../assets/logo.jpg">
    <h3>{{ msg }}</h3>
    
      </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'This site was created by @Arhanechka'
    }
  }
}
</script>