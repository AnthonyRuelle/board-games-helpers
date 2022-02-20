<template>
  <div class="page colt-express-page">
    <h1>Colt express</h1>
    <template v-if="!isAvailableResult">
      <label for="number-player-select">Nombre de joueurs: </label>
      <select v-model="numberOfPlayer" id="number-player-select">
        <option v-for="n in 5" :key="n" :value="n + 1">
          {{ n + 1 }}
        </option>
      </select>

      <div v-for="m in numberOfPlayer" :key="m">
        <label :for="`player-name-${m}`">{{ `Joueur ${m}` }}: </label>
        <input :id="`player-name-${m}`" v-model="playerNames[m - 1]" />
      </div>

      <button :disabled="!isValidForm" @click="affectCharacters">
        Définir les personnages
      </button>
    </template>
    <template v-else>
      <div
        v-for="result in affectedCharacters"
        :key="`${result.playerName}_${result.character}`"
      >
        {{ result.playerName }} va jouer avec
        <b>{{ result.character }}</b>
      </div>
      <button @click="affectCharacters">Recommencer</button>
      <button @click="resetAffectedCharacters">Modifier</button>
    </template>
  </div>
</template>

<script lang="ts">
export interface AffectedCharacters {
  playerName: string;
  character: string;
}

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ColtExpress',
  data() {
    return {
      numberOfPlayer: 2,
      playerNames: [] as Array<string>,
      charactersNames: ['Ghost', 'Cheyenne', 'Django', 'Belle', 'Tuco', 'Doc'],
      affectedCharacters: [] as Array<AffectedCharacters>,
    };
  },
  computed: {
    isValidForm(): boolean {
      return (
        this.playerNames.length === this.numberOfPlayer &&
        this.playerNames.every(
          (playerName: string) =>
            playerName?.trim()?.length > 0 && playerName !== null,
        )
      );
    },
    isAvailableResult(): boolean {
      return this.affectedCharacters.length > 0;
    },
  },
  methods: {
    affectCharacters(): void {
      this.resetAffectedCharacters();
      const charactersNamesCopied = [...this.charactersNames];
      this.playerNames.forEach((playerName: string) => {
        const idx = Math.floor(Math.random() * charactersNamesCopied.length);
        const character: string = charactersNamesCopied[idx];
        this.affectedCharacters.push({
          playerName,
          character,
        });
        charactersNamesCopied.splice(idx, 1);
      });
    },
    resetAffectedCharacters(): void {
      this.affectedCharacters = [];
    },
  },
});
</script>
