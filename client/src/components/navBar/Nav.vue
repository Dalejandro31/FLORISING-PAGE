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
                <a @click="redirigir('/')">INICIO</a>
                
                <div class="desplegable">
                    <a @click="toggleSubMenu('servicios')">SERVICIOS</a>
                    <div class="links-menu" v-if="subMenuOpen === 'servicios'">
                        <a @click="redirigir('/servicios-Centro-Consolidacion')">CENTRO DE CONSOLIDACION</a>
                        <a @click="redirigir('/servicios-Floristeria')">FLORISTERIA</a>
                    </div>
                </div>
                
                <div class="desplegable">
                    <a @click="toggleSubMenu('nosotros')">SOBRE NOSOTROS</a>
                    <div class="links-menu" v-if="subMenuOpen === 'nosotros'">
                        <a @click="redirigir('/nosotros-FLORISING-COMMERCIAL-&-LOGISTICS-GROUP')">FLORISING CENTRO DE CONSOLIDACION</a>
                        <a @click="redirigir('/nosotros-FLORISING-CLG-SAS')">FLORISING EXPORTACIONES</a>
                    </div>
                </div>
                
                <a @click="$event => redirigir('/contactanos')">CONTACTANOS</a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            subMenuOpen: null
        };
    },
    methods:{
        redirigir(ruta){
            this.$router.push(ruta);
        },
        openNav(){
            document.getElementById("mobile-menu").style.width = "100%";
        },
        closeNav(){
            document.getElementById("mobile-menu").style.width = "0%";
        },
        toggleSubMenu(menu) {
            if (this.subMenuOpen === menu) {
                this.subMenuOpen = null; // Cierra el submenú si ya está abierto
            } else {
                this.subMenuOpen = menu; // Abre el submenú si está cerrado
            }
        },
    }
}
</script>
<style scoped>
@import './Nav.css';
</style>