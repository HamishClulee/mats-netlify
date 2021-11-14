<template>
  <a :href="aref">
    <article class="card-container" @click="pushtohref()">
      <section class="image-container" :style="{ backgroundImage: `url(${image})` }">
        <!-- image contained -->
      </section>
      <section class="content-container">
        <h3>{{ title }}</h3>
        <h5>{{ sub }}</h5>
        <p>{{ shorttext }}</p>
      </section>
    </article>
  </a>
</template>

<script>
export default {
  name: "featurecard",
  props: {
    image: String,
    title: String,
    sub: String,
    text: Array,
    aref: String,
    noclick: Boolean,
  },
  computed: {
    shorttext() {
      return `${this.text[0]}${this.text[1]}`;
    },
  },
};
</script>
