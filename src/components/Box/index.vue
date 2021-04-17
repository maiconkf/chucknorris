<template>
  <styled-box data-cy="box">
    <slot />
  </styled-box>
</template>

<script>
import { StyledBox } from "./styles";

export default {
  name: "Box",
  components: {
    "styled-box": StyledBox,
  },
};
</script>
