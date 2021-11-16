<template>
  <div class="list-con">
    <h1 class="text-4xl mb-8 text-secondary font-display">Blog Posts</h1>

    <mark class="divider">~</mark>

    <h1 class="text-2xl mb-8 text-highlight font-display">
      Ooof, this area is still under construction. Come back though, it's going to be
      crackers!
    </h1>

    <mark class="divider">~</mark>
    <h4>No More Posts.</h4>
    <iframe
      src="https://giphy.com/embed/2fC4V2UeJveb6"
      width="480"
      height="263"
      frameBorder="0"
      class="giphy-embed"
      allowFullScreen
    ></iframe>
    <mark class="divider">~</mark>
    <NavFoot></NavFoot>
  </div>
</template>

<script>
import { posts } from "./posts/posts.js";
import BlogLink from "../components/blog/BlogLink.vue";
import NavFoot from "../components/layout/NavFoot.vue";
export default {
  name: "BlogList",
  components: {
    BlogLink,
    NavFoot,
  },
  data() {
    return {
      posts: posts,
    };
  },
  computed: {
    isDev() {
      return process.env.NODE_ENV === "development";
    },
  },
};
</script>
<style scoped>
.list-con {
  margin: 70px auto;
  margin-top: 70px;
  min-width: 300px;
  width: 95%;
  max-width: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
}
</style>
