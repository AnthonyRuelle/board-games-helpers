<template>
  <div class="page">
    <h1>Chakra</h1>
    <template v-if="!isAvailableResult">
      <label for="number-player-select">Nombre de joueurs: </label>
      <select v-model="numberOfPlayer" id="number-player-select">
        <option v-for="n in 3" :key="n" :value="n + 1">
          {{ n + 1 }}
        </option>
      </select>

      <div v-for="m in numberOfPlayer" :key="m">
        <label :for="`player-name-${m}`">{{ `Joueur ${m}` }}: </label>
        <input :id="`player-name-${m}`" v-model="playerNames[m - 1]" />
      </div>

      <button :disabled="!isValidForm" @click="affectMeditation">
        Définir les jetons méditations
      </button>
    </template>
    <template v-else>
      <div
        v-for="result in affectedMeditation"
        :key="`${result.playerName}_${result.color}`"
      >
        {{ result.playerName }} va commencer avec un jeton méditation de couleur
        <b>{{ result.color }}</b>
      </div>
      <button @click="affectMeditation">Recommencer</button>
      <button @click="resetAffectedMeditation">Modifier</button>
    </template>
  </div>
</template>

<script lang="ts">
export interface AffectedMeditation {
  playerName: string;
  color: string;
}

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Chakra',
  data() {
    return {
      numberOfPlayer: 2,
      playerNames: [] as Array<string>,
      meditationColors: [
        'Violet',
        'Bleu',
        'Cyan',
        'Vert',
        'Jaune',
        'Orange',
        'Rouge',
      ],
      affectedMeditation: [] as Array<AffectedMeditation>,
    };
  },
  computed: {
    isValidForm(): boolean {
      return (
        this.playerNames.length === this.numberOfPlayer &&
        this.playerNames.every(
          (playerName) => playerName?.trim()?.length > 0 && playerName !== null,
        )
      );
    },
    isAvailableResult(): boolean {
      return this.affectedMeditation.length > 0;
    },
  },
  methods: {
    affectMeditation(): void {
      this.resetAffectedMeditation();
      this.playerNames.forEach((playerName) => {
        const idx = Math.floor(Math.random() * this.meditationColors.length);
        const color: string = this.meditationColors[idx];
        this.affectedMeditation.push({
          playerName,
          color,
        });
      });
    },
    resetAffectedMeditation(): void {
      this.affectedMeditation = [];
    },
  },
});
</script>
