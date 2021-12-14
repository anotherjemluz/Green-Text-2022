<template>
  <div class="card-comments">
    <p class="line"></p>

    <div class="comment-line" v-for="(comment, index) in commentsJson.commentList" :key="index">
      <!-- v-if="index < 2" > -->

      <div class="userphoto-time">
        <img :src="userPhoto" alt="">
        <p> {{ comment.timeAgo }} </p>
      </div>

      <div class="content-reactions">

        <div class="txt">
          <p class="username"> {{ comment.username }} </p>
          <p class="msg"> {{ comment.msg }} </p>
        </div>

        <div class="reactions">
          <p class="top-vote" @click="comment.topCount++"> Top </p>
          <p class="shit-vote" @click="comment.shitCount++"> Shit </p>
          <font-awesome-icon icon="reply"></font-awesome-icon>
        </div>

      </div>

      <div class="reactions-count">

        <p class="top-count">
          <font-awesome-icon icon="apple-alt"></font-awesome-icon>
          {{ comment.topCount }}
        </p>

        <p class="shit-count">
          <font-awesome-icon icon="toilet-paper"></font-awesome-icon>
          {{ comment.shitCount }}
        </p>
      </div>
    </div>

    <div class="comment-box">
      <img :src="user.photo"  alt="foto de um usuário">
      <textarea id="user-comment" placeholder="Comente aqui" @keydown="listenTextArea()"></textarea>
    </div>

  </div>
  <!-- .card-comments end -->
</template>

<script>
export default {
  name: "CardComments",
  props: ['commentsJson', 'user'],
  data: () => {
    return {
      userPhoto: require("@/assets/users/pete-davidson.png"),
    };
  },
  methods: {
    getPhotos() {
      // for (let i = 0; i < this.json.length; i++) {
      //   this.json[i].userPhoto = require(this.json[i].userPhoto.toString())
      //   console.log('a')
      // }
    },
    listenTextArea() {
      let textarea = document.getElementById("user-comment");
      let isLastLineEmpty = textarea.value.lastIndexOf("\n") === textarea.textLength - 1;

      let code = event.keyCode ? event.keyCode : event.which;

      // 1 - if u press enter: add one row
      if (code == 13) {
        textarea.rows++;
      }
      // 2 - if u press backspace on a line empty: remove one row
      else if (code == 8 && isLastLineEmpty) {
        textarea.rows--;
      }
    }
  },
  mounted() {
    // this.getPhotos()
  }
};
</script>

<style lang="scss">
@import "../../styles/variables";
@import "../../styles/backgrounds";

.card-comments {
  @include comments-bg;

  margin-bottom: -11.5%; // bug para remover espaço não ocupado pelo footer
  padding: 0px 40px 30px 40px;

  .line {
    background-color: $azul-cinza50;

    height: 2px;
    width: calc(30vw - 72px);
    margin-bottom: 30px;
  }

  .comment-line {
    display: flex;
    margin-top: 10px;

    .userphoto-time {
      img {
        cursor: pointer;
        transition: all 0.5s ease;

        box-shadow: 0px 0px 0px 5px transparent;
        border: 2px solid $azul-cinza;
        border-radius: 30px;

        height: 40px;
        margin-top: 7px;

        &:hover {
          box-shadow: 0px 0px 0px 10px #40638520;
          border: 2px solid $azul-cinza;
        }
      }

      p {
        cursor: pointer;
        transition: all 0.5s ease;

        font-size: 14px;
        margin: 10px 0px 0px 0px;
        &:hover {
          color: $azul-cinza;
        }
      }
    }

    .content-reactions {
      margin-left: 20px;

      .txt {
        background-color: #000000;
        box-shadow: 0px 0px 10px 0px #000;
        border-radius: 10px;
        text-align: left;

        padding: 5px 40px 5px 15px;

        p {
          margin-bottom: 0px;
        }

        .username {
          cursor: pointer;
          color: $azul-cinza;
          font-size: 14px;
        }

        .msg {
          // font-weight: lighter;
        }
      }

      .reactions {
        display: flex;
        padding: 5px 0px 0px 15px;

        p {
          cursor: pointer;
          font-size: 14px;
          margin: 0px 10px;
        }

        .top-vote {
          transition: all 0.5s ease;
          &:hover {
            color: $vermelho;
          }
        }

        .shit-vote {
          transition: all 0.5s ease;
          &:hover {
            color: $amarelo;
          }
        }

        svg {
          cursor: pointer;
          transition: all 0.5s ease;

          margin: 5px 0px 0px 10px;
          &:hover {
            color: $azul-cinza;
          }
        }
      }
    }

    .reactions-count {
      text-align: left;
      margin-top: 5px;
      transform: translateX(-7px);

      p {
        margin-bottom: 0px;
      }

      .top-count {
        color: $vermelho;
      }
      .shit-count {
        color: $amarelo;
      }
    }
  }

  .comment-box {
    display: flex;
    margin-top: 20px;

    img {
      box-shadow: 0px 0px 0px 0.2rem transparent;
      border: 2px solid $azul-cinza;
      transition: all 0.5s;
      border-radius: 50%;
      cursor: pointer;
      height: 2.7rem;
      width: 2.7rem;

      &:hover {
        box-shadow: 0px 0px 0px 10px #40638520;
        border: 2px solid $verde;
      }
    }

    textarea {
      background-color: transparent;
      border: 1px solid $azul-cinza50;
      border-radius: 5px;
      color: $azul-cinza;
      transition: all 0.5s ease;
      outline: none;

      min-height: 2rem;
      width: calc(100%);
      margin: 5px 0px 0px 16px;
      padding: 0px 10px;

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
  }
}
</style>