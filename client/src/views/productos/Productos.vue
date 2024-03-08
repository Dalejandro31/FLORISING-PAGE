<template>
    <div class="titulo-productos">
        <h1 >SERVICIOS DE FLORISTERIA</h1>
    </div>

    <section>
        <br>
        <div class="titulo-izquierda" id="productos-verdes">
            <p>{{ content.title1 }}</p>
        </div>
        <div class="nuestro-producto-verde">
            <div>
                <div class="imagen-verde">
                    <img src="../../assets/Prod-Verde/Ruscus-removebg-preview.png" alt="">
                </div>
                <div class="contenido-verde">
                    <p>{{ content.verde1 }}</p>
                </div>
            </div>
            
            <div>
                <div class="imagen-verde">
                    <img src="../../assets/Prod-Verde/helecho-removebg-preview.png" alt="">
                </div>
                <div class="contenido-verde">
                    <p>{{ content.verde2 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-verde">
                    <img src="../../assets/Prod-Verde/cocculus-removebg-preview.png" alt="">
                </div>
                <div class="contenido-verde">
                    <p>{{ content.verde3 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-verde">
                    <img src="../../assets/Prod-Verde/lily_grass-removebg-preview.png" alt="">
                </div>
                <div class="contenido-verde">
                    <p>{{ content.verde4 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-verde">
                    <img src="../../assets/Prod-Verde/EucalyptoBabyBlue-removebg-preview.png" alt="">
                </div>
                <div class="contenido-verde">
                    <p>{{ content.verde5 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-verde">
                    <img src="../../assets/Prod-Verde/Gypso-removebg-preview.png" alt="">
                </div>
                <div class="contenido-verde">
                    <p>{{ content.verde6 }}</p>
                </div>
            </div>
        </div>
    </section>
    <div class="separ"/>
    <section>
        <br>
        <div class="titulo-derecha" id="productos-rosas">
            <p>{{ content.title2 }}</p>
        </div>
        <div class="nuestro-producto-flor">
            <div>
                <div class="imagen-flor">
                    <img src="../../assets/Rosas/rosa-vendela.png" alt="">
                </div>
                <br>
                <div class="contenido-flor">
                    <p>{{ content.flor1 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-flor">
                    <img src="../../assets/Rosas/rosa-gold-strike.png" alt="">
                </div>
                <br>
                <div class="contenido-flor">
                    <p>{{ content.flor2 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-flor">
                    <img src="../../assets/Rosas/rosa-connie.png" alt="">
                </div>
                <br>
                <div class="contenido-flor">
                    <p>{{ content.flor3 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-flor">
                    <img src="../../assets/Rosas/rosa-freedom.png" alt="">
                </div>
                <br>
                <div class="contenido-flor">
                    <p>{{ content.flor4 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-flor">
                    <img src="../../assets/Rosas/rosa-brighton.png" alt="">
                </div>
                <br>
                <div class="contenido-flor">
                    <p>{{ content.flor5 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-flor">
                    <img src="../../assets/Rosas/rosa-orlando.png" alt="">
                </div>
                <br>
                <div class="contenido-flor">
                    <p>{{ content.flor6 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-flor">
                    <img src="../../assets/Rosas/rosa-orange-crush.png" alt="">
                </div>
                <br>
                <div class="contenido-flor">
                    <p>{{ content.flor7 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-flor">
                    <img src="../../assets/Rosas/rosa-high-magic.png" alt="">
                </div>
                <br>
                <div class="contenido-flor">
                    <p>{{ content.flor8 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-flor">
                    <img src="../../assets/Rosas/rosa-alex.png" alt="">
                </div>
                <br>
                <div class="contenido-flor">
                    <p>{{ content.flor9 }}</p>
                </div>
            </div>

        </div>
        <div>
            <div class="section">

                <button @click="togglePopUp()">VER MAS</button>
            </div>
        </div>
        <div>
            <Transition name="fade">
                <PopUpFlores v-show="popUp" @close="togglePopUp()"/>
            </Transition>
        </div>
    </section>
    <div class="separ"/>
    <section>
        <br>
        <div class="titulo-izquierda">
            <p>{{ content.title3 }}</p>
        </div>
        <div class="nuestro-producto-bouquet">
            <div>
                <div class="imagen-bouquet">
                    <img src="../../assets/Buquets/Bouquet1.jpg" alt="">
                </div>
            </div>

            <div>
                <div class="imagen-bouquet">
                    <img src="../../assets/Buquets/Bouquet2.jpg" alt="">
                </div>
            </div>

            <div>
                <div class="imagen-bouquet">
                    <img src="../../assets/Buquets/Bouquet3.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
    <div class="separ"/>
    <section>
        <br>
        <div class="titulo-derecha">
            <p>{{ content.title4 }}</p>
        </div>
        <div class="nuestro-producto-variedad">
            <div>
                <div class="imagen-variedad">
                    <img src="../../assets/Diversificacion/girasol.jpg" alt="">
                </div>
                <br>
                <div class="contenido-variedad">
                    <p>{{ content.diver1 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-variedad">
                    <img src="../../assets/Diversificacion/proteas.jpg" alt="">
                </div>
                <br>
                <div class="contenido-variedad">
                    <p>{{ content.diver2 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-variedad">
                    <img src="../../assets/Diversificacion/gerbera.jpg" alt="">
                </div>
                <br>
                <div class="contenido-variedad">
                    <p>{{ content.diver3 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-variedad">
                    <img src="../../assets/Diversificacion/clavel.jpg" alt="">
                </div>
                <br>
                <div class="contenido-variedad">
                    <p>{{ content.diver4 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-variedad">
                    <img src="../../assets/Diversificacion/astromelia.jpg" alt="">
                </div>
                <br>
                <div class="contenido-variedad">
                    <p>{{ content.diver5 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-variedad">
                    <img src="../../assets/Diversificacion/agapantos.jpg" alt="">
                </div>
                <br>
                <div class="contenido-variedad">
                    <p>{{ content.diver6 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-variedad">
                    <img src="../../assets/Diversificacion/boca-dragon.jpg" alt="">
                </div>
                <br>
                <div class="contenido-variedad">
                    <p>{{ content.diver7 }}</p>
                </div>
            </div>
            <div>
                <div class="imagen-variedad">
                    <img src="../../assets/Diversificacion/aster.jpg" alt="">
                </div>
                <br>
                <div class="contenido-variedad">
                    <p>{{ content.diver8 }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import {content} from '@/views/productos/Productos'
    import PopUpFlores from '@/components/popUpFlores/PopUpFlores.vue';
    export default{
        name: 'Productos',
        components:{
            PopUpFlores
        },
        data:()=>({
            popUp: false,
            content: content
        }),
        methods:{
            togglePopUp(){
                this.popUp = !this.popUp;
            }
        }

    }
</script>
<style scoped>
    @import './Productos.css';
</style>