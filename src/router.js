import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/tutorials",
      name: "tutorials",
      component: () => import("./components/TutorialsList")
    },
    {
      path: "/tutorials/:id",
      name: "tutorial-details",
      component: () => import("./components/Tutorial")
    },
    {                               //rotas contatos
      path: "/add-contato",    
      name: "addContato",
      component: () => import("./components/AddContato")
    },
    {
      path: "/lista_contato",
      name: "lista_contatos",
      component: () => import("./components/ContatoList")
    },
    {
      path: "/contato_detalhes/:id",
      name: "contato_detalhes",
      component: () => import("./components/Contato")
    },
    {                               //rotas clientes
      path: "/add-cliente",       
      name: "addCliente",
      component: () => import("./components/AddCliente")
    },
    {
      path: "/lista_cliente",
      name: "lista de clientes",
      component: () => import("./components/ClienteList")
    },
    {
      path: "/cliente_detalhes/:id",
      name: "cliente-detalhes",
      component: () => import("./components/Cliente")
    },
    {                                   //rotas endereco
      path: "/add-endereco",
      name: "addEndereco",
      component: () => import("./components/AddEndereco")
    },
    {
      path: "/lista_enderecos",
      nome: "lista-enderecos",
      component: () => import("./components/EnderecoList")
    },
    {
      path: "/endereco_detalhes/:id",
      name: "endereco-detalhes",
      component: () => import("./components/Endereco")
    },
    {                                   //rotas inquilino
      path: "/add-inquilino",
      name: "addInquilino",
      component: () => import("./components/AddInquilino")
    },
    {
      path: "/lista_inquilinos",
      name: "lista-inquilinos",
      component: () => import("./components/InquilinoList")
    },
    {
      path: "/inquilino_detalhes/:id",
      name: "inquilino-detalhes",
      component: () => import("./components/Inquilino")
    }
  ]
});