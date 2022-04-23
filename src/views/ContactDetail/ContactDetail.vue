<template>
  <div class="details-page">
    <div class="title">
      <div class="title-button" @click="goBack()">
        <v-icon>mdi-arrow-left-thick</v-icon>
        <span>{{ $t("contactDetail.backButton") }}</span>
      </div>
    </div>
    <br />
    <div class="body-container">
      <div class="detail-container">
        <div class="img-container">
          <img :src="contacts[id].url" alt="photo" />
        </div>
        <br />
        <div class="text">
          <h3>{{ $t("contactDetail.name") }}: {{ contacts[id].name }}</h3>
          <h3>{{ $t("contactDetail.email") }}: {{ contacts[id].email }}</h3>
          <h3>{{ $t("contactDetail.contact") }}: {{ contacts[id].contact }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactDetail",
  data() {
    return {
      contacts: [],
      id: null,
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
  mounted() {
    if (localStorage.getItem("contacts")) {
      this.contacts = JSON.parse(localStorage.getItem("contacts"));
    }
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped />
