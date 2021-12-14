<template>
  <div id="painel">
    <img class="border" @src="borderImg" alt="borda"/>

    <PainelDesktop class="only-desk" />

    <div class="mobile only-mob"></div>

  </div>
</template>

<script>
import PainelDesktop from "@/components/PainelDesktop"

export default {
  name: 'Painel',
  components: { PainelDesktop },
  data: () => {
    return {
      borderImg: require("@/assets/bg/border.svg")
    }
  }
}
</script>

<style scoped lang="scss">
@import "../styles/variables";
@import "../styles/buttons";
@import "../styles/backgrounds";

#painel {
  @include black-bg;

  @media only screen and (max-width: 900px) {
    .only-desk { display: none; }
  } // MOBILE

  @media only screen and (min-width: 901px) {
    .only-mob { display: none; }
  } // DESKTOP

  @media only screen and (min-width: 901px) and (max-width: 2499px) {
    background-image: url("../assets/bg/bg-desk.png");
  } // DESKTOP
}
</style>