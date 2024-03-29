<template>
  <main class="post-wrapper max-w-screen-2xl mx-auto">
    <CursorLoader v-if="isLoading" />
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div ref="html-container" class="p-2 md:p-8" v-html="markdown" />
    <DividerUi />
    <NavFoot class="mb-12"></NavFoot>
  </main>
</template>

<script>
import { posts } from "./posts.js";
import Prism from "prismjs";
import DividerUi from "../../components/util/DividerUi.vue";
import NavFoot from "../../components/layout/NavFoot.vue";
import CursorLoader from "../../components/util/CursorLoader.vue";

export default {
  name: "PostWrapper",
  components: {
    NavFoot,
    DividerUi,
    CursorLoader,
  },
  data() {
    return {
      markdown: null,
      isLoading: false,
    };
  },
  created() {
    this.isLoading = true;
    if (this.getMDFileName()) {
      import(`./live/${this.getMDFileName()}.md`)
        .then((res) => {
          this.markdown = res.default;
        })
        .then(() => {
          this.prepareCodeBlockHighligting();

          Prism.highlightAll();

          this.$nextTick(() => {
            this.isLoading = false;
          });
        });
    }
  },
  methods: {
    prepareCodeBlockHighligting() {
      const codeBlocks = this.$refs["html-container"].getElementsByTagName("code");

      for (let block of codeBlocks) {
        const text = block.innerHTML;
        const langIndicatorStartIndex = text.indexOf("&lt;&lt;&lt;");
        const langIndicatorEndIndex = text.indexOf("&gt;&gt;&gt;");
        const langIndicatorLength = "&lt;&lt;&lt;".length;
        const language = text.substr(
          langIndicatorStartIndex + langIndicatorLength,
          langIndicatorEndIndex - langIndicatorLength
        );

        if (langIndicatorStartIndex !== -1) {
          const { style, parentElement } = block;
          block.innerHTML = block.innerHTML.replace(
            `&lt;&lt;&lt;${language}&gt;&gt;&gt;`,
            ""
          );
          style.position = "relative";
          style.bottom = "4px";
          parentElement.classList = `language-${language}`;
          parentElement.style.paddingTop = "0px";
        }
      }
    },
    getMDFileName() {
      try {
        return posts
          .filter((item) => {
            return item.linkto.params.urlname === this.$route.params.urlname;
          })[0]
          .linkto.params.mdfilename.slice(0, -3);
      } catch (e) {
        this.$router.push({ name: "notfound" });

        return false;
      }
    },
  },
};
</script>

<style scoped>
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
