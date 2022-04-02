<template>
    <Header />
    <About />
    <Technologies />
    <Projects />
    <Contact />
    <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import About from "@/components/About.vue";
import Technologies from "@/components/Technologies.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
export default {
    name: "IndexView",
    components: { Header, About, Technologies, Projects, Contact, Footer }
}
</script>
