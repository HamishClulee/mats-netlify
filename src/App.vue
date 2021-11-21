<template>
  <div class="font-body max-w-screen-2xl"></div>
  <FadeInContainer>
    <MatsNav v-if="$route.name !== 'Home'"></MatsNav>
  </FadeInContainer>
  <router-view></router-view>
</template>

<script>
import MatsNav from "./components/layout/MatsNav.vue";
import FadeInContainer from "./components/animate/FadeInContainer.vue";
export default {
  name: "App",
  components: { MatsNav, FadeInContainer },
};
</script>
