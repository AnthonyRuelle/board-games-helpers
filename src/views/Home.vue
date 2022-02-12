<template>
  <div class="home">
    <h1>Home page</h1>
    <div id="nav">
      <router-link to="/7-wonders-architect">7 Wonders architect</router-link>
      |
      <router-link to="/colt-express">Colt express</router-link>
      |
      <router-link to="/chakra">Chakra</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>
