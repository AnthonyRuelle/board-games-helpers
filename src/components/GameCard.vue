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
  width: 145px;
  height: 160px;
  border: 1px solid transparent;
  font-size: 12px;

  @media screen and (min-width: $breakpoint-tablet) {
    width: 220px;
    height: 270px;
  }

  &:hover {
    cursor: pointer;
    border-color: grey;
  }

  .board-game-image {
    width: 120px;
    height: 120px;

    @media screen and (min-width: $breakpoint-tablet) {
      width: 200px;
      height: 200px;
    }
  }

  .p-card-body {
    display: flex;
    flex: 1;
    align-items: center;
    padding: 0;
  }

  .p-card-content {
    font-weight: bold;

    @media screen and (max-width: $breakpoint-tablet) {
      padding: 0.5rem 0;
    }
  }
}
</style>
