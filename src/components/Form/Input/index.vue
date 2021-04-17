<template>
  <styled-input type="search" id="search" data-cy="search" required />
</template>

<script>
import { StyledInput } from "./styles";

export default {
  name: "Input",
  components: {
    "styled-input": StyledInput,
  },
};
</script>
