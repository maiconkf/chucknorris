<template>
  <styled-button @click="getMethod(type)" :data-cy="cy">
    <slot />
  </styled-button>
</template>

<script>
import { StyledButton } from "./styles";

export default {
  name: "Button",
  props: ["method", "type", "cy"],
  components: {
    "styled-button": StyledButton,
  },
  methods: {
    getMethod(type) {
      this.method(type);
    },
  },
};
</script>
