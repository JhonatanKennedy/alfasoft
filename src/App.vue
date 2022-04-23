<template>
  <v-app>
    <div class="app">
      <div class="pages">
        <NavBar />
        <v-main>
          <v-card color="#222330" class="routes">
            <router-view />
          </v-card>
        </v-main>
      </div>
    </div>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar/NavBar.vue";
export default {
  name: "App",
  components: { NavBar },
};
</script>
<style src="./global.scss" lang="scss" scoped />
