{/* <svg ref="container" height="3" width="100%">
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
</svg> */}

// mounted() {
//   this.widthCoEf = this.$refs.container.getBoundingClientRect().width / 100;

//   this.$nextTick(() => {
//     this.shouldMount = true;
//   });
// }
