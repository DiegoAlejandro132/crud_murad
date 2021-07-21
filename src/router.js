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
    {
      path: "/add-contato",
      name: "addContato",
      component: () => import("./components/AddContato")
    },
    {
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
      path: "/cliente-detalhes",
      name: "cliente-detalhes",
      component: () => import("./components/Cliente")
    },
    {
      path: "/add-endereco",
      name: "addEndereco",
      component: () => import("./components/AddEndereco")
    },
    {
      path: "/add-inquilino",
      name: "addInquilino",
      component: () => import("./components/AddInquilino")
    }
  ]
});