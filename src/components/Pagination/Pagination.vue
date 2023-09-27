<template>
  <nav
    aria-label="Page navigation example"
    class="d-flex justify-content-center mt-3"
  >
    <ul class="pagination">
      <li :class="[pageNumber === currentPage? 'active': '']" class="page-item" @click="changePage(pageNumber)" v-for="pageNumber in totalPages" :key="pageNumber">
        <span class="page-link" href="#">{{ pageNumber }}</span>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "Pagination",
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    changePage: {
      type: Function,
      required: true,
    },
  },
};
</script>
<style scoped>
    .page-item{
        cursor: pointer;
    }
</style>