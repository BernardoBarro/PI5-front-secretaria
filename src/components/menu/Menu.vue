<template>
  <div class="container">
    <div class="box">
      <div class="box-container">
        <div id="icon-perfil" class="button">
          <a href="#/perfil">
            <i
              class="fa-solid fa-circle-user fa-2xl"
              style="color: #f970a4"
            ></i>
          </a>
        </div>
        <button id="icon-home" class="button">
          <a href="/">
            <i class="fa-solid fa-house fa-lg" style="color: #f970a4"></i>
          </a>
        </button>
        <button id="icon-projetos" class="button">
          <a href="#/projetos">
            <i
              class="fa-solid fa-folder-closed fa-lg"
              style="color: #f970a4"
            ></i>
          </a>
        </button>
        <button id="icon-instituicoes" class="button">
          <a href="#/instituicoes">
            <i class="fa-solid fa-building fa-lg" style="color: #f970a4"></i>
          </a>
        </button>
        <button id="icon-membros" class="button">
          <a href="#/membros">
            <i
              class="fa-solid fa-address-card fa-lg"
              style="color: #f970a4"
            ></i>
          </a>
        </button>
        <button id="icon-cadastros" class="button">
          <a href="#/cadastro-geral">
            <i class="fa-solid fa-clipboard fa-lg" style="color: #f970a4"></i>
          </a>
        </button>

        <button id="icon-sair" class="button">
          <span class="icon-sair-click">
            <a href="#/login">
              <i
                class="fa-solid fa-arrow-right-from-bracket"
                style="color: #f970a4"
              ></i>
            </a>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuBox",
});
</script>

<style scoped>
.box {
  background-color: white;
  width: 23%;
  height: 35rem;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 10%;
}
.container {
  display: flex;
  margin: 0;
}
.box-container {
  display: flex;
  justify-content: center;
}
#icon-perfil {
  margin-top: 3%;
  position: absolute;
  border: none;
  background: none;
}
#icon-home {
  margin-top: 23%;
  position: absolute;
  background-color: #f2f2f2;
  border-radius: 9px;
  border-style: solid;
  border-width: 1px;
  border-color: #f970a4;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#icon-projetos {
  margin-top: 43%;
  position: absolute;
  background-color: #f2f2f2;
  border-radius: 9px;
  border-style: solid;
  border-width: 1px;
  border-color: #f970a4;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#icon-instituicoes {
  margin-top: 63%;
  position: absolute;
  background-color: #f2f2f2;
  border-radius: 9px;
  border-style: solid;
  border-width: 1px;
  border-color: #f970a4;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#icon-membros {
  margin-top: 83%;
  position: absolute;
  background-color: #f2f2f2;
  border-radius: 9px;
  border-style: solid;
  border-width: 1px;
  border-color: #f970a4;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#icon-cadastros {
  margin-top: 103%;
  position: absolute;
  background-color: #f2f2f2;
  border-radius: 9px;
  border-style: solid;
  border-width: 1px;
  border-color: #f970a4;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#icon-sair {
  margin-top: 177%;
  position: absolute;
  background-color: #f2f2f2;
  border-radius: 9px;
  border-style: solid;
  border-width: 1px;
  border-color: #f970a4;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
