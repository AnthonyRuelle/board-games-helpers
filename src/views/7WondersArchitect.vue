<template>
  <div class="page seven-wonders-architect-page">
    <Fieldset>
      <template #legend>7 Wonders Architect</template>
      <div class="player-form-container" v-if="!isAvailableResult">
        <div class="player-counter-infos-container">
          <label for="number-player-select" style="display: block"
            >Nombre de joueurs
          </label>
          <InputNumber
            id="number-player-select"
            v-model="numberOfPlayer"
            showButtons
            buttonLayout="horizontal"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
            :step="1"
            :min="2"
            :max="7"
          />
        </div>

        <div v-for="m in numberOfPlayer" :key="m" class="player-name-input">
          <span class="p-float-label">
            <InputText id="username" type="text" v-model="playerNames[m - 1]" />
            <label for="username">{{ `Joueur ${m}` }}</label>
          </span>
        </div>

        <Button
          :disabled="!isValidForm"
          @click="affectWonders"
          label="Définir les merveilles"
        />
      </div>
      <div v-else class="sort-game-infos">
        <div
          v-for="result in affectedWonders"
          :key="`${result.playerName}_${result.wonder}`"
        >
          {{ result.playerName }} va jouer avec <b>{{ result.wonder }}</b>
        </div>
        <div class="action-buttons-form">
          <Button
            @click="resetAffectedWonders"
            class="p-button-link"
            label="Modifier"
          />
          <Button @click="affectWonders" label="Recommencer" />
        </div>
      </div>
    </Fieldset>
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

<style lang="scss">
.seven-wonders-architect-page {
  .p-fieldset {
    width: 80%;
    margin: $spacer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: $breakpoint-desktop) {
      width: 100%;
    }

    .p-toggleable-content {
      flex: 1;
    }

    .p-fieldset-legend {
      margin: $spacer;
      background: #263238;
      color: $color-white;
    }
  }
}

.player-form-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .player-counter-infos-container {
    margin-bottom: $spacer-medium;

    @media screen and (min-width: $breakpoint-desktop) {
      margin-bottom: $spacer-large;
    }

    label {
      margin: $spacer-small 0;
      left: 0.75rem;
      color: #6c757d;
    }
  }

  .player-name-input {
    margin: $spacer-medium 0;

    @media screen and (min-width: $breakpoint-desktop) {
      margin: $spacer-large 0;
    }
  }
}

.sort-game-infos {
  .action-buttons-form {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: $spacer 0;
  }
}
</style>
