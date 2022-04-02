<template>
    <nav class='menu'>
        <input type='checkbox' class='responsive-menu' @click="$store.dispatch('updatemenu')"><label></label>
        <ul>
            <li><router-link to='/'>Inicio</router-link></li>
            <li><a href='#sobre-mi'>Sobre mi</a></li>
            <li><a href='#tecnologias'>Tecnologias</a></li>
            <li><a href='#proyectos'>Proyectos</a></li>
            <li><a href='#contacto'>Contacto</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>
