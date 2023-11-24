<template>
    <nav class="NavBar">
        <div class="logo">
            <img src="../../assets/logo_florising-removebg-preview.png" alt="Logo">
        </div>
        <div class="links">
            <button @click="redirigir('/')">INICIO</button>
            
            <div class="desplegable">
                <button>SERVICIOS</button>
                <div class="links-menu">
                    <a @click=" redirigir('/servicios-Centro-Consolidacion')">CENTRO DE CONSOLIDACION</a>
                    <a @click="redirigir('/servicios-Floristeria')">FLORISTERIA</a>
                </div>
            </div>
            
            <div class="desplegable">
                <button>SOBRE NOSOTROS</button>
                <div class="links-menu">
                    <a @click="redirigir('/nosotros-FLORISING-COMMERCIAL-&-LOGISTICS-GROUP')">FLORISING CENTRO DE CONSOLIDACION</a>
                    <a @click="redirigir('/nosotros-FLORISING-CLG-SAS')">FLORISING EXPORTACIONES</a>
                </div>
            </div>
            <button @click="$event => redirigir('/contactanos')">CONTACTANOS</button>
        </div>
        <a @click="openNav()" class="menu" href="#"><button>Menu</button></a>

        <div class="overlay" id="mobile-menu">
            <a @click="closeNav()" href="" class="close">&times;</a>
            <div class="overlay-content">
                <a href="">INICIO</a>
                <a href="">SERVICIOS</a>
                <a href="">SOBRE NOSOTROS</a>
                <a href="">CONTACTANOS</a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    methods:{
        redirigir(ruta){
            this.$router.push(ruta);
        },
        openNav(){
            document.getElementById("mobile-menu").style.width = "100%";
        },
        closeNav(){
            document.getElementById("mobile-menu").style.width = "0%";
        }
    }
}
</script>
<style scoped>
@import './Nav.css';
</style>