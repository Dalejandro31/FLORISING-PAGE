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
        <button @click="verMasServicios('sobre-nosotros', 'Nosotros-Consolidacion')">
          VER MAS
        </button>
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
        <h1 name="titulo-home">{{ content.title2 }}</h1>
        <p name="contenido-home">{{ content.content3 }}</p>
        <button @click="verMasServicios('almacenamiento-en-frio',  'Servicios-Consolidacion')">
          VER MAS
        </button>
      </div>
      
      <div class="card-servicios">
        <img src="../../assets/Servicios/barreraInternaCuartosFrios.jpg" alt="cuartosFrios">
        <h1 name="titulo-home">{{ content.title3 }}</h1>
        <p name="contenido-home">{{ content.content4 }}</p>
        <button @click="verMasServicios('recepcion-y-consolidacion-en-frio',  'Servicios-Consolidacion')">
          VER MAS
        </button>
      </div>
      
      <div class="card-servicios">
        <img src="../../assets/plantaCttv.jpg" alt="">
        <h1 name="titulo-home">{{ content.title4 }}</h1>
        <p name="contenido-home">{{ content.content5 }}</p>
        <button @click="verMasServicios('oficinas', 'Servicios-Consolidacion' )">
          VER MAS
        </button>
      </div>
    </section>

    <section class="nuestra-empresa">
      <div class="contenido">
        <h1>{{ content.title7 }}</h1>
        <div/>
        <br>
        <br>
        <p>{{ content.content8 }}</p>
      </div>
      <div class="floristeria-home">
        <div class="card-floristeria">
          <img src="../../assets/Prod-Verde/helecho-removebg-preview.png" alt="verdes">
          <h1 name="titulo-home">{{ content.title5 }}</h1>
          <p name="contenido-home">{{ content.content6 }}</p>
          <button @click="verMasServicios('productos-verdes', 'servicios-Floristeria' )">
            VER MAS
          </button>
        </div>
        <div class="card-floristeria">
          <img src="../../assets/Rosas/rosa-brighton.png" alt="">
          <h1 name="titulo-home">{{ content.title6 }}</h1>
          <p name="contenido-home">{{ content.content7 }}</p>
          <button @click="verMasServicios('productos-rosas', 'servicios-Floristeria' )">
            VER MAS
          </button>
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
    methods: {
    verMasServicios(destino, nombre) {
        this.$router.push({ name: nombre });
        setTimeout(() => {
            const elementoNuestroServicio = document.getElementById(destino);
            if (elementoNuestroServicio) {
                elementoNuestroServicio.scrollIntoView({ behavior: 'smooth' });
            }
        }, 500);
    }
},

    data:() => ({
      slides: [
        require('@/assets/fachada.png'),
        require('@/assets/Servicios/barreraInternaCuartosFrios.jpg'),
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