<template>
<title>Contactenos</title>
<div class="titulo-contactanos">
    <h1>CONTACTANOS</h1>
</div>
<section class="contactanos">
    <div class="mapa">
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15903.713712008077!2d-74.26942971588612!3d4.782297441262035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f79b6cd619b65%3A0x37050788935396e7!2sTitanium%20Flowers%20Investments%20SAS%20-%20Madrid%2C%20Cundinamarca!5e0!3m2!1ses-419!2sco!4v1700514669762!5m2!1ses-419!2sco" 
            width="850" height="400" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    <div>
        <div class="info">
            <img src="../../assets/Contactenos/ubicacion.png" alt="">
            <div class="contenido-cont">
                <p>{{ content.ubicacion }}</p>
                <p>{{ content.ubicacion2 }}</p>
            </div>
        </div>
    </div>
    <div>
        <div class="info">
            <img src="../../assets/Contactenos/email.png" alt="">
            <div class="contenido-cont">
                <p>{{ content.email }}</p>
                <p>{{ content.email2 }}</p>
            </div>
        </div>
    </div>
    <div>
        <div class="info">
            <img src="../../assets/Contactenos/telefono.png" alt="">
            <div class="contenido-cont">
                <p>{{ content.telefono }}</p>
                <p>{{ content.telefono2 }}</p>
            </div>
        </div>
    </div>
</section>
</template>
<script>
import { content } from '../contactanos/Contactanos';
export default{
    name: 'Contactanos',
    components: {

    },
    data:()=>({
        content: content
    })
}


</script>
<style scoped>
    @import './Contactanos.css';
</style>