<template>
    <button class="carrusel-control left" @click="$emit('prev')">Prev</button>
    <button class="carrusel-control right" @click="$emit('next')">Next</button>
</template>
<script>
    export default{
        emits: ['prev', 'next']
    }
</script>
<style scoped>
    @import './Carrusel.css';
</style>