<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>

    <img class="imagem-logo" src="../assets/rotaractLogoCadastro.png" alt="" />

    <div class="box-1">
      <div class="box-2">
        <div class="container-bola">
          <div class="bola"></div>
          <div class="bola"></div>
          <div class="bola"></div>
          <div class="bola"></div>
          <div class="bola"></div>
          <div class="bola"></div>
          <div class="bola"></div>
          <div class="bola"></div>
        </div>
        <h1>4</h1>
      </div>
      <div class="box-3">
        <div class="container-bola">
          <div class="bola"></div>
          <div class="bola"></div>
          <div class="bola"></div>
          <div class="bola"></div>
          <div class="bola"></div>
          <div class="bola"></div>
          <div class="bola"></div>
          <div class="bola"></div>
        </div>
        <h1>0</h1>
      </div>
      <div class="box-4">
        <div class="container-bola">
          <div class="bola"></div>
          <div class="bola"></div>
          <div class="bola"></div>
          <div class="bola"></div>
          <div class="bola"></div>
          <div class="bola"></div>
          <div class="bola"></div>
          <div class="bola"></div>
        </div>
        <h1>4</h1>
      </div>
      <p>
        Página não encontrada, por favor, verifique sua pesquisa ou entre em
        contato com a equipe de suporte.
      </p>
      <br />
      <br />
      <br />
      <p>Gratos pela compreenção!</p>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErroVue",
});
</script>

<style>
main {
  background-color: #f2f2f2;
  height: 625px;
}

.container-bola {
  margin-left: 18px;
  margin-top: 9px;
}

.bola {
  border-radius: 10px;
  width: 14px;
  height: 14px;
  background-color: #f2f2f2;
  position: inherit;
  display: inline-block;
  margin-left: 6.5px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.15);
}

p {
  width: 29%;
  margin-left: 22%;
  margin-top: 10%;
  position: absolute;
  color: #c4c4c4;
}

h1 {
  font-weight: 600;
  font-size: 93px;
  color: #f970a4;
  margin-top: -12px;
  margin-left: -62px;
  text-align: right !important;
  width: 189px;
}

.imagem-logo {
  position: absolute;
  margin-left: 84%;
  margin-top: 8%;
  width: 16%;
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
  background-color: #ffffff;
  width: 15%;
  height: 11rem;
  margin-top: -98px;
  margin-bottom: 30px;
  padding: 0;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
  position: absolute;
  margin-left: -4%;
}

.box-3 {
  background-color: #ffffff;
  width: 15%;
  height: 11rem;
  margin-top: 92px;
  margin-bottom: 30px;
  padding: 0;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
  position: absolute;
  margin-left: -4%;
}

.box-4 {
  background-color: #ffffff;
  width: 15%;
  height: 11rem;
  margin-top: 282px;
  margin-bottom: 30px;
  padding: 0;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
  position: absolute;
  margin-left: -4%;
}
</style>