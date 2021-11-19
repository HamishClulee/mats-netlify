<template>
  <section class="mb-12 flex justify-start flex-col align-start">
    <router-link
      class="w-full text-2xl text-secondary"
      :to="`/blog/${linkto.params.urlname}`"
      >{{ posttitle }}</router-link
    >
    <div class="date text-gray-500">{{ date }}</div>
    <p class="short-des">{{ brief }}</p>
  </section>
</template>

<script>
export default {
  name: "BlogLink",
  props: {
    linkto: {
      type: Object,
      required: true,
    },
    posttitle: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    brief: {
      type: String,
      required: true,
    },
  },
};
</script>
