<template>
  <header>
    <span>LOGO</span>
    <router-link to="/">Accueil</router-link>
    <router-link to="/contact">Contact</router-link>
  </header>
  <router-view />
</template>

<style lang="scss">
@import url(http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900italic,900);
@import './assets/scss/reset.scss';

@import './assets/scss/variables.scss';

html,
body,
html * {
  font-family: 'Roboto', sans-serif;
}

header {
  height: 30px;
  background-color: $color-test;
}
</style>
