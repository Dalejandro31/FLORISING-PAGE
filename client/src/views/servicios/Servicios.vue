<template>
    <div>
        <h1 class="titulo"> SERVICIOS </h1>
    </div>
    <div class="separ-top"/>

    <section class="nuestro-servicio"> 
        <!-- // se le añade un display felx colum 
        //div -> titulo
        //div -> div -> img : div -> texto -->
        
        <div class = "ejemplo">
            <p>{{ content.title1 }}</p>
        </div>

        <div class="imagenes">
            <div>
                <carrusel :slides="slidesRecepcion" :interval="5000" controls indicators =""/>
            </div>
        </div>
        <div class="contenido">
            <div/>
            <br>
            <br>
            <p>{{ content.recepcionfrio1 }}</p>
            <p>{{ content.recepcionfrio2 }}</p>
            <p>{{ content.recepcionfrio3 }}</p>
            <p>{{ content.recepcionfrio4 }}</p>
        </div>
    </section>
    <div class="separ"/>
    <section class="nuestro-servicio">
        <div class="contenido">
            <h1>{{content.title2}}</h1>
            <div />
            <br>
            <br>
            <p>{{ content.almacenamientoFrio }}</p>
            <p>{{ content.almacenamientoFrio2 }}</p>
        </div>
        <div class="imagenes">
            <div >
                <carrusel :slides="slidesCuartosFrios" :interval="5000" controls indicators =""/>

            </div>
        </div>
    </section>
    <div class="separ"/>
    <section class="nuestro-servicio">
        <div class="imagenes">
            <div>
                <carrusel :slides="slidesTransportes" :interval="5000" controls indicators =""/>
            </div>
        </div>
        <div class="contenido">
            <h1>{{ content.title3 }}</h1>
            <div/>
            <br>
            <br>
            <p>{{ content.transporteRefrigerado }}</p>
        </div>
    </section>
    <div class="separ"/>
    <section class="nuestro-servicio">
        <div class="contenido">
            <h1>{{ content.title4 }}</h1>
            <div />
            <br>
            <br>
            <p>{{ content.otros }}</p>
        </div>
        <div class="imagenes">
            <div>
                <carrusel :slides="slidesOtros" :interval="5000" controls indicators =""/>

            </div>
        </div>
    </section>
</template>

<script>
import Carrusel from '@/components/carrusel/Carrusel.vue'
  import {content} from '@/views/servicios/Servicios'
  export default {
    name: 'Servicios',
    components: {
      Carrusel
    },
    data:()=>({
        slidesRecepcion: [
            require('@/assets/RecepcionyConsolidacionFrio.png'),
            require('@/assets/MuellesCarga.png'),
            require('@/assets/RecepciondeCarga.png'),
            require('@/assets/RecepcionRayosX.png'),
        ],
        slidesCuartosFrios: [
            require('@/assets/CuartosFrios.png'),
            require('@/assets/barreraInternaCuartosFrios.jpg'),
        ],
        slidesTransportes: [
            require('@/assets/contenedorRefrigerado.png'),
        ],
        slidesOtros: [
            require('@/assets/OtrosServicios1.png'),
        ],
        content: content
    })
  }
</script>
<style scoped>
    @import './Servicios.css';
</style>