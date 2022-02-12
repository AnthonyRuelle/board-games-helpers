<template>
  <h1>Colt express</h1>
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
</template>

<script>
export default {
  name: 'ColtExpress',
  data() {
    return {
      numberOfPlayer: 2,
      playerNames: [],
      charactersNames: ['Ghost', 'Cheyenne', 'Django', 'Belle', 'Tuco', 'Doc'],
      affectedCharacters: [],
    };
  },
  computed: {
    isValidForm() {
      return (
        this.playerNames.length === this.numberOfPlayer &&
        this.playerNames.every(
          (playerName) => playerName?.trim()?.length > 0 && playerName !== null,
        )
      );
    },
    isAvailableResult() {
      return this.affectedCharacters.length > 0;
    },
  },
  methods: {
    affectCharacters() {
      this.resetAffectedCharacters();
      const charactersNamesCopied = [...this.charactersNames];
      this.playerNames.forEach((playerName) => {
        const idx = Math.floor(Math.random() * charactersNamesCopied.length);
        const character = charactersNamesCopied[idx];
        this.affectedCharacters.push({
          playerName,
          character,
        });
        charactersNamesCopied.splice(idx, 1);
      });
    },
    resetAffectedCharacters() {
      this.affectedCharacters = [];
    },
  },
};
</script>
<style></style>
