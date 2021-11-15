<template>
  <div class="font-body"></div>
  <MatsNav></MatsNav>
  <router-view></router-view>
</template>

<script>
import MatsNav from "./components/layout/MatsNav.vue";
export default {
  name: "App",
  components: { MatsNav },
};
</script>
