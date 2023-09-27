<template>
  <div class="app text-monospace">
    <div class="content">
      <Box>
        <AppInfo
          :allMOviesCount="movies.length"
          :allFavouriteCount="movies.filter((movie) => movie.favourite).length"
        />
      </Box>
      <Box>
        <SearchPanel :updateTermHandler="updateTermHandler" />
        <AppFilter
          :onFilterHandler="onFilterHandler"
          :updateFilterHandler="updateFilterHandler"
        />
      </Box>
      <Box v-if="!movies.length && !isLoading">
        <p class="text-center text-danger fs-4">Kinolar yo'q</p>
      </Box>
      <Box v-else-if="isLoading">
        <Loader />
      </Box>
      <Box v-else>
        <MovieList
          :movies="onFilterHandler(onSearchHandler(movies, term), filter)"
          @onToggle="onToggleHandler"
          @onDelete="onDeleteHandler"
        />
      </Box>
      <Box>
        <Pagination
          :totalPages="totalPages"
          :changePage="changePage"
          :currentPage="currentPage"
        />
      </Box>
      <Box>
        <MovieAddForm @createMovie="createMovie" />
      </Box>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movies: [],
      term: "",
      filter: "all",
      isLoading: false,
      limit: 10,
      currentPage: 1,
      totalPages: 0,
    };
  },
  methods: {
    createMovie(item) {
      this.movies.push(item);
    },
    onToggleHandler({ id, action }) {
      this.movies = this.movies.map((movie) => {
        if (movie.id === id) {
          return { ...movie, [action]: !movie[action] };
        }
        return movie;
      });
    },
    onDeleteHandler(id) {
      this.movies = this.movies.filter((movie) => movie.id !== id);
    },
    onSearchHandler(arr, term) {
      if (term.length === 0) {
        return arr;
      }
      return arr.filter((item) =>
        item.name.toLowerCase().includes(term.toLowerCase())
      );
    },
    updateTermHandler(term) {
      this.term = term;
    },
    onFilterHandler(arr, filter) {
      switch (filter) {
        case "popular":
          return arr.filter((c) => c.like);
        case "mostViewers":
          return arr.filter((c) => c.viewers > 500);
        default:
          return arr;
      }
    },
    updateFilterHandler(filter) {
      this.filter = filter;
    },
    changePage(page) {
      this.currentPage = page;
    },
    async getData() {
      try {
        this.isLoading = true;
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _limit: this.limit,
              _page: this.currentPage,
            },
          }
        );
        this.movies = res?.data.map((c) => {
          return {
            id: c.id,
            name: c.title,
            like: false,
            favourite: false,
            viewers: c.id * 100,
          };
        });
        this.totalPages = Math.ceil(res.headers["x-total-count"] / this.limit);
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
  watch: {
    currentPage() {
      this.getData();
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
.app {
  height: 100vh;
  color: #000;
}
.content {
  width: 1000px;
  min-height: 700px;
  background-color: #fff;
  margin: 0 auto;
}
.box {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>