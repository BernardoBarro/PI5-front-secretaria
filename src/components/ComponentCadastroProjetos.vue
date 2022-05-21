<template>
  <h1 class="titulo-cad-proj">CADASTRO DE PROJETOS</h1>
  <div class="circulo-cad-proj"></div>

  <div class="box-1-cad-proj">
    <div class="circulo-2-cad-proj"></div>
    <form class="form-cad-proj" method="get" action="">
      <input
        id="input-projeto-cad-proj"
        type="text"
        name="nome-projeto"
        placeholder=" Nome do Projeto"
      /><br />
      <input
        id="input-patrocinador-cad-proj"
        type="text"
        name="nome-patrocinador"
        placeholder=" Nome do Patrocinador"
      /><br />
      <input
        class="input-valor-cad-proj"
        type="number"
        name="nome-patrocinador"
        placeholder=" R$ 0.00"
      /><br />
      <select class="instituicoes-cad-proj" name="instituicoes">
        <option value="instituisao-1">Instituição 1</option>
        <option value="instituisao-2">Instituição 2</option>
      </select>
      <br />
      <select class="membros-cad-proj" name="membros">
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

  <div class="container-botao-cad-proj">
    <router-link :to="{ name: 'cadastro-geral' }">
      <input
        class="botao-cad-proj"
        type="submit"
        name="salvar"
        value="Salvar"
      />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ComponentCadastroProjetos",
});
</script>

<style>
.container-botao-cad-proj {
  align-items: flex-end;
  margin-block-start: auto;
  margin-bottom: 24px;
}
.botao-cad-proj {
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
.instituicoes-cad-proj {
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
.membros-cad-proj {
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
#input-projeto-cad-proj {
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
#input-patrocinador-cad-proj {
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
.input-valor-cad-proj {
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
.input-projeto-cad-proj::placeholder {
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
  padding: 5px;
}
.input-patrocinador-cad-proj::placeholder {
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
  padding: 5px;
}
.input-valor-cad-proj::placeholder {
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
.box-1-cad-proj {
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
.form-cad-proj {
  margin-top: 33px;
}

.titulo-cad-proj {
  font-size: 40px;
  position: absolute;
  margin-left: 46%;
  margin-top: 1.5%;
  letter-spacing: 6px;
  font-weight: 500;
  color: #ffb0ce;
}
.circulo-cad-proj {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: #f970a4;
  position: absolute;
  display: inline-block;
  margin-left: 90.5%;
  margin-top: 3%;
}
.circulo-2-cad-proj {
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