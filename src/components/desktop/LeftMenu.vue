<template>
  <section class="left-menu" data-aos="fade-right" data-aos-duration="500">

    <div class="logo">
      <img :src="logoImg" alt="logo Green Text"/>
    </div>

    <div class="user">
      <div class="user-photo">
        <img :src="peteDavidsonPhoto" alt="imagem de um usuário">
      </div>

      <div class="user-resume">
        <p class="username"> {{ user.username }} </p>
        <p class="gt-count"> {{ user.gtCount }} GTs </p>
      </div>
    </div>

    <nav class="menu">
      <router-link to="" class="active"> Linha do tempo </router-link>
      <router-link to=""> Em Alta </router-link>
      <router-link to=""> Minha Conta </router-link>
      <router-link to=""> Amigos </router-link>
      <router-link to="/" class="logout-button"> Sair </router-link>
    </nav>

  </section>
</template>

<script>
import userJson from "../../../api/user.json";

export default {
  name: "LeftMenu",
  data: () => {
    return {
      user: userJson,
      logoImg: require("@/assets/logo.png"),
      peteDavidsonPhoto: require("@/assets/users/pete-davidson.png"),
    };
  }
};
</script>

<style lang="scss">
@import "../../styles/variables";

.left-menu {
  width: 18vw;
  margin: 0px 32px;

  position: fixed;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 33vh;

    img {
      height: 6rem;
    }
  }

  .user {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 18vh;

    img {
      box-shadow: 0px 0px 0px 0.2rem transparent;
      border: 2px solid $azul-cinza;
      transition: all 0.5s;
      border-radius: 50%;
      cursor: pointer;
      height: 4rem;

      &:hover {
        box-shadow: 0px 0px 0px 10px #40638520;
        border: 2px solid $azul-cinza;
      }
    }

    .user-resume {
      margin-left: 20px;
      text-align: left;

      p {
        font-weight: bold;
        color: $azul-cinza;
        cursor: pointer;
        transition: all 0.5s;
        margin-bottom: 0px;

        opacity: 0.8;

        &:hover {
          opacity: 1;
        }
      }

      .username {
        font-size: 1.4rem;
      }

      .gt-count {
        font-size: 1.2rem;
      }
    }
  }

  .menu {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    text-align: left;

    padding: 30px 0px 0px 25%;

    a {
      color: $azul-cinza;
      transition: all 0.5s;
      opacity: 0.7;

      font-size: 1.5rem;

      &:hover {
        opacity: 1;
      }
    }

    .logout-button {
      color: $vermelho;
      opacity: 0.6;

      margin-top: 20px;
    }

    .active {
      opacity: 1;
      color: $amarelo;
    }
  }
}

// MOBILE
@media only screen and (max-width: 900px) {}

// DESKTOP
@media only screen and (min-width: 901px) and (max-width: 2499px) {}

// WIDE
@media only screen and (min-width: 2500px) {}
</style>