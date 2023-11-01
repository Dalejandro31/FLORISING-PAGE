<template>
    
        <transition :name="transitionEffect">
            <div class="carrusel-item" v-show="currentSlide === index">
                <img :src="slide" />
            </div>
        </transition>
    
</template>

<script>
    export default{
        props: ["slide", "currentSlide", "index", "direction"],
        computed: {
            transitionEffect (){
                return this.direction === "right" ? "slide-out" : "slide-in"
            }
        }
    }
</script>
<style scoped>
    @import './Carrusel.css';
</style>