<template>
  <div class="errorPage">
    <Navbar/>
    <h1>404 Error</h1>
    <h2>Page not found!</h2>
  </div>
</template>

<script>
import Navbar from './Navbar'
export default {
    name: '404-page',
    components:{
        Navbar
    }
}
</script>

<style scoped>
.errorPage{
  font-family: Georgia, Times, Times New Roman, serif;
}
h1{
    color: red;
}
</style>