<template>
  <div class="">
    <div class="flex w-full h-16 items-center">
      <div class="hidden md:flex w-full">
        <div class="w-1/3 flex justify-start"></div>
        <div class="w-2/3 flex justify-end">
          <div v-for="({ route, text }, index) in routes" :key="index" class="mx-8">
            <router-link class="nav-bar-link" :to="{ path: route }">{{
              text
            }}</router-link>
          </div>
        </div>
      </div>

      <!-- hamburger -->
      <div
        v-if="!isCanvasOpen"
        class="w-full h-16 mr-6 flex flex-col justify-center items-end md:hidden"
        @click="toggleCanvas"
      >
        <div
          v-for="(_, index) in Array(3)"
          :key="index"
          class="h-0.5 my-0.5 w-6 bg-gray-500"
        ></div>
      </div>

      <div
        v-else
        class="w-full h-16 mr-6 flex flex-col justify-center items-end md:hidden"
        @click="toggleCanvas"
      >
        <div class="h-0.5 w-6 bg-gray-500 transform origin-center rotate-45"></div>
        <div
          class="h-0.5 w-6 bg-gray-500 relative transform origin-center -rotate-45"
          style="bottom: 2px"
        ></div>
      </div>
    </div>

    <!-- canvas transform origin-center -rotate-45 -->
    <div
      v-if="isCanvasOpen"
      class="flex mt-16 bg-white w-full h-screen absolute z-10 inset-x-0 inset-y-0 justify-end"
    >
      <div class="canvas-text-con">
        <div
          v-for="({ name, route, text }, index) in routes"
          :key="index"
          class="mr-8 my-4 text-2xl"
          :class="checkvis(name) ? 'active-route canvas' : ''"
          @click="toggleCanvas"
        >
          <router-link :to="{ path: route }">{{ text }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isCanvasOpen: false,
      routes: [
        {
          name: "Home",
          route: "/",
          text: "home",
        },
        {
          name: "Cv",
          route: "/cv",
          text: "CV",
        },
        {
          name: "Work",
          route: "/work",
          text: "work",
        },
        {
          name: "Blog",
          route: "/blog",
          text: "blog",
        },
      ],
    };
  },
  methods: {
    toggleCanvas() {
      this.isCanvasOpen = !this.isCanvasOpen;
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

<style>
.nav-bar-link {
  @apply uppercase text-lg text-gray-500;
}
.router-link-active::after {
  display: flex;
  content: "";
  width: 10px;
  height: 2px;
  background-color: #fbc02d;
  position: relative;
  top: 2px;
  right: 2px;
}
</style>
