<template>
  <div class="sum-con">
    <h2 v-if="!islive">{{ title }}</h2>
    <a v-else :href="aref" target="_blank"
      ><h2>{{ aref }}</h2></a
    >
    <h3>{{ sub }}</h3>

    <div class="content">
      <div class="two-col">
        <div @click="openmodal" class="img-grid">
          <figure
            v-for="(v, i) in images"
            :key="i"
            :class="'img-grid-' + i"
            class="fig-itm"
            :style="{ backgroundImage: 'url(' + images[i] + ')' }"
          ></figure>
        </div>
        <div class="tech-con">
          <h3>Stack</h3>
          <div class="tech-itm">
            <div class="itm-name">Frontend:</div>
            <div class="itm-val">{{ tech.front }}</div>
          </div>
          <div class="tech-itm">
            <div class="itm-name">Tooling</div>
            <div class="itm-val">{{ tech.tooling }}</div>
          </div>
          <div class="tech-itm">
            <div class="itm-name">DevOps:</div>
            <div class="itm-val">{{ tech.devops }}</div>
          </div>
          <div class="tech-itm">
            <div class="itm-name">Deploys:</div>
            <div class="itm-val">{{ tech.deploys }}</div>
          </div>
          <div class="tech-itm">
            <div class="itm-name">Backend:</div>
            <div class="itm-val">{{ tech.backend }}</div>
          </div>
          <div class="tech-itm">
            <div class="itm-name">Database:</div>
            <div class="itm-val">{{ tech.db }}</div>
          </div>
        </div>
      </div>

      <div class="text-con">
        <p v-for="(t, i) in text" :key="i" v-html="t"></p>
      </div>
      <div class="fin-con">~</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "worksum",
  props: {
    images: Array,
    title: String,
    sub: String,
    text: Array,
    islive: Boolean,
    aref: String,
    tech: Object,
  },
  methods: {
    openmodal() {
      this.$parent.$emit("open-modal", this.images);
    },
  },
};
</script>
