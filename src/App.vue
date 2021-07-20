<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">CrudMuradinho</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/tutorials" class="nav-link">Tutorials. (tutoriais)</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add-contato" class="nav-link">Add-Contato</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add-cliente" class="nav-link">Add-Cliente</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add-endereco" class="nav-link">Add-Endereco</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add-inquilino" class="nav-link">Add-Inquilino</router-link>
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
  name: "app"
};
</script>