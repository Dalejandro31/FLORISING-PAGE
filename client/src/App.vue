<template>
  
    <NavBar />
    <router-view />
    <Footer/>
  
</template>

<script>
import NavBar from '@/components/navBar/Nav.vue';
import Footer from '@/components/footer/Footer.vue'
export default {
  components: {
    NavBar,
    Footer
  }
}


</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Open Sans", sans-serif;
}
</style>



