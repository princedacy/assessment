<template>
  <div id="app">
    <Header />
    <Slider />
    <SearchFilter />
    <SearchResults />
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Slider from "./components/Slider.vue";
import SearchFilter from "./components/SearchFilter.vue";
import SearchResults from "./components/SearchResults.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Slider,
    SearchFilter,
    SearchResults,
    Footer
  },
};
</script>

<style lang='scss'>
@import "@/assets/scss/styles.scss";
#app {
  font-family: "Work Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
