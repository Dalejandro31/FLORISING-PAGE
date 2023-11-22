<template>
    <div class="pop-up">
        <div class="pop-up-inner">
            <div class="pop-up-close" @click="close()">
                &times;
            </div>
            <h1 class="titulo-flores">
                NUESTRAS FLORES
            </h1>
            <div class="separ"/>
            <section>
                <div class="nuestro-producto-flor-pop-up">
                    <div>
                        <div class="imagen-flor-pop-up">
                            <img src="../../assets/Rosas/rosa-vendela.png" alt="">
                        </div>
                        <br>
                        <div class="contenido-flor">
                            <p>{{ content.flor1 }}</p>
                        </div>
                    </div>
                    <div>
                        <div class="imagen-flor-pop-up">
                            <img src="../../assets/Rosas/rosa-gold-strike.png" alt="">
                        </div>
                        <br>
                        <div class="contenido-flor">
                            <p>{{ content.flor2 }}</p>
                        </div>
                    </div>
                    <div>
                        <div class="imagen-flor-pop-up">
                            <img src="../../assets/Rosas/rosa-connie.png" alt="">
                        </div>
                        <br>
                        <div class="contenido-flor">
                            <p>{{ content.flor3 }}</p>
                        </div>
                    </div>
                    <div>
                        <div class="imagen-flor-pop-up">
                            <img src="../../assets/Rosas/rosa-freedom.png" alt="">
                        </div>
                        <br>
                        <div class="contenido-flor">
                            <p>{{ content.flor4 }}</p>
                        </div>
                    </div>
                    <div>
                        <div class="imagen-flor-pop-up">
                            <img src="../../assets/Rosas/rosa-brighton.png" alt="">
                        </div>
                        <br>
                        <div class="contenido-flor">
                            <p>{{ content.flor5 }}</p>
                        </div>
                    </div>
                    <div>
                        <div class="imagen-flor-pop-up">
                            <img src="../../assets/Rosas/rosa-orlando.png" alt="">
                        </div>
                        <br>
                        <div class="contenido-flor">
                            <p>{{ content.flor6 }}</p>
                        </div>
                    </div>
                    <div>
                        <div class="imagen-flor-pop-up">
                            <img src="../../assets/Rosas/rosa-orange-crush.png" alt="">
                        </div>
                        <br>
                        <div class="contenido-flor">
                            <p>{{ content.flor7 }}</p>
                        </div>
                    </div>
                    <div>
                        <div class="imagen-flor-pop-up">
                            <img src="../../assets/Rosas/rosa-high-magic.png" alt="">
                        </div>
                        <br>
                        <div class="contenido-flor">
                            <p>{{ content.flor8 }}</p>
                        </div>
                    </div>
                    <div>
                        <div class="imagen-flor-pop-up">
                            <img src="../../assets/Rosas/rosa-alex.png" alt="">
                        </div>
                        <br>
                        <div class="contenido-flor">
                            <p>{{ content.flor9 }}</p>
                        </div>
                    </div>
                    <div>
                        <div class="imagen-flor-pop-up">
                            <img src="../../assets/Rosas/rosa-pink-mondial.png" alt="">
                        </div>
                        <br>
                        <div class="contenido-flor">
                            <p>{{ content.flor10 }}</p>
                        </div>
                    </div>
                    <div>
                        <div class="imagen-flor-pop-up">
                            <img src="../../assets/Rosas/rosa-topaz.png" alt="">
                        </div>
                        <br>
                        <div class="contenido-flor">
                            <p>{{ content.flor11 }}</p>
                        </div>
                    </div>
                    <div>
                        <div class="imagen-flor-pop-up">
                            <img src="../../assets/Rosas/rosa-moody-blue.png" alt="">
                        </div>
                        <br>
                        <div class="contenido-flor">
                            <p>{{ content.flor12 }}</p>
                        </div>
                    </div>
                    <div>
                        <div class="imagen-flor-pop-up">
                            <img src="../../assets/Rosas/rosa-moviestar.png" alt="">
                        </div>
                        <br>
                        <div class="contenido-flor">
                            <p>{{ content.flor13 }}</p>
                        </div>
                    </div>
                    <div>
                        <div class="imagen-flor-pop-up">
                            <img src="../../assets/Rosas/rosa-pink-floyd.png" alt="">
                        </div>
                        <br>
                        <div class="contenido-flor">
                            <p>{{ content.flor14 }}</p>
                        </div>
                    </div>
                    <div>
                        <div class="imagen-flor-pop-up">
                            <img src="../../assets/Rosas/rosa-mondial.png" alt="">
                        </div>
                        <br>
                        <div class="contenido-flor">
                            <p>{{ content.flor15 }}</p>
                        </div>
                    </div>
                    <div/>
                    <div>
                        <button @click="close()">
                        CERRAR  
                    </button>
                    </div>
                </div>
                
            </section>
            <div class="separ"/>
        </div>
    </div>
</template>

<script>
    import {content} from '../../views/productos/Productos'
    export default{
        data:()=>({
            content: content
        }),
        methods:{
            close(){
                this.$emit('close')
            }
        }
    }
</script>

<style>
    @import './PopUpFlores.css';
</style>