<template>
  <div>
    <svg ref="container" height="8" width="100%">
      <g v-if="shouldMount">
        <rect
          v-for="({ value, x }, ind) in tech"
          :key="ind"
          :width="value * widthCoEf"
          height="15"
          :fill="colors[ind]"
          :x="x * widthCoEf"
        />
      </g>
    </svg>

    <!-- container -->
    <div class="mt-4 mb-4 flex flex-col md:flex-row w-full">
      <!-- item -->
      <div
        v-for="({ name, value }, index) in tech"
        :key="index"
        class="flex flex-row mr-0 md:mr-6 my-2 md:my-0 items-center"
      >
        <!-- circle -->
        <div
          :style="{ backgroundColor: colors[index] }"
          class="w-4 h-4 rounded-full mr-2"
        ></div>
        <!-- text -->
        <span class="text-sm">{{ name }} {{ value }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TechIndicator",
  props: {
    tech: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      colors: ["#fbc02d", "#00bfa5", "#ff5722", "#03A9F4", "#545454"],
      widthCoEf: 0,
      shouldMount: false,
      previousX: 0,
    };
  },
  mounted() {
    this.widthCoEf = this.$refs.container.getBoundingClientRect().width / 100;

    this.$nextTick(() => {
      this.shouldMount = true;
    });
  },
};
</script>
