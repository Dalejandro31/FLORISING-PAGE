<template>
    <carrusel :slides="slides"></carrusel>
</template>
  
<script>
  import Carrusel from '@/components/carrusel/Carrusel.vue'
  export default {
    name: 'Inicio',
    components: {
      Carrusel
    },
    data:() => ({
      slides: [
        require('@/assets/fachada.png'),
        require('@/assets/barreraInternaCuartosFrios.jpg'),
        require('@/assets/escaner.jpg'),
        require('@/assets/infraestructura.jpg'),
        require('@/assets/muelleDescargue.jpg'),
        require('@/assets/muellesCargue.jpg'),
        require('@/assets/plantaCttv.jpg'),
      ]
    })
  }


</script>