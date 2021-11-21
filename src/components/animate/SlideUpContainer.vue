<template>
  <section class="transition-all opacity-0">
    <slot />
  </section>
</template>

<script>
export default {
  name: "SlideUpContainer",
  data() {
    return {
      observer: null,
    };
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.$el.classList.remove("opacity-0");
          this.$el.classList.add("animate-slide-up");
        }
      });
    });
    this.observer.observe(this.$el);
  },
};
</script>
