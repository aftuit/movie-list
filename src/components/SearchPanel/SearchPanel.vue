<template>
  <Input
    type="text"
    class="search-panel"
    placeholder="Kinolarni qidirish..."
    v-model="term"
    @input="getInputValue" 
  />
</template>


<script>
export default {
  name: "SearchPanel",
  props: {
    updateTermHandler: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      term: "",
    };
  },
  methods: {
    getInputValue(e) {
        this.term = e.target.value
        this.updateTermHandler(this.term)
    }
  }
};
</script>


<style scoped>
.search-panel {
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding: 1.5rem;
  background-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.08);
}
</style>