<template >
  <div class="card-footer">

    <div class="left-actions">

      <button class="bt-share">
        <font-awesome-icon icon="share-alt"></font-awesome-icon>
      </button>

      <button class="bt-expand">
        <font-awesome-icon icon="external-link-alt"></font-awesome-icon>
      </button>

    </div>

    <div class="right-reactions">

      <button class="bt-top">
        <font-awesome-icon icon="apple-alt"></font-awesome-icon>
        {{ footerJson.topCount }}
      </button>

      <button class="bt-shit">
        <font-awesome-icon icon="toilet-paper"></font-awesome-icon>
        {{ footerJson.shitCount }}
      </button>

      <button class="bt-comment">
        <font-awesome-icon icon="comment-alt"></font-awesome-icon>
        {{ footerJson.commentsCount }}
      </button>

    </div>

  </div>
</template>

<script>
export default {
  name: "CardFooter",
  props: ['footerJson']
};
</script>

<style lang="scss">
@import "../../styles/variables";

.card-footer {
  display: flex;
  justify-content: space-between;
  transform: translateY(50%);

  .left-actions {
    transform: translateX(16px);
    // margin-left: 16px;

    .bt-share,
    .bt-expand {
      background-color: $bt-reaction-bg;
      border: 2px solid $azul-cinza50;
      color: $azul-cinza;
      border-radius: 5px;

      transition: all 0.5s ease;

      padding: 5px 10px;
      margin: 5px;

      position: relative;
      // transform: translateY(100%);
      // bottom: -75%;

      font-size: 0.8rem;

      &:hover {
        border-color: $azul-cinza;
        color: $azul-cinza;
      }
    }
  }

  .right-reactions {
    .bt-top,
    .bt-shit,
    .bt-comment {
      background-color: $bt-reaction-bg;
      border: 2px solid $azul-cinza50;
      color: $azul-cinza;
      border-radius: 20px;

      transition: all 0.5s ease;

      padding: 3px 10px;
      margin: 5px;

      position: relative;
      // bottom: -80%;

      font-weight: bold;
      font-size: 0.9rem;
    }

    .bt-top {
      &:hover {
        border-color: $vermelho;
        color: $vermelho;
      }
    }

    .bt-shit {
      &:hover {
        border-color: $amarelo;
        color: $amarelo;
      }
    }

    .bt-comment {
      &:hover {
        border-color: $azul-cinza;
        color: $azul-cinza;
      }
    }
  }
}
</style>