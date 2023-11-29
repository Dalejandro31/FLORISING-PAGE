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

        <a @click.prevent="openNav()" class="menu" href="#"><button>Menu</button></a>

        <div class="overlay" id="mobile-menu">
            <a @click.prevent="closeNav()" href="" class="close">&times;</a>

            <div class="overlay-content">
                <a @click="redirigir('/')">INICIO</a>
                
                <div class="desplegable">
                    <a @click="toggleSubMenu('servicios')">SERVICIOS</a>
                    <div class="links-menu-mobile" v-if="subMenuOpen === 'servicios'">
                        <a @click="redirigir('/servicios-Centro-Consolidacion')">Centro de Consolidación</a>
                        <a @click="redirigir('/servicios-Floristeria')">Floristeria</a>
                    </div>
                </div>
                
                <div class="desplegable">
                    <a @click="toggleSubMenu('nosotros')">SOBRE NOSOTROS</a>
                    <div class="links-menu-mobile" v-if="subMenuOpen === 'nosotros'">
                        <a @click="redirigir('/nosotros-FLORISING-COMMERCIAL-&-LOGISTICS-GROUP')">Florising Centro de consolidacion</a>
                        <a @click="redirigir('/nosotros-FLORISING-CLG-SAS')">Florising Exportaciones</a>
                    </div>
                </div>
                
                <a onclick="changePageTitle()" @click="$event => redirigir('/contactanos')">CONTACTANOS</a>
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
    methods: {
        redirigir(ruta) {
            this.$router.push(ruta);
            this.closeNav(); 
        },
        openNav() {
            document.getElementById("mobile-menu").style.width = "100%";
        },
        closeNav() {
            document.getElementById("mobile-menu").style.width = "0%";
        },
        toggleSubMenu(menu) {
            if (this.subMenuOpen === menu) {
                this.subMenuOpen = null;
            } else {
                this.subMenuOpen = menu;
            }
        },
        changePageTitle(){
            newPageTitle='CONTACTANOS';
            document.title=newPageTitle;
        },
    }
    
}
</script>
<style scoped>
@import './Nav.css';
</style>