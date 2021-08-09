<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <span to="/PaginaPrincipal" class="navbar-brand">CrudMuradinho</span>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/lista_cliente" class="nav-link"
            >Lista Clientes</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/lista_contato" class="nav-link"
            >Lista Contato</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/lista_enderecos" class="nav-link"
            >Lista Endereços</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/lista_inquilinos" class="nav-link"
            >Lista Inquilinos</router-link
          >
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>