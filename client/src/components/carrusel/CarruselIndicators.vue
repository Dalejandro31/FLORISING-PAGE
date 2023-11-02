<template>
    <div class="carrusel-indicators">
        <button 
            class="carrusel-indicators-item" 
            :class="{active: currentIndex === index}"
            v-for="(item, index) in total" 
            :key="index"
            @click="$emit('switch', index)"
        />
    </div>
</template>
<script>
    export default{
        emits: ['switch'],
        props: ["total", "currentIndex"]
    }
</script>
<style scoped>
    @import './Carrusel.css';
</style>