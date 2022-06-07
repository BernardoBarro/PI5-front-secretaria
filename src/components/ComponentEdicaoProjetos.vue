<template>
  <h1 class="titulo-edi-pro">EDIÇÃO PROJETOS</h1>
  <div class="circulo-edi-pro"></div>

  <div class="box-1-edi-pro">
    <div class="circulo-2-edi-pro"></div>
    <form method="get" action="">
      <input
        id="input-edi-proj"
        type="text"
        name="nome-projeto"
        placeholder=" Projeto"
        v-bind:value="nome"
      />
      <br />
      <input
        id="input-edi-proj"
        type="text"
        name="dataInicio"
        placeholder=" Data de Inicio"
        v-bind:value="dataInicio"
      /><br />
      <input
        id="input-edi-proj"
        type="text"
        name="status"
        placeholder=" Status"
        v-bind:value="status"
      /><br />
      <textarea
        id="textarea-edi-pro"
        name="descricao"
        placeholder=" Descrição"
        v-bind:value="descricao"
      ></textarea>
    </form>
  </div>

  <div class="container-botao-edi-pro">
    <router-link :to="{ name: 'cadastro-projetos' }">
      <input
        class="botao-editar-edi-pro"
        type="submit"
        name="editar"
        value="Editar"
      />
    </router-link>
    <router-link :to="{ name: 'projetos' }">
      <input
        class="botao-excluir-edi-pro"
        type="submit"
        name="excluir"
        value="Excluir"
      />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "../router";

export default defineComponent({
  name: "ComponentEdicaoProjetos",
  data() {
    return {
      data: {},
      nome: {},
      dataInicio: {},
      status: {},
      descricao: {},
    };
  },
  beforeMount() {
    this.getName();
  },
  methods: {
    async getName() {
      const res = await fetch(
        "http://localhost:8080/projeto/" + router.currentRoute.value.params.id
      );
      const data = await res.json();
      this.data = data;
      this.nome = data.nome;
      this.dataInicio = data.dataInicio;
      this.status = data.status;
      this.descricao = data.descricao;
    },
  },
});
</script>

<style scoped>
.container-botao-edi-pro {
  align-items: flex-end;
  margin-block-start: auto;
  margin-bottom: 24px;
}

.botao-excluir-edi-pro {
  background-color: #f970a4;
  border: none;
  border-radius: 20px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: -275px;
  padding: 8px 40px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
  width: 125px;
}

.botao-editar-edi-pro {
  background-color: #f970a4;
  border: none;
  border-radius: 20px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: -125px;
  padding: 8px 40px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
  width: 125px;
}

#input-edi-proj {
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
  padding-left: 11px;
  font-weight: 600;
}

#input-edi-proj::placeholder {
  color: #f970a4;
  font-weight: 600;
}

#textarea-edi-pro {
  margin-top: 14px;
  margin-left: 29px;
  width: 77%;
  padding-bottom: 122px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: #f2f2f2;
  border-radius: 3px;
  color: #f970a4;
  padding-left: 11px;
  padding-top: 10px;
  font-weight: 600;
  outline: none;
}

#textarea-edi-pro::placeholder {
  color: #f970a4;
  font-weight: 600;
}

.box-1-edi-pro {
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

.titulo-edi-pro {
  font-size: 40px;
  position: absolute;
  margin-left: 56%;
  margin-top: 1.5%;
  letter-spacing: 6px;
  font-weight: 500;
  color: #ffb0ce;
}

.circulo-edi-pro {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: #f970a4;
  position: absolute;
  display: inline-block;
  margin-left: 90.5%;
  margin-top: 3%;
}

.circulo-2-edi-pro {
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