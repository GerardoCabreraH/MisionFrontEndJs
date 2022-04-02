<template>
    <section id="tecnologias" class="technology-section">
        <h2>Proceso de desarrollo web</h2>
        <TechnologyList />
    </section>
</template>

<script>
import TechnologyList from "./Partials/TechnologyList.vue";
export default {
    name: "Technologies",
    components: { TechnologyList }
}
</script>
