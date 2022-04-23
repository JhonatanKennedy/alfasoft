<template>
  <div class="nav-container">
    <div class="nav-routes-container">
      <div
        class="route-button"
        @click="routerPush('/')"
        :class="{ active: activeRoute('home') }"
      >
        <v-icon>mdi-format-list-bulleted</v-icon>
        <span>{{ $t("NavBar.home") }}</span>
      </div>
      <div
        class="route-button"
        @click="routerPush('contact')"
        :class="{ active: activeRoute('contact') }"
      >
        <v-icon>mdi-account-box-outline</v-icon>
        <span>{{ $t("NavBar.contacts") }}</span>
      </div>
      <div
        class="route-button"
        @click="routerPush('about')"
        :class="{ active: activeRoute('about') }"
      >
        <v-icon>mdi-information-outline</v-icon>
        <span>{{ $t("NavBar.about") }}</span>
      </div>
    </div>
    <div class="nav-lang-container">
      <select v-model="$i18n.locale">
        <option
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
          :value="locale"
        >
          {{ selectedLang(locale) }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    selectedLang(lang) {
      if (lang === "en") {
        return "English";
      }
      return "Português Br";
    },
    routerPush(route) {
      this.$router.push(route, () => {});
    },
    activeRoute(route) {
      if (this.$route.name === route) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
