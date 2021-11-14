<template>
  <main class="post-wrapper">
    <div class="post-container" v-html="markdown" />
    <NavFoot></NavFoot>
  </main>
</template>

<script>
import { posts } from "./posts.js";

import Prism from "prismjs";

import NavFoot from "../../components/NavFoot.vue";

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
        .then((res) => (this.markdown = res.default))
        .then(() => Prism.highlightAll());
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
