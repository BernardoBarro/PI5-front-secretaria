<template>
  <h1 class="titulo">PROJETOS</h1>
  <div class="circulo"></div>

  <div class="box">
    <div class="circulo-2"></div>
    <form method="get" action="">
      <label class="label-nome">Nome</label>
      <i class="fa-solid fa-arrow-up"></i>
      <i class="fa-solid fa-chevron-right"></i>
      <input
        type="text"
        name="projeto"
        placeholder=" Projeto 1"
        disabled
      /><br />
      <a href="#/detalhes-projetos">
        <i class="fa-solid fa-chevron-right"></i>
      </a>
      <input
        type="text"
        name="projeto"
        placeholder=" Projeto 2"
        disabled
      /><br />
      <i class="fa-solid fa-chevron-right"></i>
      <input
        type="text"
        name="projeto"
        placeholder=" Projeto 3"
        disabled
      /><br />
      <i class="fa-solid fa-chevron-right"></i>
      <input
        type="text"
        name="projeto"
        placeholder=" Projeto 4"
        disabled
      /><br />
      <i class="fa-solid fa-chevron-right"></i>
      <input
        type="text"
        name="projeto"
        placeholder=" Projeto 5"
        disabled
      /><br />
      <i class="fa-solid fa-chevron-right"></i>
      <input
        type="text"
        name="projeto"
        placeholder=" Projeto 6"
        disabled
      /><br />
    </form>
  </div>

  <div class="container-botao">
    <router-link :to="{ name: 'cadastro-projetos' }">
      <input class="botao" type="submit" name="novo" value="Novo" />
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComponentProjeto",
});
</script>

<style>
main {
  background-color: #f2f2f2;
}

.fa-arrow-up::before {
  content: "\f062";
  position: absolute;
  margin-left: 7.5%;
  margin-top: -3.9%;
  color: #f970a4;
}

.fa-chevron-right::before {
  content: "\f054";
  position: absolute;
  margin-top: -1%;
  margin-left: 60%;
  color: #f970a4;
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

input[type="text"] {
  width: 77%;
  height: 40px;
  margin-top: 12px;
  outline: none;
  margin-left: 29px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: #f2f2f2;
  border-radius: 3px;
}

input[type="text"]::placeholder {
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
}

.label-nome {
  position: absolute;
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
  margin-left: 3%;
  margin-top: -1.5%;
}

.box {
  background-color: white;
  width: 78%;
  height: 25rem;
  margin-top: 133px;
  margin-bottom: 30px;
  padding: 0;
  border-radius: 38px 5px 5px 5px;
  text-align: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}

form {
  margin-top: 55px;
}

.titulo {
  font-size: 40px;
  position: absolute;
  margin-left: 48%;
  margin-top: 1.5%;
  letter-spacing: 6px;
  font-weight: 500;
  color: #ffb0ce;
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
  margin-left: -37%;
  margin-top: 2%;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
}
</style>