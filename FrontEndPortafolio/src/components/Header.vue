<template>
    <header>
        <Navbar />
        <Hero />
    </header>
</template>

<script>
import Navbar from "./Partials/Navbar.vue";
import Hero from "./Partials/Hero.vue";
export default {
    name: "Header",
    components: { Navbar, Hero }
}
</script>
