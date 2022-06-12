<template>
  <img
    class="imagem-logo-erro"
    src="../assets/rotaractLogoCadastro.png"
    alt=""
  />

  <div class="box-1-erro">
    <div class="box-2-erro">
      <div class="container-bola-erro">
        <div class="bola-erro"></div>
        <div class="bola-erro"></div>
        <div class="bola-erro"></div>
        <div class="bola-erro"></div>
        <div class="bola-erro"></div>
        <div class="bola-erro"></div>
        <div class="bola-erro"></div>
        <div class="bola-erro"></div>
      </div>
      <h1 class="h1-erro">4</h1>
    </div>
    <div class="box-3-erro">
      <div class="container-bola-erro">
        <div class="bola-erro"></div>
        <div class="bola-erro"></div>
        <div class="bola-erro"></div>
        <div class="bola-erro"></div>
        <div class="bola-erro"></div>
        <div class="bola-erro"></div>
        <div class="bola-erro"></div>
        <div class="bola-erro"></div>
      </div>
      <h1 class="h1-erro">0</h1>
    </div>
    <div class="box-4-erro">
      <div class="container-bola-erro">
        <div class="bola-erro"></div>
        <div class="bola-erro"></div>
        <div class="bola-erro"></div>
        <div class="bola-erro"></div>
        <div class="bola-erro"></div>
        <div class="bola-erro"></div>
        <div class="bola-erro"></div>
        <div class="bola-erro"></div>
      </div>
      <h1 class="h1-erro">4</h1>
    </div>
    <p class="p-erro">
      Página não encontrada, por favor, verifique sua pesquisa ou entre em
      contato com a equipe de suporte.
    </p>
    <br />
    <br />
    <br />
    <p class="p-erro">Gratos pela compreenção!</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComponentErro",
});
</script>

<style scoped>
.container-bola-erro {
  margin-left: 18px;
  margin-top: 9px;
}

.bola-erro {
  border-radius: 10px;
  width: 14px;
  height: 14px;
  background-color: var(--principal-color);
  position: inherit;
  display: inline-block;
  margin-left: 6.5px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.15);
}

.p-erro {
  width: 29%;
  margin-left: 22%;
  margin-top: 10%;
  position: absolute;
  color: #c4c4c4;
}

.h1-erro {
  font-weight: 600;
  font-size: 93px;
  color: var(--terceira-color);
  margin-top: -12px;
  margin-left: -62px;
  text-align: right !important;
  width: 189px;
}

.imagem-logo-erro {
  position: absolute;
  margin-left: 84%;
  margin-top: 8%;
  width: 16%;
}

.box-1-erro {
  background-color: transparent;
  width: 78%;
  height: 25rem;
  margin-top: 133px;
  margin-bottom: 30px;
  padding: 0;
}

.box-2-erro {
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

.box-3-erro {
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

.box-4-erro {
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