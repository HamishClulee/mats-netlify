<template>
  <div class="w-full flex items-center justify-center">
    <div class="w-64 flex flex-row justify-between">
      <a href="https://github.com/HamishClulee" target="_blank">
        <img src="/images/github.svg" style="width: 60px; height: 60px" />
      </a>
      <a
        href="https://www.linkedin.com/in/hamish-clulee/"
        target="_blank"
        class="icon-container-item"
      >
        <img src="/images/linkedin.svg" style="width: 60px; height: 60px" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavFoot",
  methods: {
    checkvis(name) {
      return this.$route.name !== name;
    },
  },
};
</script>
