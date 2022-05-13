<script>
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import CadastroMembros from "./views/CadastroMembros.vue";
import CadastroInstituicoes from "./views/CadastroInstituicoes.vue";
import CadastroReunioes from "./views/CadastroReunioes.vue";
import CadastroProjetos from "./views/CadastroProjetos.vue";
import CadastroGeral from "./views/CadastroGeral.vue";
import Projetos from "./views/Projetos.vue";
import Instituicoes from "./views/Instituicoes.vue";
import Membros from "./views/Membros.vue";
import DetalhesProjeto from "./views/DetalhesProjeto.vue";
import DetalhesInstituicao from "./views/DetalhesInstituicao.vue";
import Perfil from "./views/Perfil.vue";
import Erro from "./views/Erro.vue";

const routes = {
  "/": Home, //feito
  "/login": Login, //feito
  "/cadastro-geral": CadastroGeral, //feito
  "/cadastro-instituicoes": CadastroInstituicoes, //feito
  "/cadastro-membros": CadastroMembros, //feito
  "/cadastro-reunioes": CadastroReunioes, //feito
  "/cadastro-projetos": CadastroProjetos, //feito
  "/projetos": Projetos, //feito
  "/instituicoes": Instituicoes, //feito
  "/membros": Membros, //feito
  "/detalhes-projeto": DetalhesProjeto, //feito
  "/detalhes-instituicao": DetalhesInstituicao, //feito
  "/perfil": Perfil, //feito
  "/erro": Erro, //feito
};

export default {
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || Erro;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
};
</script>

<template>
  <component :is="currentView" />
</template>
