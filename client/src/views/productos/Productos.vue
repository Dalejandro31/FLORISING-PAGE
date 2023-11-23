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
        </div>
    </section>
    <div class="separ"/>
    <section class="section">
        <br>
        <div class="titulo-derecha">
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
            <div/>
            <div>
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
        <div class="nuestro-producto-flor">

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