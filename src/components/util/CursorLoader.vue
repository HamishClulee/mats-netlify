<template>
  <div class="min-h-screen w-full flex items-center justify-center">
    <p class="font-mono">
      ><span class="animate-pulse relative bottom-2 left-2 transform scale-x-100">_</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "CursorLoader",
};
</script>

<style scoped>
.font-mono {
  font-family: monospace;
  font-size: 6rem;
  color: #adadad;
}
</style>
