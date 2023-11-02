<template>
    <div class="carrusel">
        <div class="carrusel-inner">
            <CarruselIndicators
                v-if="indicators"
                :total="slides.length" 
                :current-index="currentSlide"
                @switch="switchSlide($event)"
            />
            <CarruselItem 
                v-for="(slide, index) in slides" 
                :slide="slide" 
                :key="`item-${index}`"
                :current-slide="currentSlide"
                :index="index"
                :direction="direction"
            />
            <CarruselControls 
                v-if="controls" 
                @prev="prev" 
                @next="next"
            />
        </div>
    </div>
</template>


<script>
    import  CarruselItem from '@/components/carrusel/CarruselItem.vue'
    import  CarruselControls from '@/components/carrusel/CarruselControls.vue'
    import  CarruselIndicators from '@/components/carrusel/CarruselIndicators.vue'
    export default{
        props: {
            slides: {
                type: Array,
                required: true
            },
            controls: {
                type: Boolean,
                default: false,
            },
            indicators: {
                type: Boolean,
                default: false
            },
            interval:{
                type: Number,
                default: 5000,
            }
        },
        components: { CarruselItem, CarruselControls, CarruselIndicators },
        data: () => ({
            currentSlide: 4,
            sliderInterval: null,
            direction: "right"
        }),
        methods:{
            setCurrentslide (index){
                this.currentSlide = index;
            },
            prev (step = -1) {
                const index = 
                this.currentSlide > 0 ? this.currentSlide - step : this.slides.length -1;
                this.setCurrentslide(index);
                this.direction = "left";
                this.startslideTimer();
            },
            _next(step = 1){
                const index = this.currentSlide < this.slides.length -1 ? this.currentSlide + step : 0;
                this.setCurrentslide(index);
                this.direction = "right";
            },  
            next (step = 1) {
                this._next(step);
                this.startslideTimer();
            },
            startslideTimer(){
                this.stopSlideTimer();
                this.sliderInterval = setInterval(() => {
                    this.next()
                }, this.interval);
            },
            stopSlideTimer(){
                clearInterval(this.sliderInterval);  
            },
            switchSlide(index){
                const step = index - this.currentSlide;
                if (step > 0) {
                    this.next(step)
                }else{
                    this.prev(step)
                }
            }
        },
        mounted (){
            this.startslideTimer();
        },
        beforeMount(){
            clearInterval(this.sliderInterval)
        },  

    }
</script>

<style scoped>
    @import './Carrusel.css';
</style>