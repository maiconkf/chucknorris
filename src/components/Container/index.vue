<template>
  <styled-container>
    <slot />
  </styled-container>
</template>

<script>
import { StyledContainer } from "./styles";

export default {
  name: "Container",
  components: {
    "styled-container": StyledContainer,
  },
};
</script>
