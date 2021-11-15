<template>
  <div class="list-con">
    <h1>Blog Posts</h1>

    <mark class="divider">~</mark>
    <BlogLink
      v-for="(post, index) in posts"
      :key="index"
      :posttitle="post.title"
      :date="post.date"
      :brief="post.brief"
      :linkto="post.linkto"
    ></BlogLink>
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
