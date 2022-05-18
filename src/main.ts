import { createApp } from 'vue'
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
import RecuperacaoSenha from "./views/RecuperacaoSenha.vue";
import CadastroConvidados from "./views/CadastroConvidados.vue";
import Erro from "./views/Erro.vue";

import '@fortawesome/fontawesome-free/css/all.css'


createApp(Membros)
    .mount('#app')
