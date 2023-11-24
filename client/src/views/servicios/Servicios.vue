<template>
    <div class="titulo-servicios">
        <h1> SERVICIOS DE CONSOLIDACIÓN </h1>
    </div>

    <section id="recepcion-y-consolidacion-en-frio"> 
        <!-- // se le añade un display felx colum 
        //div -> titulo
        //div -> div -> img : div -> texto -->
        <br>
        <div class = "titulo-izquierda">
            <p>{{ content.title1 }}</p>
        </div>
        <div class="nuestro-servicio"  >
            <div class="imagenes">
                <carrusel :slides="slidesRecepcion" :interval="5000"/>
            </div>
            <div class="contenido-der">
                <br>
                <br>
                <p>{{ content.recepcionfrio1 }}</p>
                <p>{{ content.recepcionfrio2 }}</p>
                <p>{{ content.recepcionfrio3 }}</p>
                <p>{{ content.recepcionfrio4 }}</p>
            </div>
        </div>
    </section>
    <div class="separ"/>

    <section id="almacenamiento-en-frio">
        <br>
        <div class="titulo-derecha">
            <p>{{ content.title2 }}</p>
        </div>
        <div class="nuestro-servicio">
            <div class="contenido-izq">
                <br>
                <br>
                <p>{{ content.almacenamientoFrio }}</p>
                <p>{{ content.almacenamientoFrio2 }}</p>
            </div>
            <div class="imagenes">
                <carrusel :slides="slidesCuartosFrios" :interval="5000"/>
            </div>
        </div>
    </section>
    <div class="separ"/>

    <section>

        <br>
        <div class="titulo-izquierda">
            <p>{{ content.title3 }}</p>
        </div>
        <div class="nuestro-servicio">
            <div class="imagenes">
                <carrusel :slides="slidesTransportes" :interval="5000"/>
            </div>
            <div class="contenido-der">
                <br>
                <br>
                <p>{{ content.transporteRefrigerado }}</p>
            </div>
        </div>
    </section>
    <div class="separ"/>
    <section id="oficinas">
        <br>
        <div class="titulo-derecha">
            <p>{{ content.title4 }}</p>
        </div>
        <div class="nuestro-servicio">
            <div class="contenido-izq">
                <br>
                <br>
                <p>{{ content.otros }}</p>
            </div>
            <div class="imagenes">
                    <carrusel :slides="slidesOtros" :interval="5000"/>
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
            require('@/assets/Servicios/RecepcionyConsolidacionFrio.png'),
            require('@/assets/Servicios/MuellesCarga.png'),
            require('@/assets/Servicios/RecepciondeCarga.png'),
            require('@/assets/Servicios/RecepcionRayosX.png'),
        ],
        slidesCuartosFrios: [
            require('@/assets/Servicios/CuartosFrios.png'),
            require('@/assets/Servicios/barreraInternaCuartosFrios.jpg'),
        ],
        slidesTransportes: [
            require('@/assets/Servicios/contenedorRefrigerado.png'),
        ],
        slidesOtros: [
            require('@/assets/Servicios/OtrosServicios1.png'),
        ],
        content: content
    })
  }
</script>
<style scoped>
    @import './Servicios.css';
</style>