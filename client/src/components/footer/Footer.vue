<template>
    <footer class="footer">
        <div class="redes-contacto">
            <div class="redes">
                <button><img src="../../assets/Redes/instagram.png" alt=""></button>
                <button><img src="../../assets/Redes/facebook.png" alt=""></button>
                <button><img src="../../assets/Redes/youtube.png" alt=""></button>
                <button><img src="../../assets/Redes/twitter-x.png" alt=""></button>
            </div>
            <div/>
            <div class="contacto">
                <div class="titulo-cont">
                    <h1>Contacto</h1>
                    <div class="separ-foot"/>
                </div>
                <img src="../../assets/Contactenos/ubicacion.png" alt="">
                <div class="cont-contac">
                    <p>{{content.ubicacion2}}</p>
                </div>
                <img src="../../assets/Contactenos/telefono.png" alt="">
                <div class="cont-contac">
                    <p>{{ content.telefono2 }}</p>
                </div>
                <img src="../../assets/Contactenos/email.png" alt="">
                <div class="cont-contac">
                    <p>{{content.email2}}</p>
                </div>
                
            </div>

        </div>
    </footer>
</template>

<script>
import { content } from '@/views/contactanos/Contactanos';
export default {
    name: 'Footer',
    components:{

    },
    data:()=>({
        content: content
    })
}

</script>
<style scoped>
@import './Footer.css';
</style>
