<template>
    <div>
        <h1 class="titulo"> SERVICIOS </h1>
    </div>
    <section class="nuestro-servicio">
        <div class="imagenes">
            <div>
                <carrusel :slides="slidesRecepcion" :interval="3000" controls indicators =""/>
            </div>
        </div>
        <div class="contenido">
            <h1>{{ content.title1 }}</h1>
            <div/>
            <br>
            <br>
            <p>{{ content.recepcionfrio1 }}</p>
            <br>
            <p>{{ content.recepcionfrio2 }}</p>
            <br>
            <p>{{ content.recepcionfrio3 }}</p>
            <br>
            <p>{{ content.recepcionfrio4 }}</p>
        </div>
    </section>
    <section class="nuestro-servicio">
        <div class="contenido">
            <h1>{{content.title2}}</h1>
            <div />
            <br>
            <br>
            <p>{{ content.almacenamientoFrio }}</p>
            <br>
            <p>{{ content.almacenamientoFrio2 }}</p>
        </div>
        <div class="imagenes">
            <div >
                <carrusel :slides="slidesCuartosFrios" :interval="3000" controls indicators =""/>

            </div>
        </div>
    </section>
    <section class="nuestro-servicio">
        <div class="imagenes">
            <div>
                <carrusel :slides="slidesTransportes" :interval="3000" controls indicators =""/>
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
                <carrusel :slides="slidesOtros" :interval="3000" controls indicators =""/>

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