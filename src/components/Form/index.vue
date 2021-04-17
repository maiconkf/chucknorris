<template>
  <styled-form @submit.prevent>
    <Input />
    <Flex justify="center">
      <Button :method="fetchJoke" :type="(type = 'all')" :cy="(cy = 'all')"
        >Chuck Norris Search</Button
      >
      <Button :method="fetchJoke" :type="(type = 'lucky')" :cy="(cy = 'lucky')"
        >I'm feeling lucky</Button
      >
    </Flex>
    <div v-if="jokes">
      <div v-for="joke in jokes" :key="joke.id">
        <Box>
          <Flex>
            <img :src="joke.icon_url" />
            <em>{{ joke.value }}</em>
          </Flex>
        </Box>
      </div>
    </div>
    <div v-else>
      <h2 data-cy="404">Joke not found :(</h2>
    </div>
  </styled-form>
</template>

<script>
import Flex from "../Flex";
import Input from "./Input";
import Button from "./Button";
import Box from "../Box";
import { StyledForm } from "./styles";

export default {
  name: "Form",
  components: {
    "styled-form": StyledForm,
    Input,
    Button,
    Flex,
    Box,
  },
  data: function() {
    return {
      jokes: [],
      type: "lucky",
      cy: "lucky",
    };
  },
  methods: {
    fetchJoke(type) {
      const search = document.getElementById("search").value;
      if (search.length < 3) return;

      fetch(`https://api.chucknorris.io/jokes/search?query=${search}`)
        .then((response) => response.json())
        .then((data) => {
          const { result } = data;

          if (result.length) {
            this.jokes = type === "lucky" ? [data.result[0]] : data.result;
          } else {
            this.jokes = null;
          }
        });
    },
  },
};
</script>
