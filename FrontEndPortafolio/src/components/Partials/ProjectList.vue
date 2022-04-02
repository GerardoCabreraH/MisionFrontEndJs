<template>
    <div class="row-three-columns">
        <div class="column">
            <div class="card-project">
                <img src="../../assets/img/practica-html.png" alt="image-project" class="card-project-img">
                <div class="card-project-container">
                    <h3><b>Pastelería</b></h3>
                    <p>Página hecha en HTML y puesta en frontend mediante VueJS como muestra y en funcionamiento de muestra backend mediante PHP Laravel.</p>
                    <button class="button" @click="$store.dispatch('showDialogPasteleria')">Ver</button>
                </div>
            </div>
            <dialog id="dialogPasteleria" class="card-project-dialog">
                <img src="../../assets/img/practica-html.png" alt="image-project" class="card-project-img">
                <div class="card-project-dialog-container">
                    <h3 class="card-project-dialog-title"><b>Pasteleria</b></h3>
                    <p class="card-project-dialog-text"><a href="https://github.com/GerardoCabreraH/FrontEndMisionHTML">Github HTML</a></p>
                    <p class="card-project-dialog-text"><a href="https://github.com/GerardoCabreraH/FrontEndMisionVue">Github VueJS</a></p>
                    <p class="card-project-dialog-text"><a href="https://github.com/GerardoCabreraH/PasteleriaMonterollo">Github Laravel</a></p>
                    <p class="card-project-dialog-text"><a href="https://pasteleria.celtech.com.mx/">Página muestra en Laravel</a></p>
                    <p class="card-project-dialog-text"><a href="https://practicas.celtech.com.mx/">Página muestra en VueJS</a></p>
                    <button class="button" @click="$store.dispatch('hideDialogPasteleria')">Cerrar</button>
                </div>
            </dialog>
        </div>
        <div class="column">
            <div class="card-project">
                <img src="../../assets/img/practica-css.png" alt="image-project" class="card-project-img">
                <div class="card-project-container">
                    <h3><b>Vacunate</b></h3>
                    <p>Página hecha en HTML y CSS y puesta en funcionamiento de demostración backend mediante PHP Laravel</p>
                    <button class="button" @click="$store.dispatch('showDialogVacunacion')">Ver</button>
                </div>
            </div>
            <dialog id="dialogVacunacion" class="card-project-dialog">
                <img src="../../assets/img/practica-css.png" alt="image-project" class="card-project-img">
                <div class="card-project-dialog-container">
                    <h3 class="card-project-dialog-title"><b>Vacunate</b></h3>
                    <p class="card-project-dialog-text"><a href="https://github.com/GerardoCabreraH/FrontEndMisionCSS">Github HTML CSS</a></p>
                    <p class="card-project-dialog-text"><a href="https://github.com/GerardoCabreraH/Vacunate">Github Laravel</a></p>
                    <p class="card-project-dialog-text"><a href="https://pasteleria.celtech.com.mx/vacunas/">Página muestra en Laravel</a></p>
                    <button class="button" @click="$store.dispatch('hideDialogVacunacion')">Cerrar</button>
                </div>
            </dialog>
        </div>
        <div class="column">
            <div class="card-project">
                <img src="../../assets/img/practica-javascript.png" alt="image-project" class="card-project-img">
                <div class="card-project-container">
                    <h3><b>Pokedex</b></h3>
                    <p>Página hecha en HTML, CSS y Javascript conectado a la API de Pokemon (PokeAPI)</p>
                    <button class="button" @click="$store.dispatch('showDialogPokedex')">Ver</button>
                </div>
            </div>
            <dialog id="dialogPokedex" class="card-project-dialog">
                <img src="../../assets/img/practica-javascript.png" alt="image-project" class="card-project-img">
                <div class="card-project-dialog-container">
                    <h3 class="card-project-dialog-title"><b>Pokedex</b></h3>
                    <p class="card-project-dialog-text"><a href="https://github.com/GerardoCabreraH/FrontEndMisionJavaScript">Github Javascript</a></p>
                    <p class="card-project-dialog-text"><a href="https://pasteleria.celtech.com.mx/pokedex/">Página muestra en Javascript</a></p>
                    <button class="button" @click="$store.dispatch('hideDialogPokedex')">Cerrar</button>
                </div>
            </dialog>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectList",
}
</script>
