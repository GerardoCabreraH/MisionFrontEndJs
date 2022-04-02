<template>
    <section id="contacto" class="contact-section">
        <h2>Contacto</h2>
        <ContactList />
    </section>
</template>

<script>
import ContactList from "./Partials/ContactList.vue";
export default {
    name: "Contact",
    components: { ContactList }
}
</script>
