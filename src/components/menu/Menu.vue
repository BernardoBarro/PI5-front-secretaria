<template>
  <div class="container">
    <div class="boxMenu">
      <div class="box-container">
        <div id="icon-perfil" class="button">
          <router-link :to="{ name: 'perfil' }">
            <i
              class="fa-solid fa-circle-user fa-2xl"
              style="color: #f970a4"
            ></i>
          </router-link>
        </div>
        <button id="icon-home" class="button">
          <router-link :to="{ name: 'home' }">
            <i class="fa-solid fa-house fa-lg" style="color: #f970a4"></i>
          </router-link>
        </button>
        <button id="icon-projetos" class="button">
          <router-link :to="{ name: 'projetos' }">
            <i
              class="fa-solid fa-folder-closed fa-lg"
              style="color: #f970a4"
            ></i>
          </router-link>
        </button>
        <button id="icon-instituicoes" class="button">
          <router-link :to="{ name: 'instituicoes' }">
            <i class="fa-solid fa-building fa-lg" style="color: #f970a4"></i>
          </router-link>
        </button>
        <button id="icon-membros" class="button">
          <router-link :to="{ name: 'membros' }">
            <i
              class="fa-solid fa-address-card fa-lg"
              style="color: #f970a4"
            ></i>
          </router-link>
        </button>
        <button id="icon-convidados" class="button">
          <router-link :to="{ name: 'convidados' }">
            <i class="fa-solid fa-people-pulling" style="color: #f970a4"></i>
          </router-link>
        </button>

        <button id="icon-patrocinador" class="button">
          <router-link :to="{ name: 'patrocinador' }">
            <i
              class="fa-solid fa-hand-holding-dollar"
              style="color: #f970a4"
            ></i>
          </router-link>
        </button>

        <button id="icon-cadastros" class="button">
          <router-link :to="{ name: 'cadastro-geral' }">
            <i class="fa-solid fa-clipboard fa-lg" style="color: #f970a4"></i>
          </router-link>
        </button>

        <button id="icon-sair" class="button">
          <span class="icon-sair-click">
            <router-link :to="{ name: 'login' }">
              <i
                class="fa-solid fa-arrow-right-from-bracket"
                style="color: #f970a4"
              ></i>
            </router-link>
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
.boxMenu {
  background-color: white;
  width: 23%;
  height: 35rem;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 10%;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
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
#icon-convidados {
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
#icon-patrocinador {
  margin-top: 123%;
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
  margin-top: 143%;
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
