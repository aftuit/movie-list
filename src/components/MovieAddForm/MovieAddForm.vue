<template>
  <div class="movie-add-form">
    <h3>Kino qo'shish</h3>
    <form ref="form" class="d-flex" @submit="addMovie" @submit.prevent>
      <Input
        required
        name="name"
        type="text"
        class="form-control movie-label mx-2"
        placeholder="Kino nomi"
      />
      <Input
        required
        name="viewers"
        type="number"
        class="form-control movie-label mx-2"
        placeholder="Ko'rishlar soni"
      />
      <Button class="btn-outline-dark mx-2" type="submit">Qo'shish</Button>
    </form>
  </div>
</template>
<script>
import Input from '../../ui-components/Input.vue';
export default {
  name: "MovieAddForm",
  methods: {
    addMovie(evt) {
      const data = evt.target.elements;
      const newMovie = {
        id: Date.now(),
        name: data.name.value,
        viewers: data.viewers.value,
        like: false,
        favourite: false,
      };

      this.$emit("createMovie", newMovie);
      this.$refs.form.reset();
    },
  },
};
</script>

<style>
</style>