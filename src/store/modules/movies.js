import axios from "@/plugins/axios/index";

import mock from "@/store/mock/imdb";

const moviesStore = {
  namespaced: true,
  state: {
    to250ids: mock,
    moviesPerPage: 12,
    currentPage: 1,
  },
  getters: {
    sliceIds:
      ({ to250ids }) =>
      (from, to) =>
        to250ids.slice(from, to),
    currentPage: ({ currentPage }) => currentPage,
    moviesPerPage: ({ ...moviesPerPage }) => moviesPerPage,
  },
  mutations: {},
  actions: {
    async fetchMovies({ getters }) {
      const { currentPage, moviesPerPage } = getters;
      const from = (currentPage - 1) * moviesPerPage;
      const to = currentPage * moviesPerPage;
      const response = await axios.get(`?i=tt0111161`);

      console.log("response: ", response);
    },
  },
};

export default moviesStore;
