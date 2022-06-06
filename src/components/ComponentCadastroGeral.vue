<template>
  <h1 class="titulo-cad-geral">CADASTROS</h1>
  <div class="circulo-cad-geral"></div>

  <img
    class="imagem-logo-cad-geral"
    src="../assets/rotaractLogoCadastro.png"
    alt=""
  />

  <div class="box-1-cad-geral">
    <router-link :to="{ name: 'cadastro-membros' }">
      <div class="box-2-cad-geral">
        <div class="circulo-2-cad-geral"></div>
        <h1 class="h1-cad-geral">MEMBRO</h1>
      </div>
    </router-link>
    <router-link :to="{ name: 'cadastro-projetos' }">
      <div class="box-3-cad-geral">
        <div class="circulo-2-cad-geral"></div>
        <h1 class="h1-cad-geral">PROJETO</h1>
      </div>
    </router-link>
    <router-link :to="{ name: 'cadastro-reunioes' }">
      <div class="box-4-cad-geral">
        <div class="circulo-2-cad-geral"></div>
        <h1 class="h1-cad-geral">REUNIÕES</h1>
      </div>
    </router-link>
    <router-link :to="{ name: 'cadastro-convidado' }">
      <div class="box-5-cad-geral">
        <div class="circulo-2-cad-geral"></div>
        <h1 class="h1-cad-geral">CONVIDADO</h1>
      </div>
    </router-link>
    <router-link :to="{ name: 'cadastro-instituicoes' }">
      <div class="box-6-cad-geral">
        <div class="circulo-2-cad-geral"></div>
        <h1 class="h1-cad-geral">INSTITUIÇÕES</h1>
      </div>
    </router-link>
    <router-link :to="{ name: 'cadastro-patrocinador' }">
      <div class="box-7-cad-geral">
        <div class="circulo-2-cad-geral"></div>
        <h1 class="h1-cad-geral">PATROCINADOR</h1>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComponentCadastroGeral",
});
</script>

<style>
.h1-cad-geral {
  font-weight: 600;
  font-size: 30px;
  color: white;
  margin-top: 65px;
  margin-left: 92px;
  text-align: right !important;
  width: 222px;
}

.imagem-logo-cad-geral {
  position: absolute;
  margin-left: 84%;
  margin-top: 8%;
  width: 16%;
}

.container-botao-cad-geral {
  align-items: flex-end;
  margin-block-start: auto;
  margin-bottom: 24px;
}

.botao-cad-geral {
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

.box-1-cad-geral {
  background-color: transparent;
  width: 78%;
  height: 25rem;
  margin-bottom: 30px;
  padding: 0;
  margin-top: 4%;
}

.box-2-cad-geral {
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
.box-3-cad-geral {
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

.box-4-cad-geral {
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

.box-5-cad-geral {
  background-color: #f970a4;
  width: 25%;
  height: 8rem;
  margin-top: 374px;
  margin-bottom: 30px;
  margin-left: 5%;
  padding: 0;
  border-radius: 30px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
  position: absolute;
}

.box-6-cad-geral {
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

.box-7-cad-geral {
  background-color: #f970a4;
  width: 25%;
  height: 8rem;
  margin-top: 374px;
  margin-bottom: 30px;
  margin-left: 33%;
  padding: 0;
  border-radius: 30px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
  position: absolute;
}

.titulo-cad-geral {
  font-size: 40px;
  position: absolute;
  margin-left: 69%;
  margin-top: 1.5%;
  letter-spacing: 6px;
  font-weight: 500;
  color: #ffb0ce;
  width: 41%;
}

.circulo-cad-geral {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: #f970a4;
  position: absolute;
  display: inline-block;
  margin-left: 90.5%;
  margin-top: 3%;
}

.circulo-2-cad-geral {
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