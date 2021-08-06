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
            @click="searchInquilino"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Lista de inquilinos</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(inquilino, index) in inquilinos"
          :key="index"
          @click="setActiveInquilino(inquilino, index)"
        >
          {{ inquilino.cpfInquilino }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllInquilinos">
        Remover Inquilinos
      </button>
      <button class="m-3 btn btn-sm btn-success" @click="adicionarInquilinos">
        Adicionar Inquilinos
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentInquilino">
        <h4>Inquilino</h4>
        <div>
          <label><strong>Nome:</strong></label>
          {{ currentInquilino.nomeInquilino }}
        </div>
        <div>
          <label><strong>CPF:</strong></label>
          {{ currentInquilino.cpfInquilino }}
        </div>
        <div>
          <label><strong>Data de nascimento:</strong></label>
          {{ currentInquilino.dataNascimentoInquilino }}
        </div>

        <a
          style="color: blue"
          class="badge badge-warning"
          :href="'/inquilino_detalhes/' + currentInquilino.id"
        >
          Editar
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Inquilino...</p>
      </div>
    </div>
  </div>
</template>

<script>
import InquilinoDataService from "../services/InquilinoDataService";

export default {
  /* eslint-disable */
  name: "inquilinos-list",
  data() {
    return {
      inquilinos: [],
      currentInquilino: null,
      currentIndex: -1,
      search: "",
    };
  },
  methods: {
    retrieveInquilinos() {
      InquilinoDataService.getAll()
        .then((response) => {
          this.inquilinos = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveInquilinos();
      this.currentInquilino = null;
      this.currentIndex = -1;
    },

    setActiveInquilino(inquilino, index) {
      this.currentInquilino = inquilino;
      this.currentIndex = index;
    },

    removeAllInquilinos() {
      InquilinoDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchInquilino() {
      InquilinoDataService.findBySearch(this.search)
        .then((response) => {
          this.inquilinos = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    adicionarInquilinos() {
      this.$router.push("/add-inquilino");
    },
  },
  mounted() {
    this.retrieveInquilinos();
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