<template>
  <div class="home">
    <div class="games">
      <GameCard
        v-for="game in boardGameInfos"
        :key="game.name"
        :name="game.name"
        :image-src="game.image"
        @go-to-game-helper="navigate(game.path)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import GameCard from '@/components/GameCard.vue';
import router from '@/router';

export default defineComponent({
  name: 'Home',
  components: {
    GameCard,
  },
  data() {
    return {
      boardGameInfos: [
        {
          path: '/colt-express',
          name: 'Colt express',
          image:
            'https://www.ludonaute.fr/wp-content/uploads/2014/12/boite3D-ML.png',
        },
        {
          path: '/chakra',
          name: 'Chakra',
          image:
            'https://www.vindjeu.eu/prd/wp-content/uploads/2019/03/pic4487174.jpg',
        },
        {
          path: '/7-wonders-architect',
          name: '7 Wonders Architect',
          image:
            'https://cdn3.philibertnet.com/515898-large_default/7-wonders-architects.jpg',
        },
      ],
    };
  },
  methods: {
    navigate(path: string) {
      router.push({ path });
    },
  },
  // mounted() {
  //   fetch('../boardGamesInfos.json')
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // },
});
</script>

<style lang="scss">
.games {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  .game-card {
    margin: $spacer;
  }
}
</style>
