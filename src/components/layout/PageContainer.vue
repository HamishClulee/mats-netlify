<template>
  <main>
    <slot />
  </main>
</template>

<script>
export default {
  name: "PageContainer",
  props: {
    isCentered: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
