<template>
  <section class="bloglink-con mb-8">
    <router-link class="text-2xl text-secondary" :to="`/blog/${linkto.params.urlname}`">{{
      posttitle
    }}</router-link>
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
