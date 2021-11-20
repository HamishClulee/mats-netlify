<template>
  <div ref="content" class="flex flex-col max-w-screen-2xl mx-auto">
    <SlideUpContainer>
      <div
        class="flex items-start justify-center flex-col py-8 md:py-64 px-8 px-40 max-w-6xl"
      >
        <h1 class="font-display text-6xl text-secondary mb-4">Hi, I'm Hamish</h1>
        <h3 class="text-3xl text-tertiary mb-4">
          An engineer and tech lead commited to simplicity, ease of maintainece and smooth
          delivery.
        </h3>

        <p class="text-xl">
          If you'd like to know more about me, you can checkout my
          <router-link class="underline text-link" to="/blog">blog</router-link>, my
          <router-link class="underline text-link" to="/cv">CV</router-link>
          and some info on the
          <router-link class="underline text-link" to="/work">work</router-link>
          I've done over the last few years.
        </p>
      </div>
    </SlideUpContainer>

    <DividerUi />

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
  </div>
</template>

<script>
import SlideUpContainer from "../components/animate/SlideUpContainer.vue";
import DividerUi from "../components/util/DividerUi.vue";
export default {
  name: "HomePage",
  components: {
    SlideUpContainer,
    DividerUi,
  },
};
</script>
