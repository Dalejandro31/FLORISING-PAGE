<template>
    <nav class="NavBar">
        <div class="logo">
            <p>FLORISING</p>
        </div>
        <div class="links">
            <button @click="redirigir('/')">INICIO</button>
            <button @click="redirigir('/servicios')">SERVICIOS</button>
            <button @click="redirigir('/nosotros')">SOBRE NOSOTROS</button>
            <button >CONTACTANOS</button>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    methods:{
        redirigir(ruta){
            this.$router.push(ruta);
        }
    }
}
</script>
<style scoped>
@import './Nav.css';
</style>