<template>
  <div class="god-div"></div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      canvasopen: false,
    };
  },
  mounted() {
    this.$on("close-canvas", () => {
      this.canvasopen = false;
    });
  },
};
</script>
