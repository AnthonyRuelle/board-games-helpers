<template>
  <Card class="game-card" @click="goToGameHelper">
    <template #header>
      <img class="board-game-image" alt="game board image" :src="imageSrc" />
    </template>
    <template #content>{{ name }} </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GameCard',
  props: {
    name: String,
    imageSrc: String,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    goToGameHelper() {
      this.$emit('go-to-game-helper');
    },
  },
});
</script>

<style lang="scss">
.p-card {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 220px;
  height: 270px;
  border: 1px solid transparent;

  &:hover {
    cursor: pointer;
    border-color: grey;
  }

  .board-game-image {
    width: 200px;
    height: 200px;
  }
}
</style>
