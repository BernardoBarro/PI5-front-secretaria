import { createRouter, createWebHistory } from 'vue-router';
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import CadastroGeral from "./views/CadastroGeral.vue";
import CadastroMembros from "./views/CadastroMembros.vue";
import CadastroInstituicoes from "./views/CadastroInstituicoes.vue";
import CadastroReunioes from "./views/CadastroReunioes.vue";
import CadastroProjetos from "./views/CadastroProjetos.vue";
import CadastroPatrocinador from "./views/CadastroPatrocinador.vue";
import CadastroConvidado from "./views/CadastroConvidado.vue";
import Projetos from "./views/Projetos.vue";
import Instituicoes from "./views/Instituicoes.vue";
import Membros from "./views/Membros.vue";
import EdicaoProjeto from "./views/EdicaoProjeto.vue";
import EdicaoInstituicao from "./views/EdicaoInstituicao.vue";
import EdicaoMembro from "./views/EdicaoMembro.vue";
import EdicaoConvidado from "./views/EdicaoConvidado.vue";
import EdicaoReuniao from "./views/EdicaoReuniao.vue";
import EdicaoPatrocinador from "./views/EdicaoPatrocinador.vue";
import RecuperacaoSenha from "./views/RecuperacaoSenha.vue";
import Convidados from "./views/Convidados.vue";
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
        path: '/cadastro-patrocinador',
        name: 'cadastro-patrocinador',
        component: CadastroPatrocinador
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
        component: Perfil
    },

    {
        path: '/edicao-projeto/:id',
        name: 'edicao-projeto',
        component: EdicaoProjeto
    },

    {
        path: '/edicao-instituicao/:id',
        name: 'edicao-instituicao',
        component: EdicaoInstituicao
    },

    {
        path: '/edicao-membro/:ri',
        name: 'edicao-membro',
        component: EdicaoMembro
    },

    {
        path: '/edicao-convidado/:id',
        name: 'edicao-convidado',
        component: EdicaoConvidado
    },

    {
        path: '/edicao-patrocinador/:id',
        name: 'edicao-patrocinador',
        component: EdicaoPatrocinador
    },

    {
        path: '/edicao-reuniao/:id',
        name: 'edicao-reuniao',
        component: EdicaoReuniao
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



