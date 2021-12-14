<template>
  <div>
    <img class="border" :src="borderImg" alt="borda">
    <img class="arvore" :src="treeImg" data-aos="fade-left" data-aos-duration="500" alt="árvore">

    <div id="login_cadastro">
      <div class="body">
        <img class="logo" :src='logoImg' data-aos="fade-down" data-aos-duration="500" alt="logo Green Text">

        <form data-aos="fade-up" data-aos-duration="600">
          <!-- INPUTS LOGIN -->
          <div class="login">

            <div class="form-group">
              <input type='text' class="form-control" placeholder="Nome de Usuário" v-model='user.username' required>
            </div>

            <div class="form-group">
              <input type='password' class="form-control" placeholder="Senha" v-model='user.pass' required>
            </div>

          </div>

          <!-- INPUTS CADASTRO -->
          <div class="cadastro">

            <div class="form-group">
              <input type='password' class="form-control" placeholder="Confirmar Senha" v-model='user.confirmPass' v-if="showSignup" required>
            </div>

            <div class="form-group">
              <input type='text' class="form-control" placeholder="Nome" v-model='user.firstName' v-if="showSignup" required>
            </div>

            <div class="form-group">
              <input type='text' class="form-control" placeholder="Sobrenome" v-model='user.lastName' v-if="showSignup" required>
            </div>

            <div class="form-group">
              <input type='text' class="form-control" placeholder="E-mail" v-model='user.mail' v-if="showSignup" required>
            </div>

          </div>

          <!-- BOTOES -->
          <div class="button-group">
            <input type='button' class="btn btn-primary btn-pill bt-entrar" v-if="!showSignup"  @click="signIn" value="Criar conta">
          </div>

          <div class="button-group">
            <input type='button' class="btn btn-primary btn-pill bt-criar" v-if="showSignup"  @click="signUp" value="Criar conta">
          </div>

        </form>

      </div>
      <!-- .BODY END -->

      <div class="pergunta" data-aos="fade-in" data-aos-duration="1000">

        <p class="pgt-txt">
          {{ showSignup ? 'Já tem uma conta?' : 'Novo por aqui?' }}
        </p>

        <a href="" @click.prevent="showSignup = !showSignup" class="pgt-link">
          {{ showSignup ? 'Fazer Login' : 'Criar Conta' }}
        </a>

      </div>
      <!-- .pergunta END -->

    </div>

  </div>

</template>

<script>
// import { baseApiUrl, showError, userKey } from '@/global'
// import axios from 'axios'

export default {
  name: "LoginCadastro",
  data: () => {
    return {
      user: {},
      showSignup: false,
      borderImg: require("@/assets/bg/border.svg"),
      logoImg: require("@/assets/logo.png"),
      treeImg: require("@/assets/bg/arvore.png")
    };
  },
  methods: {
    signIn() {
    //   axios.post(`${baseApiUrl}/auth/signin`, this.user)
    //   .then(res => {
    //       this.$store.commit('setUser', res.data)
    //       localStorage.setItem(userKey, JSON.stringify(res.data))
          this.$router.push({ path: '/painel'})
    //   }).catch(showError)
    },
    signUp() {
    //   axios.post(`${baseApiUrl}/auth/signup`, this.user)
    //   .then(() => {
    //       this.$toasted.global.defaultSucess()
    //       this.user = {}
    //       this.showSignup = false
    //   }).catch(showError)
    }
  }
};
</script>

<style scoped lang="scss" >
@import "../styles/styles";

#login_cadastro {
  @include black-bg;

  display: flex;
  flex-direction: column;

  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input.form-control {
    @include input-login-cadastro;
  }

  .bt-entrar, .bt-criar  {
    @include bt-verde;
    width: 186px;
  }

  .pergunta {
    margin: 0px auto 50px auto;

    .pgt-txt {
      color: $amarelo;
      margin-bottom: 0px;
      opacity: .8;
    }
    .pgt-link {
      opacity: .5;
      color: $amarelo;
      font-weight: bold;
      text-decoration: none;
      border-bottom: 2px solid transparent;
      transition: all .5s ease-in-out;

      &:hover {
        border-color: $amarelo;
        opacity: 1;
      }
    }
  }
}

// MOBILE
@media only screen and (max-width: 900px) {
  #login_cadastro {
    .body {
      margin: 20vh auto 80px auto;

      .logo {
        width: 200px;
        margin: 0px auto 50px auto;
      }
    }
  }
}

// DESKTOP
@media only screen and (min-width: 901px) and (max-width: 2499px) {
  #login_cadastro {
    .body {
      margin: 10% auto 80px auto;

      .logo {
        width: 200px;
        margin: 10% auto 50px auto;
      }
    }
  }
}

// WIDE
@media only screen and (min-width: 2500px) {
  #login_cadastro {
    .body {
      margin: 10% auto 80px auto;

      .logo {
        width: 200px;
        margin: 0px auto 50px auto;
      }
    }
  }
}
</style>