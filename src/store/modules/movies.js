import axios from "@/plugins/axios/index";

import mock from "@/store/mock/imdb";
import mutations from "@/store/mutations";

function serializeResponse(movies) {
  return movies.reduce((acc, movie) => {
    acc[movie.imdbID] = movie;

    return acc;
  }, {});
}

const { MOVIES } = mutations;

const moviesStore = {
  namespaced: true,
  state: {
    movies: {},
    to250ids: mock,
    moviesPerPage: 12,
    currentPage: 1,
  },
  getters: {
    movieList: ({ movies }) => movies,
    sliceIds:
      ({ to250ids }) =>
      (from, to) =>
        to250ids.slice(from, to),
    currentPage: ({ currentPage }) => currentPage,
    moviesPerPage: ({ moviesPerPage }) => moviesPerPage,
  },
  mutations: {
    [MOVIES](state, value) {
      state.movies = value;
    },
  },
  actions: {
    initMoviesStore: {
      handler({ dispatch }) {
        dispatch("fetchMovies");
      },
      root: true,
    },

    async fetchMovies({ getters, commit }) {
      try {
        const { currentPage, sliceIds, moviesPerPage } = getters;
        const from = (currentPage - 1) * moviesPerPage;
        const to = currentPage * moviesPerPage;

        const moviesIdsFetch = sliceIds(from, to);

        const promiseAll = moviesIdsFetch.map((item) =>
          axios.get(`?i=${item}`)
        );
        const response = await Promise.all(promiseAll);

        const movies = serializeResponse(response);

        commit(MOVIES, movies);
      } catch (err) {
        console.log(err);
      }
    },
  },
};

export default moviesStore;
