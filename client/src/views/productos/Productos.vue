<template>
    <div>
        <h1 class="titulo-productos">SERVICIOS DE FLORISTERIA</h1>
    </div>

    <section>
        <br>
        <div class="titulo-izquierda">
            <p>{{ content.title1 }}</p>
        </div>
        <div class="nuestro-producto-verde">
            <div>
                <div class="imagen-verde">
                    <img src="../../assets/Ruscus-removebg-preview.png" alt="">
                </div>
                <div class="contenido-verde">
                    <p>{{ content.verde1 }}</p>
                </div>
            </div>
            
            <div>
                <div class="imagen-verde">
                    <img src="../../assets/helecho-removebg-preview.png" alt="">
                </div>
                <div class="contenido-verde">
                    <p>{{ content.verde2 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-verde">
                    <img src="../../assets/cocculus-removebg-preview.png" alt="">
                </div>
                <div class="contenido-verde">
                    <p>{{ content.verde3 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-verde">
                    <img src="../../assets/lily_grass-removebg-preview.png" alt="">
                </div>
                <div class="contenido-verde">
                    <p>{{ content.verde4 }}</p>
                </div>
            </div>
        </div>
    </section>
    <div class="separ"/>
    <section>
        <br>
        <div class="titulo-derecha">
            <p>{{ content.title2 }}</p>
        </div>
        <div class="nuestro-producto-flor">
            <div>
                <div class="imagen-flor">
                    <img src="../../assets/rosa- vendela.jpg" alt="">
                </div>
                <br>
                <div class="contenido-flor">
                    <p>{{ content.flor1 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-flor">
                    <img src="../../assets/rosa-gold strike.jpg" alt="">
                </div>
                <br>
                <div class="contenido-flor">
                    <p>{{ content.flor2 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-flor">
                    <img src="../../assets/rosa_-_connie-removebg-preview.png" alt="">
                </div>
                <br>
                <div class="contenido-flor">
                    <p>{{ content.flor3 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-flor">
                    <img src="../../assets/rosa - freedom.jpg" alt="">
                </div>
                <br>
                <div class="contenido-flor">
                    <p>{{ content.flor4 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-flor">
                    <img src="../../assets/rosa-brighton.jpg" alt="">
                </div>
                <br>
                <div class="contenido-flor">
                    <p>{{ content.flor5 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-flor">
                    <img src="../../assets/rosa-orlando.jpg" alt="">
                </div>
                <br>
                <div class="contenido-flor">
                    <p>{{ content.flor6 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-flor">
                    <img src="../../assets/rosa- orange crush.jpg" alt="">
                </div>
                <br>
                <div class="contenido-flor">
                    <p>{{ content.flor7 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-flor">
                    <img src="../../assets/rosa- high magic.jpg" alt="">
                </div>
                <br>
                <div class="contenido-flor">
                    <p>{{ content.flor8 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-flor">
                    <img src="../../assets/rosa-alex.jpg" alt="">
                </div>
                <br>
                <div class="contenido-flor">
                    <p>{{ content.flor9 }}</p>
                </div>
            </div>
            <div/>
            <div>
                <button>VER MAS</button>
            </div>
        </div>
    </section>
</template>
<script>
    import {content} from '@/views/productos/Productos'
    export default{
        name: 'Productos',
        components:{
        },
        data:()=>({
            content: content
        })

    }
</script>
<style scoped>
    @import './Productos.css';
</style>