<template>
  <div class="gt-post">
    <CardHeader :headerJson="gtOrPostData"/>>
    <CardContent :bodyJson="gtOrPostData"/>
    <CardComments :commentsJson="gtOrPostData" :user="user"/>
    <CardFooter :footerJson="gtOrPostData"/>
  </div>
</template>

<script>
import CardHeader from "@/components/cards/CardHeader"
import CardContent from "@/components/cards/CardContent"
import CardComments from "@/components/cards/CardComments"
import CardFooter from "@/components/cards/CardFooter"

export default {
  name: "GtOrPostCard",
  components: { CardHeader, CardContent, CardComments, CardFooter },
  props: ['user', 'gtOrPostData'],
};
</script>

<style lang="scss">
@import "../../styles/variables";
@import "../../styles/backgrounds";

.gt-post {
  @include card-bg;

  margin: 40px 0px;
}
</style>