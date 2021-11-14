<template>
  <div class="navbar-con">
    <div class="navbar-left">
      <AnimateWord class="svg-actual"></AnimateWord>
    </div>
    <div class="navbar-right">
      <div class="text-item" :class="checkvis('home') ? 'active-route' : ''">
        <router-link :to="{ path: '/' }">home</router-link>
      </div>
      <div class="text-item" :class="checkvis('cv') ? 'active-route' : ''">
        <router-link :to="{ path: '/cv' }">CV</router-link>
      </div>
      <div class="text-item" :class="checkvis('work') ? 'active-route' : ''">
        <router-link :to="{ path: '/work' }">projects</router-link>
      </div>
      <div class="text-item" :class="checkvis('blog') ? 'active-route' : ''">
        <router-link :to="{ path: '/blog' }">blog</router-link>
      </div>
    </div>
    <div class="hamburger" @click="togglecanvas">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <div v-if="canvasopen" class="canvas-nav">
      <div class="canvas-text-con">
        <div class="big-x" @click="togglecanvas">
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div
          class="canvas-item"
          @click="togglecanvas"
          :class="checkvis('home') ? 'active-route canvas' : ''"
        >
          <router-link :to="{ path: '/' }">home</router-link>
        </div>
        <div
          class="canvas-item"
          @click="togglecanvas"
          :class="checkvis('cv') ? 'active-route canvas' : ''"
        >
          <router-link :to="{ path: '/cv' }">CV</router-link>
        </div>
        <div
          class="canvas-item"
          @click="togglecanvas"
          :class="checkvis('work') ? 'active-route canvas' : ''"
        >
          <router-link :to="{ path: '/work' }">Projects</router-link>
        </div>
        <div
          class="canvas-item"
          @click="togglecanvas"
          :class="checkvis('blog') ? 'active-route canvas' : ''"
        >
          <router-link :to="{ path: '/blog' }">blog</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AnimateWord from "./AnimateWord.vue";
export default {
  name: "navbar",
  components: {
    AnimateWord,
  },
  data() {
    return {
      canvasopen: false,
    };
  },
  methods: {
    togglecanvas() {
      this.canvasopen = !this.canvasopen;
    },
    routehome() {
      this.$router.push({ path: "/" });
    },
    checkvis(item) {
      return item === this.$route.name;
    },
  },
};
</script>
