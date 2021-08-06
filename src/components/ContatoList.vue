<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by title"
          v-model="search"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchContato"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Lista de contatos</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(contato, index) in contatos"
          :key="index"
          @click="setActiveContato(contato, index)"
        >
          {{ contato.nomeContato }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllContatos">
        Remover Contatos
      </button>
      <button class="m-3 btn btn-sm btn-success" @click="adicionarContatos">
        Adicionar Contato
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentContato">
        <h4>Contato</h4>
        <div>
          <label><strong>Nome:</strong></label> {{ currentContato.nomeContato }}
        </div>
        <div>
          <label><strong>Tipo de contato:</strong></label>
          {{ currentContato.tipo }}
        </div>
        <div>
          <label><strong>Contato:</strong></label> {{ currentContato.contato }}
        </div>

        <a
          style="color: blue"
          class="badge badge-warning"
          :href="'/contato_detalhes/' + currentContato.id"
        >
          Editar
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Contato...</p>
      </div>
    </div>
  </div>
</template>

<script>
import ContatoDataService from "../services/ContatoDataService";

export default {
  /* eslint-disable */
  name: "contatos-list",
  data() {
    return {
      contatos: [],
      currentContato: null,
      currentIndex: -1,
      search: "",
    };
  },
  methods: {
    retrieveContatos() {
      ContatoDataService.getAll()
        .then((response) => {
          this.contatos = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveContatos();
      this.currentContato = null;
      this.currentIndex = -1;
    },

    setActiveContato(contato, index) {
      this.currentContato = contato;
      this.currentIndex = index;
    },

    removeAllContatos() {
      ContatoDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchContato() {
      ContatoDataService.findByTitle(this.search)
        .then((response) => {
          this.contatos = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    adicionarContatos() {
      this.$router.push("/add-contato");
    },
  },
  mounted() {
    this.retrieveContatos();
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