<template>
  <section class="my-16">
    <SlideUpContainer>
      <h2 class="text-4xl mb-2">{{ employer }}</h2>
      <h3 class="text-2xl mb-1 font-display text-secondary">{{ title }}</h3>
      <h5 class="text-xl mt-1 text-gray-500" :class="references ? 'mb-1' : 'mb-4'">
        {{ dates }}
      </h5>
      <h6 v-if="references" class="italic mb-4 mt-1">References available</h6>

      <slot />
      <span
        v-if="wasRemote"
        class="w-full align-center -mx-1 my-2 italic text-md text-gray-400"
        >This was a 100% remote position</span
      >
    </SlideUpContainer>
  </section>
</template>

<script>
import SlideUpContainer from "../animate/SlideUpContainer.vue";
export default {
  name: "JobCard",
  components: {
    SlideUpContainer,
  },
  props: {
    employer: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    dates: {
      type: String,
      required: true,
    },
    references: {
      type: Boolean,
      default: false,
    },
    wasRemote: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
