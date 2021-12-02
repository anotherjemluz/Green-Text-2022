<template>
  <div class="cta-post">
    <h3> Tem algo a dizer? </h3>
    <button class="bt-new-post">
      <font-awesome-icon icon="bullhorn"></font-awesome-icon>
      Nova Publicação
    </button>
  </div>
</template>

<script>
export default {
  name: 'CtaPost'
}
</script>

<style lang="scss">
@import "../../styles/variables";
@import "../../styles/buttons";

.cta-post {
  border: 1px dashed #40638580;

  margin-top: 20px;
  margin-bottom: 40px;
  padding: 20px 0px 40px 0px;

  h3 { font-weight: bold; }

  .bt-new-post {
    @include bt-verde;
    opacity: .8;
  }
}
</style>