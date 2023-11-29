<template>
    <div class="nosotros">
      <div class="titulo-nosotros">
        <h1>{{ content.title }}</h1>
      </div>
      <section class="objetivos">
        <div class="contenido-objetivos">
          <h1>{{ content.tituloQuienesSomos }}</h1>
          <div/>
          <br>
          <br>
          <p>{{ content.content3 }}</p>
        </div>
        <div class="contenido-objetivos">
          <h1>{{ content.tituloValores }}</h1>
          <div/>
          <br>
          <br>
          <p>{{ content.content4 }}</p>
        </div>
      </section>

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
    </div>
  </template>

<script>
  import {content} from '@/views/nosotrosFlorisingClgSas/NosotrosClgSas'
  export default {
    name: 'Inicio',
    data:() => ({
      content: content
    })
  }
</script>
<style scoped>
    @import './NosotrosclgSas.css';
</style>