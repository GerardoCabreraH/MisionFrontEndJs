<template>
    <header id="navbar" class="navbarWeb fixed-top">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <router-link to="/"><img
                        src="https://pasteleria.celtech.com.mx/assets/img/Pasteleria%20Monterrollo-Fondo%20Blanco.png" alt="logo-monterrollo"
                        class="img-fluid img-navbar"></router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#inicio">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#nosotros">Sobre nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#precios">Precios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#pedidos">Pedido</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contacto">Contacto</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                            Pastelero
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <router-link to="/admin/login" class="dropdown-item">Login</router-link>
                                <router-link to="/admin/dashboard" class="dropdown-item">Panel</router-link>
                            </div>
                        </li>
                        <li class="nav-item">
                            <router-link to="/admin/login" class="nav-link">Pastelero</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /*Barra navegadora*/
    .img-navbar {
        width: 50px;
        height: 50px;
    }
    .navbarWeb {
        background-color: #FCE6E2;
    }
</style>