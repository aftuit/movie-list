<template>
  <div>
    <p class="fs-3 text-uppercase">Barcha kinolar soni: {{ allMOviesCount }}</p>
    <p class="fs-4 text-uppercase">
      Ko'rilgan kinolar soni: {{ allFavouriteCount }}
    </p>
  </div>
</template>

<script>
export default {
  name: "AppInfo",
  props: {
    allMOviesCount: {
      type: Number,
      required: true,
    },
    allFavouriteCount: {
      type: Number,
      required: true,
    },
  },
};
</script>


<style></style>