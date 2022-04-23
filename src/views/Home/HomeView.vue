<template>
  <div class="home-container">
    <div class="contact-container">
      <div class="title">
        <h1>{{ $t("homePage.contacts") }}</h1>
      </div>
      <v-divider class="custom-divider"></v-divider>
      <br />
      <div class="contact-list">
        <ContactCard
          v-for="(contact, id) in contacts"
          :url="contact.url"
          :name="contact.name"
          :email="contact.email"
          :contact="contact.contact"
          :key="id"
          :id="id"
          :detail="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ContactCard from "@/components/Contact/ContactCard.vue";

export default {
  components: { ContactCard },
  name: "HomeTest",
  data() {
    return {
      contacts: [],
    };
  },
  mounted() {
    if (localStorage.getItem("contacts")) {
      this.contacts = JSON.parse(localStorage.getItem("contacts"));
    }
  },
};
</script>

<style src="./style.scss" lang="scss" scoped />
