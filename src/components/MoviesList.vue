<template>
  <BContainer>
    <h3 class="list-title">IMDB TOP 250</h3>
    <BRow>
      <template v-if="isExist">
        <BCol cols="3" v-for="(movie, key) in movieList" :key="key">
          <MovieItem :movie="movie" @mouseover.native="onMouseOver(movie.Poster)" />
        </BCol>
      </template>
      <template v-else> Loader </template>
    </BRow>
  </BContainer>
</template>

<script>
import { mapGetters } from "vuex";
import MovieItem from "@/components/MovieItem";

export default {
  name: "MoviesList",
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    MovieItem,
  },
  computed: {
    ...mapGetters("movies", ["movieList"]),
    isExist() {
      return Object.keys(this.movieList).length > 0;
    },
  },
  methods: {
    onMouseOver(poster) {
      this.$emit("changePoster", poster);
    },
  },
};
</script>

<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
  color: #fff;
}
</style>
