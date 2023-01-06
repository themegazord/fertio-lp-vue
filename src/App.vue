<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
  html{
    scroll-behavior: smooth;
    overflow: hidden;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
  }
</style>
