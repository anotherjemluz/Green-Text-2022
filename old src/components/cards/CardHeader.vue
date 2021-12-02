<template>
  <div class="card-header">
    <div class="left-info-post" v-show="headerJson.type === 'post'">
      <img :src="headerJson.userPhoto" alt="foto de um usuário">

      <div class="user-data">
        <p class="username"> {{ headerJson.userName }} </p>

        <div class="sub-info">
          <p class="time-ago"> {{ headerJson.timeAgo }} </p>
          <font-awesome-icon class="circle" icon="circle"></font-awesome-icon>

          <div class="status">
            <p>
              <font-awesome-icon icon="globe-americas"></font-awesome-icon>
              {{ headerJson.statusPost }}
            </p>
          </div>

        </div>

      </div>

    </div>

    <div class="left-info-gt" v-show="headerJson.type === 'gt'">
      <h3> {{ headerJson.titleGt }} </h3>
      <div class="sub-info">
        <p class="time-ago"> {{ headerJson.timeAgo }} </p>
        <font-awesome-icon class="circle" icon="circle"></font-awesome-icon>
        <div class="author">
          <img :src="headerJson.userPhoto" alt="foto de um usuário">
          <p> {{ headerJson.userName }} </p>
        </div>
      </div>
    </div>

    <div class="right-info">
      <img class="options" src="optionsImg" alt="opções">
      <div class="label">
        <h6 class="gt" v-show="headerJson.type === 'gt'"> {{ headerJson.type }} </h6>
        <h6 class="ost" v-show="headerJson.type === 'post'"> {{ headerJson.type }} </h6>
      </div>
    </div>

  </div>
  <!-- .card-header end -->
</template>

<script>
export default {
  name: "CardHeader",
  props: ['headerJson'],
  data: () => {
    return {
      gtPhoto: require("@/assets/users/estatania.png"),
      postPhoto: require("@/assets/users/2bloss.png"),
      optionsImg: require("@/assets/elements/options.svg")
    }
  },
  methods: {
    getTimeAgo() {
      // use the gt creation date to calcule time diference
    },
    getPhoto() {
      if(this.headerJson.type === 'gt') this.headerJson.userPhoto = this.gtPhoto
      else this.headerJson.userPhoto = this.postPhoto
    }
  },
  mounted() {
    this.getPhoto()
  }
};
</script>

<style lang="scss">
@import "../../styles/variables";

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .circle {
    margin: 0px 10px;
    font-size: 0.3rem;
  }

  .left-info-gt {
    text-align: left;

    h3 {
      color: $azul-cinza;
      margin-bottom: 0px;
    }

    .sub-info {
      display: flex;
      align-items: center;

      p {
        margin-bottom: 0px;
      }

      .time-ago {
        cursor: pointer;
        transition: all 0.5s ease;

        &:hover {
          color: $azul-cinza-claro;
        }
      }

      .author {
        display: flex;
        align-items: center;
        cursor: pointer;

        img {
          box-shadow: 0px 0px 0px 5px transparent;
          border: 1px solid transparent;
          transition: all 0.5s ease;
          border-radius: 20px;
          height: 21px;

          margin-right: 10px;

          &:hover {
            box-shadow: 0px 0px 0px 5px #40638520;
            border: 1px solid $azul-cinza;
          }
        }

        p {
          transition: all 0.5s ease;

          &:hover {
            color: $azul-cinza-claro;
          }
        }
      }
    }
  }

  .left-info-post { 
    display: flex;
    text-align: left;
    
    padding: 20px 0px 0px 16px;

    img {
      box-shadow: 0px 0px 0px 5px transparent;
      border: 2px solid $azul-cinza;
      transition: all 0.5s ease;
      border-radius: 30px;
      height: 50px;
      width: 50px;

      margin-right: 10px;

      &:hover {
        box-shadow: 0px 0px 0px 10px #40638520;
      }
    }

    .user-data {
      width: 200px;

      .username {
        color: $azul-cinza;
        font-size: 20px;
        margin-bottom: 0px;
      }

      .sub-info {
        display: flex;
        align-items: center;

        p {
          margin-bottom: 0px;
        }

        .time-ago {
          cursor: pointer;
          transition: all 0.5s ease;

          &:hover {
            color: $azul-cinza-claro;
          }
        }

        .status {
          display: flex;
          align-items: center;
          cursor: pointer;

          img {
            box-shadow: 0px 0px 0px 5px transparent;
            border: 1px solid transparent;
            transition: all 0.5s ease;
            border-radius: 20px;
            height: 21px;

            margin-right: 10px;

            &:hover {
              box-shadow: 0px 0px 0px 5px #40638520;
              border: 1px solid $azul-cinza;
            }
          }

          p {
            transition: all 0.5s ease;

            &:hover {
              color: $azul-cinza-claro;
            }
          }
        }
      }
    }
  }

  .right-info {
    display: flex;

    .options {
      cursor: pointer;
      transition: all 0.5s ease;
      opacity: 0.5;

      margin-right: 10px;

      &:hover {
        opacity: 1;
      }
    }

    h6 {
      text-transform: uppercase;
      border: 1px solid $azul-cinza;
      color: $azul-cinza;
      opacity: 0.6;
      border-radius: 5px;

      cursor: pointer;
      transition: all 0.5s ease;

      margin: 0px;
      padding: 3px 9px;
    }

    .gt:hover {
      opacity: 1;
      color: $verde;
      border-color: $verde;
    }

    .post:hover {
      opacity: 1;
      color: $amarelo;
      border-color: $amarelo;
    }
    
  }
}
</style>