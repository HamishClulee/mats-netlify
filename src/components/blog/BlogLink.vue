<template>
  <section class="bloglink-con">
    <router-link :to="linkto">{{ posttitle }}</router-link>
    <div class="date">{{ date }}</div>
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
