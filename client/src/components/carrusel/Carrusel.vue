<template>
    <div class="carrusel">
        <div class="carrusel-inner">
            <CarruselItem 
                v-for="(slide, index) in slides" 
                :slide="slide" 
                :key="`item-${index}`"
                :current-slide="currentSlide"
                :index="index"
                :direction="direction"
            />
            <CarruselControls @prev="prev" @next="next"/>
        </div>
    </div>
</template>


<script>
    import  CarruselItem from '@/components/carrusel/CarruselItem.vue'
    import  CarruselControls from '@/components/carrusel/CarruselControls.vue'
    export default{
        props: ['slides'],
        components: { CarruselItem, CarruselControls },
        data: () => ({
            currentSlide: 4,
            sliderInterval: null,
            direction: "right"
        }),
        methods:{
            setCurrentslide (index){
                this.currentSlide = index;
            },
            prev () {
                const index = 
                this.currentSlide > 0 ? this.currentSlide - 1 : this.slides.length -1;
                this.setCurrentslide(index);
                this.direction = "left";
            },
            next () {
                const index = this.currentSlide < this.slides.length -1 ? this.currentSlide + 1 : 0;
                this.setCurrentslide(index);
                this.direction = "right";
            },
        },
        mounted (){
             this.sliderInterval = setInterval(() => {
                 this.next()
             }, 6000)
        },
        beforeMount(){
            clearInterval(this.sliderInterval)
        },  

    }
</script>

<style scoped>
    @import './Carrusel.css';
</style>