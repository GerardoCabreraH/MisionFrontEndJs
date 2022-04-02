<template>
    <section id="proyectos" class="project-section">
        <h2>Proyectos</h2>
        <ProjectList />
    </section>
</template>

<script>
import ProjectList from "./Partials/ProjectList.vue";
export default {
    name: "Projects",
    components: { ProjectList }
}
</script>
