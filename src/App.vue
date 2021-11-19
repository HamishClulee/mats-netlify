<template>
  <div class="font-body max-w-screen-xl"></div>
  <MatsNav v-if="$route.name !== 'Home'"></MatsNav>
  <router-view></router-view>
</template>

<script>
import MatsNav from "./components/layout/MatsNav.vue";
export default {
  name: "App",
  components: { MatsNav },
};
</script>
