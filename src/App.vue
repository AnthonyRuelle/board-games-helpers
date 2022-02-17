<template>
  <header>
    <router-link class="link" to="/">Board games helpers app.</router-link>
    <div class="spacer" />
    <router-link class="link" to="/contact">Contact</router-link>
  </header>
  <router-view />
  <footer>Copyright @2022 | Developed by Anthony Ruelle</footer>
</template>

<style lang="scss">
@import url(http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900italic,900);
@import './assets/scss/reset.scss';

html,
body,
html {
  font-family: 'Roboto', sans-serif;
  height: 100vh;
}

#app {
  height: 100vh;
}

.page {
  background: #f4f4f4;
  height: calc(100vh - #{$header-height} - #{$footer-height});

  @media screen and (min-width: $breakpoint-desktop) {
    padding: 0 20%;
  }
}

header {
  height: $header-height;
  background-color: #232323;
  display: flex;
  align-items: center;

  .spacer {
    flex: 1;
  }

  .link {
    color: $color-white;
    margin: 0 $spacer;
    text-decoration: none;

    &:hover {
      color: #b3b3b3;
    }
  }
}

footer {
  height: $footer-height;
  background-color: #263238;
  color: #b3b3b3;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
