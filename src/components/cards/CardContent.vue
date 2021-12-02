<template>
  <div class="card-content">

    <!-- textarea#gt-txt(@keydown="listenTextArea()") -->

    <p v-if="bodyJson.type === 'post'"> {{ bodyJson.txt }} </p>
    <div v-for="line in gtLines" :key="line">
      <span> {{ line.spanContent }} </span>
      <p> {{ line.pContent }} </p>
    </div>

  </div>
</template>

<script>
export default {
  name: "CardContent",
  props: ['bodyJson'],
  data: () => {
    return {
      gtMask: "> ",
      moreThanIndexes: [],
      gtLines: [],
      divId: ''
    };
  },
  methods: {
    formatGtToShow() {
      if (!this.bodyJson.type === 'gt') return false;

      // convert ↵ to linebreak
      this.bodyJson.txt = this.bodyJson.txt.replace(/↵/g, "\n");

      // change color off all >
      this.getAllMoreThanIndexes(this.bodyJson.txt, ">");
      this.formatToHtml(this.moreThanIndexes, this.bodyJson.txt);
    },
    formatToHtml(arr, str) {
      let start = 0;
      let end = 0;

      while (end < arr.length) {
        // cria os elementos para receberem o conteudo da linha
        let span = ''
        let p = ''

        // do > [0] ao [1]
        // ou do > [1] pra cima
        if (end === 0) {
          // já pega a posição final do intervalo
          end++;

          // atribui o conteudo das tags span e p
          span = str.slice(start, start + 2);
          p = str.slice(start + 2, arr[end]);
        } else if (end > 0) {
          // pega a posição end anterior para definir como ponto de partida
          // e pega a posição final do intervalo
          start = end;
          end++;

          // atribui o conteudo das tags span e p
          span = str.slice(arr[start], arr[start] + 2);
          p = str.slice(arr[start] + 2, arr[end]);
        }

        // guarda no array
        this.gtLines[start] = {
          pContent: p,
          spanContent: span
        }
      }
    },
    getAllMoreThanIndexes(str, val) {
      let i = -1;
      while ((i = str.indexOf(val, i + 1)) != -1) {
        this.moreThanIndexes.push(i);
      }
    },

    insertGtMask() {
      let textarea = document.getElementById("gt-txt");
      textarea.setRangeText(
        this.gtMask,
        textarea.selectionStart,
        textarea.selectionEnd,
        "end"
      );
    },
    listenTextArea() {
      let textarea = document.getElementById("gt-txt");
      let isLastLineEmpty =
        textarea.value.lastIndexOf("\n") === textarea.textLength - 1;

      let code = event.keyCode ? event.keyCode : event.which;

      // 1 - if u clicked first time: set gtMask
      if (event.type == "click" && textarea.textLength === 0) {
        setTimeout(() => this.insertGtMask(), 1);
      }

      // 2 - if u press enter: add one row and set getMask
      if (code == 13) {
        textarea.rows++;
        textarea.value = textarea.value.slice(0, -1) + ".";
        setTimeout(() => this.insertGtMask(), 1);
      }
      // 2.2 - if u press backspace on a line empty: remove one row
      else if (code == 8 && isLastLineEmpty) {
        textarea.rows--;
      }

      // 3 - if u press backspace at the last character: set gtMask
      if (code == 8 && textarea.textLength === 1)
        setTimeout(() => this.insertGtMask(), 1);
    }
  },
  created() {
    this.formatGtToShow()
  }
};
</script>

<style lang="scss">
@import "../../styles/variables";

.card-content {
  margin: 20px 40px;

  textarea {
    background-color: transparent;
    border: 1px solid $azul-cinza50;
    border-radius: 5px;
    color: $azul-cinza;
    transition: all 0.5s ease;
    outline: none;

    height: auto;
    width: calc(100% - 80px);
    margin: 0px 32px 0px 48px;
    padding: 0px 10px;

    div {
      display: flex;
    }

    &:hover {
      border-color: $azul-cinza;
    }
  }

  p { 
    font-size: 18px;
    text-align: left;
  }

  div {
    display: flex;
    text-align: left;

    span {
      color: $verde;
      margin-right: 10px;
    }

    p {
      margin-bottom: 0px;
    }
  }
}
</style>