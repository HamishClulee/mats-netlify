<template>
  <section class="my-12">
    <SlideUpContainer>
      <h2 class="text-3xl mb-2">{{ employer }}</h2>
      <h3 class="text-2xl mb-2">{{ title }}</h3>
      <h5>{{ dates }}</h5>
      <h6 v-if="references" class="refs">References available</h6>
      <slot />
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
