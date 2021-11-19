<template>
  <section
    class="max-w-screen-2xl w-full flex flex-col items-center min-h-screen justify-center mx-auto"
  >
    <p class="text-secondary text-6xl">
      404<br />
      <small class="text-gray-500 text-lg">PAGE NOT FOUND</small>
    </p>
  </section>
</template>

<script>
export default {
  name: "PageNotFound",
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.text-color-control {
  color: #adadad !important;
  @media (min-width: 0px) and (max-width: 680px) {
    font-size: 1.5em;
  }
}
</style>
