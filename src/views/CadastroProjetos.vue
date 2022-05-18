<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <h1 class="titulo">CADASTRO DE PROJETOS</h1>
    <div class="circulo"></div>

    <div class="box-1">
      <div class="circulo-2"></div>
      <form method="get" action="">
        <input
          class="input-projeto"
          type="text"
          name="nome-projeto"
          placeholder=" Nome do Projeto"
        /><br />
        <input
          class="input-patrocinador"
          type="text"
          name="nome-patrocinador"
          placeholder=" Nome do Patrocinador"
        /><br />
        <input
          class="input-valor"
          type="number"
          name="nome-patrocinador"
          placeholder=" R$ 0.00"
        /><br />
        <select class="instituicoes" name="instituicoes">
          <option value="instituisao-1">Instituição 1</option>
          <option value="instituisao-2">Instituição 2</option>
        </select>
        <br />
        <select class="membros" name="membros">
          <option value="protocolo">Protocolo</option>
          <option value="comunidades">Comunidades</option>
          <option value="internos">Internos</option>
          <option value="imagem-publica">Imagem Pública</option>
          <option value="financas">Finanças</option>
          <option value="internacionais">Internacionais</option>
        </select>
        <textarea
          id="textarea"
          name="descricao"
          placeholder=" Descrição"
        ></textarea>
      </form>
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
  name: "CadastroProjetos",
  components: {
    MenuBox,
  },
});
</script>

<style>
main {
  background-color: #f2f2f2;
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

.instituicoes {
  width: 60%;
  height: 40px;
  outline: none;
  margin-left: -28.9%;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: #f2f2f2;
  border-radius: 3px;
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
  position: absolute;
  margin-top: -1%;
}

.membros {
  width: 77%;
  height: 40px;
  margin-top: 12px;
  outline: none;
  margin-left: 29px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: #f2f2f2;
  border-radius: 3px;
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
}

#textarea {
  margin-top: 14px;
  margin-left: 29px;
  width: 77%;
  padding-bottom: 80px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: #f2f2f2;
  border-radius: 3px;
  color: #f970a4;
}

.input-projeto {
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
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

.input-patrocinador {
  color: #f970a4;
  width: 57%;
  height: 40px;
  margin-top: 12px;
  outline: none;
  margin-left: -17.3%;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: #f2f2f2;
  border-radius: 3px;
}

.input-valor {
  color: #f970a4;
  width: 15%;
  height: 40px;
  margin-top: -40px;
  outline: none;
  margin-left: 16.1%;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: #f2f2f2;
  border-radius: 3px;
  position: absolute;
}

.input-projeto::placeholder {
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
  padding: 5px;
}

.input-patrocinador::placeholder {
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
  padding: 5px;
}

.input-valor::placeholder {
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
  padding: 5px;
}

#textarea::placeholder {
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
  padding: 5px;
}

.box-1 {
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
  margin-top: 33px;
}

.inputs {
  margin-top: 3px;
}

.titulo {
  font-size: 40px;
  position: absolute;
  margin-left: 46%;
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