<template>
    <carrusel :slides="slides" :interval="3000" controls indicators=""/>
    <section class="nuestra-empresa">
      <div class="contenido">
        <h1>{{ content.title }}</h1>
        <div/>
        <br>
        <br>
        <p>{{ content.content1 }}</p>
        <p>{{ content.content2 }}</p>
        <button>VER MAS</button>
      </div>
      <div class="infraestructura">
        <div>
          <img src="../../assets/infraestructura.jpg" alt="">
        </div>
      </div>
    </section>
</template>

<script>
  import Carrusel from '@/components/carrusel/Carrusel.vue'
  import {content} from '@/views/homePage/HomePage'
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
      ],
      content: content
    })
  }
</script>
<style scoped>
    @import './HomePage.css';
</style>