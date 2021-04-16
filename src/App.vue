<template>
  <div id="app">
    <Container>
      <Header />
      <Form
    /></Container>
  </div>
</template>

<script>
import Container from "./components/Container";
import Header from "./components/Header";
import Form from "./components/Form";

export default {
  name: "App",
  components: {
    Container,
    Header,
    Form,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 60px 0;
  overflow-x: hidden;
}
</style>
