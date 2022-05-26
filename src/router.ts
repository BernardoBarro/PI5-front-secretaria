import { createRouter, createWebHistory } from 'vue-router';
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import CadastroGeral from "./views/CadastroGeral.vue"; //feito
import CadastroMembros from "./views/CadastroMembros.vue";
import CadastroInstituicoes from "./views/CadastroInstituicoes.vue";
import CadastroReunioes from "./views/CadastroReunioes.vue"; //feito
import CadastroProjetos from "./views/CadastroProjetos.vue"; //feito
import Projetos from "./views/Projetos.vue";
import Instituicoes from "./views/Instituicoes.vue";
import Membros from "./views/Membros.vue";
import DetalhesProjeto from "./views/DetalhesProjeto.vue";
import DetalhesInstituicao from "./views/DetalhesInstituicao.vue";
import CadastroConvidado from "./views/CadastroConvidado.vue"; //feito
import RecuperacaoSenha from "./views/RecuperacaoSenha.vue"; //feito
import Convidados from "./views/Convidados.vue"; //feito
import Perfil from "./views/Perfil.vue";
import EdicaoPerfil from "./views/EdicaoPerfil.vue";
import Patrocinador from "./views/Patrocinador.vue";
import Erro from "./views/Erro.vue";


const routes = [

    {
        path: '/',
        name: 'login',
        component: Login
    },

    {
        path: '/home',
        name: 'home',
        component: Home
    },


    {
        path: '/cadastro-geral',
        name: 'cadastro-geral',
        component: CadastroGeral
    },

    {
        path: '/cadastro-convidado',
        name: 'cadastro-convidado',
        component: CadastroConvidado
    },

    {
        path: '/cadastro-membros',
        name: 'cadastro-membros',
        component: CadastroMembros
    },

    {
        path: '/cadastro-instituicoes',
        name: 'cadastro-instituicoes',
        component: CadastroInstituicoes
    },

    {
        path: '/cadastro-reunioes',
        name: 'cadastro-reunioes',
        component: CadastroReunioes
    },

    {
        path: '/cadastro-projetos',
        name: 'cadastro-projetos',
        component: CadastroProjetos
    },

    {
        path: '/recuperacao-senha',
        name: 'recuperacao-senha',
        component: RecuperacaoSenha
    },

    {
        path: '/projetos',
        name: 'projetos',
        component: Projetos
    },

    {
        path: '/convidados',
        name: 'convidados',
        component: Convidados
    },

    {
        path: '/instituicoes',
        name: 'instituicoes',
        component: Instituicoes
    },

    {
        path: '/membros',
        name: 'membros',
        component: Membros
    },

    {
        path: '/perfil',
        name: 'perfil',
        component: Perfil  //feito (editar ainda não tem tela)
    },

    {
        path: '/detalhes-projeto',
        name: 'detalhes-projeto',
        component: DetalhesProjeto
    },

    {
        path: '/detalhes-instituicao',
        name: 'detalhes-instituicao',
        component: DetalhesInstituicao
    },
    {
        path: '/edicao-perfil',
        name: 'edicao-perfil',
        component: EdicaoPerfil
    },
    {
        path: '/patrocinador',
        name: 'patrocinador',
        component: Patrocinador
    },

    {
        path: '/:pathMatch(.*)*',
        component: Erro
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;


