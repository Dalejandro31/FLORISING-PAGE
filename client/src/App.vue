<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/navBar/Nav.vue';

export default {
  components: {
    NavBar
  }
}
</script>



