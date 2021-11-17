<template>
  <main class="post-wrapper">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="post-container" v-html="markdown" />
    <!-- <Tester /> -->
    <NavFoot></NavFoot>
  </main>
</template>

<script>
import { posts } from "./posts.js";

import Prism from "prismjs";

import NavFoot from "../../components/layout/NavFoot.vue";

export default {
  name: "PostWrapper",
  components: {
    NavFoot,
  },
  data() {
    return {
      markdown: null,
    };
  },
  created() {
    if (this.getMDFileName()) {
      import(`./live/${this.getMDFileName()}`)
        .then((res) => {
          this.markdown = res.default;
        })
        .then(() => Prism.highlightAll())
        .catch((err) => console.log("***", err));
    }
  },
  methods: {
    getMDFileName() {
      try {
        return posts.filter((item) => {
          return item.linkto.params.urlname === this.$route.params.urlname;
        })[0].linkto.params.mdfilename;
      } catch (e) {
        this.$router.push({ name: "notfound" });

        return false;
      }
    },
  },
};
</script>

<style>
pre {
  font-family: "Lucida Console", Monaco, monospace;
  line-height: 1.7;
  border-radius: 5px;
  display: block;
  overflow-x: auto;
  background: #161b1d;
  color: #7ea2b4;
  padding: 0.5em;
}

code {
  font-size: 1.1rem;
  font-family: "Lucida Console", Monaco, monospace;
  max-width: 100%;
  overflow-x: scroll !important;
}
</style>
