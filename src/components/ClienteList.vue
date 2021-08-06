<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Insira o CPF ou nome"
          v-model="search"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchCliente"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Lista de clientes</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(cliente, index) in clientes"
          :key="index"
          @click="setActiveCliente(cliente, index)"
        >
          {{ cliente.cpfCliente }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllClientes">
        Remover clientes
      </button>
      <button class="m-3 btn btn-sm btn-success" @click="adicionaClientes">
        Adicionar clientes
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentCliente">
        <h4>Cliente</h4>
        <div>
          <label><strong>Nome:</strong></label> {{ currentCliente.nomeCliente }}
        </div>
        <div>
          <label><strong>CPF:</strong></label> {{ currentCliente.cpfCliente }}
        </div>
        <div>
          <label><strong>Data de nascimento:</strong></label>
          {{ currentCliente.dataNascimentoCliente }}
        </div>

        <a
          style="color: blue"
          class="badge badge-warning"
          :href="'/cliente_detalhes/' + currentCliente.id"
        >
          Editar
        </a>
      </div>
      <div v-else>
        <br />
        <p>Selecione um cliente</p>
      </div>
    </div>
  </div>
</template>

<script>
import ClienteDataService from "../services/ClienteDataService";

export default {
  /* eslint-disable */
  name: "clientes-list",
  data() {
    return {
      clientes: [],
      currentCliente: null,
      currentIndex: -1,
      search: "",
    };
  },
  methods: {
    retrieveClientes() {
      ClienteDataService.getAll()
        .then((response) => {
          this.clientes = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveClientes();
      this.currentCliente = null;
      this.currentIndex = -1;
    },

    setActiveCliente(cliente, index) {
      this.currentCliente = cliente;
      this.currentIndex = index;
      console.log(cliente);
    },

    removeAllClientes() {
      ClienteDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchCliente() {
      ClienteDataService.findBySearch(this.search)
        .then((response) => {
          this.clientes = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    adicionaClientes() {
      this.$router.push("/add-cliente");
    },
  },
  mounted() {
    this.retrieveClientes();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>