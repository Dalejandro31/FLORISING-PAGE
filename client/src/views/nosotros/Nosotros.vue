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
          <div/>
          <br>
          <br>
          <p>{{ content.content5 }}</p>
        </div>
        <div class="contenedor-objetivos-items">
          <div class="objetivos-items">
            <img src="../../assets/servicios.png" alt="" class="imgObtetivos-items">
            <div class="contenido-objetivos-items">
              <p>{{ content.satisfacerNecesidades }}</p>
            </div>
          </div>
          <div class="objetivos-items">
            <img src="../../assets/prevencion.png" alt="" class="imgObtetivos-items">
            <div class="contenido-objetivos-items">
              <p>{{ content.prevencion }}</p>
            </div>
          </div>
          <div class="objetivos-items">
            <img src="../../assets/culturaParticipacion.png" alt="" class="imgObtetivos-items">
            <div class="contenido-objetivos-items">
              <p>{{ content.cultura }}</p>
            </div>
          </div>
          <div class="objetivos-items">
            <img src="../../assets/ReaccionEficaz.png" alt="" class="imgObtetivos-items">
            <div class="contenido-objetivos-items">
              <p>{{ content.reaccionEficaz }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="objetivos">
        <div class="contenido-objetivos">
          <h1>{{ content.tituloPoliticas }}</h1>
          <div/>
          <br>
          <br>
          <p>{{ content.content6 }}</p>
        </div>
        <div class="contenedor-politicas-items">
          <div class="politicas-items">
            <div class="contenido-politicas-items">
              <div class="punto-derecha"/>
              <div class="punto-izquierda"/>
              <p>{{ content.MantenerIntegridad }}</p>
            </div>
          </div>
          <div class="politicas-items">
            <div class="contenido-politicas-items">
              <div class="punto-derecha"/>
              <div class="punto-izquierda"/>
              <p>{{ content.prevencionActividades }}</p>
            </div>
          </div>
          <div class="politicas-items">
            <div class="contenido-politicas-items">
              <div class="punto-derecha"/>
              <div class="punto-izquierda"/>
              <p>{{ content.CumplirRequisitos }}</p>
            </div>
          </div>
          <div class="politicas-items">
            <div class="contenido-politicas-items">
              <div class="punto-derecha"/>
              <div class="punto-izquierda"/>
              <p>{{ content.MejoraContinua }}</p>
            </div>
          </div>
          <div class="politicas-items">
            <div class="contenido-politicas-items">
              <div class="punto-derecha"/>
              <div class="punto-izquierda"/>
              <p>{{ content.ProtegerColaboradores }}</p>
            </div>
          </div>
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