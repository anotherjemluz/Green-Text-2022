<template>
  <div id="app">
    <Content/>
  </div>
</template>

<script>
import Content from "@/components/Content";

export default {
  name: 'app',
  components: { Content }
}
</script>

<style lang="scss">
@import '../src/styles/styles.scss';

// @import '../node_modules/bootstrap/scss/bootstrap';
// @import '../node_modules/bootstrap-vue/src/index.scss';

</style>
