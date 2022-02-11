<template>
  <div id="app">
    <PosterBg :poster="poster" />
    <MoviesList @changePoster="onChangePoster" />
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
  data() {
    return {
      poster: "",
    };
  },
  methods: {
    ...mapActions("movies", ["fetchMovies"]),
    onChangePoster(poster) {
      this.poster = poster;
    },
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
  position: relative;
}
</style>
