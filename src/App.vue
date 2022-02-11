<template>
  <div id="app">
    <PosterBg />
    <MoviesList />
  </div>
</template>

<script>
import MoviesList from "@/components/MoviesList";
import PosterBg from "@/components/PosterBg";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    MoviesList,
    PosterBg,
  },
  methods: {
    ...mapActions("movies", ["fetchMovies"]),
  },
  mounted() {
    //this.fetchMovies();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
}
</style>
