<template>
  <main class="post-wrapper">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div ref="html-container" class="p-8" v-html="markdown" />
    <!-- <Tester /> -->
    <NavFoot></NavFoot>
  </main>
</template>

<script>
import { posts } from "./posts.js";
// import { langs } from "./prisim-langs.js";
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
        .then(() => {
          const codeBlocks = this.$refs["html-container"].getElementsByTagName("code");

          for (let block of codeBlocks) {
            const text = block.innerHTML;
            const langStartIndex = text.indexOf("&lt;&lt;&lt;");
            const langEndIndex = text.indexOf("&gt;&gt;&gt;");
            const langIndicatorLength = "&lt;&lt;&lt;".length;
            const language = text.substr(
              langStartIndex + langIndicatorLength,
              langEndIndex - langIndicatorLength
            );

            if (langStartIndex !== -1) {
              // console.log(langEndIndex);
              // console.block.classList.add("language-javascript");
              block.innerHTML = block.innerHTML.replace(
                `&lt;&lt;&lt;${language}&gt;&gt;&gt;`,
                ""
              );
              block.style.position = "relative";
              block.style.bottom = "4px";
              block.parentElement.classList = `language-${language}`;
              // block.classList.add(`language-${language}`);
              block.parentElement.style.paddingTop = "0px";
            }
          }
          Prism.highlightAll();
        });
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
