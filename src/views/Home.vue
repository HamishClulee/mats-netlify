<template>
  <div ref="content" class="flex flex-col">
    <SlideUpContainer>
      <div class="flex items-start justify-center flex-col py-64 px-40 max-w-3xl">
        <h1 class="font-display text-6xl text-secondary mb-2">Hi, I'm Hamish</h1>
        <h3 class="text-3xl text-primary mb-4">
          An Engineer commited to simplicity, ease of maintainece and beauty in
          <code>function.</code>
        </h3>
        <p class="text-xl">
          Simple things are the key to unlocking a world where your software serves you
          and your business. Complexity is unavoidable, the goal is to solve the problem
          without making it worse.
        </p>
      </div>
    </SlideUpContainer>

    <mark class="divider">~</mark>

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

export default {
  name: "HomePage",
  components: {
    SlideUpContainer,
  },
};
</script>
