<template>
  <div id="app" :class="theme">

    <!-- <div id="nav">
      <router-link to="/">Tasks</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <Header title="TaskApp" @toggleTheme="toggleTheme"/>
    <router-view />
    <Footer />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Header from "../src/components/Header/index.vue";
import Footer from "../src/components/Footer/index.vue";

enum ETheme {
  DARK = "dark",
  LIGHT = "light"
}

@Component({
  components: {
    Header,
    Footer,
  }
})
export default class App extends Vue {
  public theme: string = localStorage.getItem("theme") || ETheme.LIGHT;

  created() {
    this.saveTheme();
  }

  saveTheme() {
    localStorage.setItem("theme", this.theme);
  }

  toggleTheme() {
    this.theme = this.theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT;
    this.saveTheme();
  }
}
</script>

<style>
#app {
  background-color: var(--secondary);
}
</style>
