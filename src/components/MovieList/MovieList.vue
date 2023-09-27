<template>
  <div>
    <ul class="list-group movie-list">
      <p
          class="text-center text-danger fs-4"
          v-if="!movies.length"
        >
          Kinolar yo'q
        </p>
      <MovieListItem
        v-else
        v-for="movie in movies"
        :movie="movie"
        :key="movie.id"
        @onToggle="$emit('onToggle', $event)"
        @onDelete="$emit('onDelete', movie.id)"
      />
    </ul>
  </div>
</template>

<script>
export default {
  name: "MovieList",
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>