<template>
  <div id="gt-example">
    <img class="border" :src="borderImg" alt="borda"/>

    <img class="logo" :src='logoImg' data-aos="fade-down" data-aos-duration="500" alt="logo Green Text">

    <div class="comment-box">
      <!-- <img :src="user.photo"  alt="foto de um usuário"> -->
      <textarea id="user-comment" placeholder="Comente aqui" @keydown="listenTextArea()" @click="insertFirstGtMask()"></textarea>
    </div>

  </div>
</template>

<script>
// import PainelDesktop from "@/components/PainelDesktop"
import user from '../../api/user.json'

export default {
  name: 'Painel',
  // components: { PainelDesktop },
  // props: ['commentsJson', 'user'],
  data: () => {
    return {
      currentUser: user,
      gtMask: "> ",

      borderImg: require("@/assets/bg/border.svg"),
      logoImg: require("@/assets/logo.png"),
      userPhoto: require("@/assets/users/pete-davidson.png"),
    }
  },
  methods: {
    listenTextArea() {
      let textarea = document.getElementById("user-comment");
      let isLastLineEmpty = textarea.value.lastIndexOf("\n") === textarea.textLength - 1;

      let code = event.keyCode ? event.keyCode : event.which;

      // if u press enter: add one dot on lines end, add one row, and set getMask
      if (code == 13) {
        textarea.rows++;
        textarea.value = textarea.value.slice(0, textarea.textLength) + ".";
        setTimeout(() => this.insertGtMask(), 1);
      }

      // if u press enter ina middle line: add newline between current lines, and add gt mask

      // if u press backspace on a line empty: remove one row
      else if (code == 8 && isLastLineEmpty) {
        textarea.rows--;
      }

      // if u press backspace at the last character: set gtMask
      if (code == 8 && textarea.textLength === 1) {
        setTimeout(() => this.insertGtMask(), 1);
      }

    },

    insertGtMask() {
      // set gtMask when is not a first line
      let textarea = document.getElementById("user-comment");
      textarea.setRangeText(
        this.gtMask,
        textarea.selectionStart,
        textarea.selectionEnd,
        "end"
      );
    },

    insertFirstGtMask() {
      // if u clicked first time at textarea: set gtMask
      let textarea = document.getElementById("user-comment");
      if (textarea.textLength === 0) {
          setTimeout(() => this.insertGtMask(), 1);
      }
    },

  },
}
</script>

<style scoped lang="scss">
@import "../styles/variables";
@import "../styles/buttons";
@import "../styles/backgrounds";

#gt-example {
  @include black-bg;

  .logo {
    margin: 64px auto;
    height: 72px;
  }

  textarea {
      background-color: transparent;
      border: 1px solid $azul-cinza50;
      border-radius: 5px;
      color: $azul-cinza;
      transition: all 0.5s ease;
      outline: none;

      font-size: 20px;
      min-height: 2rem;
      width: calc(40%);
      margin: 5px 0px 0px 16px;
      padding: 6px 10px;

      div {
        display: flex;
      }

      &:hover {
        border-color: $verde;
      }

      &::placeholder {
        color: $azul-cinza;
        opacity: .5;
      }
    }

  // @media only screen and (max-width: 900px) {
  //   .only-desk { display: none; }
  // } // MOBILE

  // @media only screen and (min-width: 901px) {
  //   .only-mob { display: none; }
  // } // DESKTOP

  @media only screen and (min-width: 901px) and (max-width: 2499px) {
    background-image: url("../assets/bg/bg-desk.png");
  } // DESKTOP
}
</style>