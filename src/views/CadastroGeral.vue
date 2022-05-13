<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <h1 class="titulo">CADASTROS</h1>
    <div class="circulo"></div>

    <img class="imagem-logo" src="../assets/rotaractLogoCadastro.png" alt="" />

    <div class="box-1">
      <a href="#/cadastro-membros">
        <div class="box-2">
          <div class="circulo-2">
            <h1>MEMBRO</h1>
          </div>
        </div>
      </a>
      <a href="#/cadastro-projetos">
        <div class="box-3">
          <div class="circulo-2">
            <h1>PROJETO</h1>
          </div>
        </div>
      </a>
      <a href="#/cadastro-reunioes">
        <div class="box-4">
          <div class="circulo-2">
            <h1>REUNIÕES</h1>
          </div>
        </div>
      </a>
      <a href="#/cadastro-instituicao">
        <div class="box-5">
          <div class="circulo-2">
            <h1>INSTITUIÇÕES</h1>
          </div>
        </div>
      </a>
    </div>
    <div class="container-botao">
      <input class="botao" type="submit" name="salvar" value="Salvar" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuBox from "../components/menu/Menu.vue";

export default defineComponent({
  name: "CadastroGeral",
  components: {
    MenuBox,
  },
});
</script>

<style>
main {
  background-color: #f2f2f2;
}

h1 {
  font-weight: 600;
  font-size: 30px;
  color: white;
  margin-top: 55px;
  margin-left: 106px;
  text-align: right !important;
  width: 189px;
}

.imagem-logo {
  position: absolute;
  margin-left: 84%;
  margin-top: 8%;
  width: 16%;
}

.container-botao {
  align-items: flex-end;
  margin-block-start: auto;
  margin-bottom: 24px;
}

.botao {
  background-color: #f970a4;
  border: none;
  border-radius: 20px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: -93px;
  padding: 8px 40px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
}

.box-1 {
  background-color: transparent;
  width: 78%;
  height: 25rem;
  margin-top: 133px;
  margin-bottom: 30px;
  padding: 0;
}

.box-2 {
  background-color: #f970a4;
  width: 25%;
  height: 8rem;
  margin-top: 55px;
  margin-bottom: 30px;
  margin-left: 5%;
  padding: 0;
  border-radius: 30px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
  position: absolute;
}
.box-3 {
  background-color: #f970a4;
  width: 25%;
  height: 8rem;
  margin-top: 55px;
  margin-bottom: 30px;
  margin-left: 33%;
  padding: 0;
  border-radius: 30px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
  position: absolute;
}

.box-4 {
  background-color: #f970a4;
  width: 25%;
  height: 8rem;
  margin-top: 216px;
  margin-bottom: 30px;
  margin-left: 5%;
  padding: 0;
  border-radius: 30px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
  position: absolute;
}

.box-5 {
  background-color: #f970a4;
  width: 25%;
  height: 8rem;
  margin-top: 216px;
  margin-bottom: 30px;
  margin-left: 33%;
  padding: 0;
  border-radius: 30px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
  position: absolute;
}

.titulo {
  font-size: 40px;
  position: absolute;
  margin-left: 48%;
  margin-top: 1.5%;
  letter-spacing: 6px;
  font-weight: 500;
  color: #ffb0ce;
  width: 41%;
}

.circulo {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: #f970a4;
  position: absolute;
  display: inline-block;
  margin-left: 90.5%;
  margin-top: 3%;
}

.circulo-2 {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: #f2f2f2;
  position: absolute;
  display: inline-block;
  margin-left: 7%;
  margin-top: 6%;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
}
</style>