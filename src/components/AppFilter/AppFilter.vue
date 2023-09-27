<template>
  <div class="btn-group" role="group">
    <Button
      type="button"
      v-for="btn in filterButtons"
      :key="btn.name"
      :class="[filterName === btn.name ? 'btn-dark' : 'btn-outline-dark']"
      @click="changeFilterName(btn.name)"
    >
      {{ btn.title }}
    </Button>
  </div>
</template>

<script>
export default {
  name: "AppFilter",
  props: {
    updateFilterHandler: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      filterButtons: [
        {
          title: "Barcha kinolar",
          name: "all",
        },
        {
          title: "Mashhur kinolar",
          name: "popular",
        },
        {
          title: "Eng ko'p ko'rilganlar",
          name: "mostViewers",
        },
      ],
      filterName: "all",
    };
  },
  methods: {
    changeFilterName(name) {
      this.updateFilterHandler(name);
      this.filterName = name;
    },
  },
};
</script>
<style>
</style>