import { createRouter, createWebHistory } from 'vue-router';
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import CadastroGeral from "./views/CadastroGeral.vue";
import CadastroMembros from "./views/CadastroMembros.vue";
import CadastroInstituicoes from "./views/CadastroInstituicoes.vue";
import CadastroReunioes from "./views/CadastroReunioes.vue";
import CadastroProjetos from "./views/CadastroProjetos.vue";
import Projetos from "./views/Projetos.vue";
import Instituicoes from "./views/Instituicoes.vue";
import Membros from "./views/Membros.vue";
import DetalhesProjeto from "./views/DetalhesProjeto.vue";
import DetalhesInstituicao from "./views/DetalhesInstituicao.vue";
import Perfil from "./views/Perfil.vue";
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
        path: '/projetos',
        name: 'projetos',
        component: Projetos
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
        path: '/:pathMatch(.*)*',
        component: Erro
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;


