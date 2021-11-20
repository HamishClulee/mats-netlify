<template>
  <div class="canvas-nav">
    <div class="big-x" @click="close">
      <div class="line"></div>
      <div class="line"></div>
    </div>

    <div class="canvas-text-con">
      <div class="canvas-item" @click="close">
        <router-link :to="{ path: '/' }">home</router-link>
      </div>
      <div class="canvas-item" @click="close">
        <router-link :to="{ path: '/work' }">projects</router-link>
      </div>
      <div class="canvas-item" @click="close">
        <router-link :to="{ path: '/cv' }">cv</router-link>
      </div>
      <div class="canvas-item" @click="close">
        <router-link :to="{ path: '/blog' }">blog</router-link>
      </div>
      <div class="canvas-item email">
        <h3>hamish.clulee@gmail.com</h3>
      </div>
      <div class="icons">
        <a
          href="https://github.com/HamishClulee"
          target="_blank"
          class="icon-container-item"
        >
          <img src="https://more-art-than.science/images/github.svg" height="30" />
        </a>
        <a
          href="https://www.linkedin.com/in/hamish-clulee-163b1950/"
          target="_blank"
          class="icon-container-item"
        >
          <img src="https://more-art-than.science/images/linkedin.svg" height="30" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OffCamvasNav",
  methods: {
    close() {
      this.$parent.$emit("close-canvas");
    },
  },
};
</script>
