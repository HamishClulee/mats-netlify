<template>
  <div class="foot-con">
    <div class="header-icons-home">
      <a
        href="https://github.com/HamishClulee"
        target="_blank"
        class="icon-container-item"
      >
        <img src="/images/github.svg" height="30" />
      </a>
      <a
        href="https://www.linkedin.com/in/hamish-clulee/"
        target="_blank"
        class="icon-container-item"
      >
        <img src="/images/linkedin.svg" height="30" />
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
