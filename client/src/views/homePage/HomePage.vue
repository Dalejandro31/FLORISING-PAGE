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
          <img src="../../assets/infraestructura.jpg" alt="infraestructura">
        </div>
      </div>
    </section>
    <div class="title1">
      <h1>{{ content.title1  }}</h1>
      <div/>
    </div>
    <section class="nuestros-servicios">
      <div class="card-servicios">
        <img src="../../assets/plantaCttv.jpg" alt="">
        <p name="titulo">{{ content.title2 }}</p>
        <p name="contenido">{{ content.content3 }}</p>
        <button>
          VER MAS
        </button>
      </div>
      
      <div class="card-servicios">
        <img src="../../assets/barreraInternaCuartosFrios.jpg" alt="cuartosFrios">
        <p name="titulo">{{ content.title3 }}</p>
        <p name="contenido">{{ content.content4 }}</p>
        <button>
          VER MAS
        </button>
      </div>
      
      <div class="card-servicios">
        <img src="../../assets/plantaCttv.jpg" alt="">
        <p name="titulo">{{ content.title4 }}</p>
        <p name="contenido">{{ content.content5 }}</p>
        <button>
          VER MAS
        </button>
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