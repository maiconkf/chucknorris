<template>
  <styled-flex :style="styles">
    <slot />
  </styled-flex>
</template>

<script>
import { StyledFlex } from "./styles";

export default {
  name: "Flex",
  components: {
    "styled-flex": StyledFlex,
  },

  props: ["justify"],
  computed: {
    styles() {
      return {
        "justify-content": this.justify,
      };
    },
  },
};
</script>
