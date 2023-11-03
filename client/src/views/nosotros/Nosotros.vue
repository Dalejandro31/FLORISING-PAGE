<template>
    <div class="nosotros">
      <div class="titulo-nosotros">
        <p>{{ content.title }}</p>
      </div>
      <section class="mision-vision">
        <div class="card">
          <div>
            <h1>
              {{ content.titleMision }}
            </h1>
          </div>
          <p>
            {{ content.content1 }}
          </p>
        </div>
        <div class="card">
          <div>
            <h1>
              {{ content.titleVision }}
            </h1>
          </div>
          <p>
            {{ content.content2 }}
          </p>
        </div>
      </section>

      <section class="reseña-historica">
        <div class="contenido-reseña">
          <h1>{{ content.titleReseñaHistorica }}</h1>
          <div/>
          <br>
          <br>
          <p>{{ content.content3 }}</p>
          <p>{{ content.content4 }}</p>
        </div>
        <div class="infraestructura">
          <div>
            <img src="../../assets/fachada.png" alt="">
          </div>
        </div>
      </section>

      <section class="objetivos">
        <div class="contenido-objetivos">
          <h1>{{ content.tituloObjetivos }}</h1>
          <p>{{ content.content5 }}</p>
        </div>
        <div class="objetivos-items">
          <img src="../../assets/servicios.png" alt="">
          <p>{{ content.integridadProcesos }}</p>
        </div>
        <div class="objetivos-items">
          <img src="../../assets/servicios.png" alt="">
          <p>{{ content.integridadProcesos }}</p>
        </div>
        <div class="objetivos-items">
          <img src="../../assets/servicios.png" alt="">
          <p>{{ content.integridadProcesos }}</p>
        </div>
        <div class="objetivos-items">
          <img src="../../assets/servicios.png" alt="">
          <p>{{ content.integridadProcesos }}</p>
        </div>
      </section>
    </div>
  </template>

<script>
  import {content} from '@/views/nosotros/Nosotros'
  export default {
    name: 'Inicio',
    data:() => ({
      content: content
    })
  }
</script>
<style scoped>
    @import './Nosotros.css';
</style>