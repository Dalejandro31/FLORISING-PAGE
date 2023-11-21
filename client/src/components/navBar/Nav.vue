<template>
    <nav class="NavBar">
        <div class="logo">
            <img src="../../assets/logo_florising-removebg-preview.png" alt="Logo">
        </div>
        <div class="links">
            <button @click="redirigir('/')">INICIO</button>
            <button @click="redirigir('/servicios')">SERVICIOS</button>
            <div class="desplegable">
                <button>SOBRE NOSOTROS</button>
                <div class="links-menu">
                    <a @click="redirigir('/nosotros-FLORISING-COMMERCIAL-&-LOGISTICS-GROUP')">FLORISING COMMERCIAL & LOGISTICS GROUP</a>
                    <a @click="redirigir('/nosotros-FLORISING-CLG-SAS')">FLORISING CLG SAS</a>
                </div>
            </div>
            <button @click="$event => redirigir('/contactanos')">CONTACTANOS</button>
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