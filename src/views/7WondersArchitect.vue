<template>
  <div class="page">
    <h1>7 Wonders Architect</h1>
    <template v-if="!isAvailableResult">
      <label for="number-player-select">Nombre de joueurs: </label>
      <select v-model="numberOfPlayer" id="number-player-select">
        <option v-for="n in 6" :key="n" :value="n + 1">
          {{ n + 1 }}
        </option>
      </select>

      <div v-for="m in numberOfPlayer" :key="m">
        <label :for="`player-name-${m}`">{{ `Joueur ${m}` }}: </label>
        <input :id="`player-name-${m}`" v-model="playerNames[m - 1]" />
      </div>

      <button :disabled="!isValidForm" @click="affectWonders">
        Définir les merveilles
      </button>
    </template>
    <template v-else>
      <div
        v-for="result in affectedWonders"
        :key="`${result.playerName}_${result.wonder}`"
      >
        {{ result.playerName }} va jouer avec <b>{{ result.wonder }}</b>
      </div>
      <button @click="affectWonders">Recommencer</button>
      <button @click="resetAffectedWonders">Modifier</button>
    </template>
  </div>
</template>

<script lang="ts">
export interface AffectedWonders {
  playerName: string;
  wonder: string;
}

import { defineComponent } from 'vue';

export default defineComponent({
  name: '7WondersArchitect',
  data() {
    return {
      numberOfPlayer: 2,
      playerNames: [] as Array<string>,
      wondersNames: [
        'Babylone',
        'Gizeh',
        'Alexandrie',
        'Olympie',
        'Rhodes',
        'Halicarnasse',
        'Ephése',
      ],
      affectedWonders: [] as Array<AffectedWonders>,
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
      return this.affectedWonders.length > 0;
    },
  },
  methods: {
    affectWonders(): void {
      this.resetAffectedWonders();
      const wondersNamesCopied = [...this.wondersNames];
      this.playerNames.forEach((playerName) => {
        const idx = Math.floor(Math.random() * wondersNamesCopied.length);
        const wonder: string = wondersNamesCopied[idx];
        this.affectedWonders.push({
          playerName,
          wonder,
        });
        wondersNamesCopied.splice(idx, 1);
      });
    },
    resetAffectedWonders(): void {
      this.affectedWonders = [];
    },
  },
});
</script>
