<template>
  <div class="god-div"></div>
  <MatsNav></MatsNav>
  <router-view></router-view>
</template>

<script>
import MatsNav from "./components/MatsNav.vue";
export default {
  name: "App",
  components: { MatsNav },
};
</script>
