import { createRouter, createWebHistory } from 'vue-router';
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
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
        name: 'home',
        component: Home  //feito
    },

    {
        path: '/login',
        name: 'login',
        component: Login  //feito
    },

    {
        path: '/cadastro-geral',
        name: 'cadastro-geral',
        component: CadastroGeral  //feito
    },

    {
        path: '/cadastro-membros',
        name: 'cadastro-membros',
        component: CadastroMembros  //feito
    },

    {
        path: '/cadastro-instituicoes',
        name: 'cadastro-instituicoes',
        component: CadastroInstituicoes  //feito
    },

    {
        path: '/cadastro-reunioes',
        name: 'cadastro-reunioes',
        component: CadastroReunioes  //feito
    },

    {
        path: '/cadastro-projetos',
        name: 'cadastro-projetos',
        component: CadastroProjetos  //feito
    },

    {
        path: '/projetos',
        name: 'projetos',
        component: Projetos  //feito
    },

    {
        path: '/instituicoes',
        name: 'instituicoes',
        component: Instituicoes  //feito
    },

    {
        path: '/membros',
        name: 'membros',
        component: Membros  //feito
    },

    {
        path: '/perfil',
        name: 'perfil',
        component: Perfil  //feito (editar ainda não tem tela)
    },

    {
        path: '/detalhes-projeto',
        name: 'detalhes-projeto',
        component: DetalhesProjeto  //feito
    },

    {
        path: '/detalhes-instituicao',
        name: 'detalhes-instituicao',
        component: DetalhesInstituicao  //feito
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


