<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Insira um nome"
          v-model="search"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchEndereco"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Lista de endereços</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(endereco, index) in enderecos"
          :key="index"
          @click="setActiveEndereco(endereco, index)"
        >
          {{ endereco.nomeEndereco }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllEnderecos">
        Remover Endereços
      </button>
      <button class="m-3 btn btn-sm btn-success" @click="adicionarEnderecos">
        Adicionar Endereço
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentEndereco">
        <h4>Endereco</h4>
        <div>
          <label><strong>Nome:</strong></label>
          {{ currentEndereco.nomeEndereco }}
        </div>
        <div>
          <label><strong>CEP:</strong></label> {{ currentEndereco.cep }}
        </div>
        <div>
          <label><strong>Logradouro:</strong></label>
          {{ currentEndereco.logradouro }}
        </div>
        <div>
          <label><strong>Numero:</strong></label> {{ currentEndereco.numero }}
        </div>
        <div>
          <label><strong>Bairro:</strong></label> {{ currentEndereco.bairro }}
        </div>
        <div>
          <label><strong>Cidade:</strong></label> {{ currentEndereco.cidade }}
        </div>
        <div>
          <label><strong>Estado:</strong></label> {{ currentEndereco.estado }}
        </div>
        <div>
          <label><strong>Complemento:</strong></label>
          {{ currentEndereco.complemento }}
        </div>

        <a
          style="color: blue"
          class="badge badge-warning"
          :href="'/endereco_detalhes/' + currentEndereco.id"
        >
          Editar
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Endereco...</p>
      </div>
    </div>
  </div>
</template>

<script>
import EnderecoDataService from "../services/EnderecoDataService";

export default {
  /* eslint-disable */
  name: "enderecos-list",
  data() {
    return {
      enderecos: [],
      currentEndereco: null,
      currentIndex: -1,
      search: "",
    };
  },
  methods: {
    retrieveEnderecos() {
      EnderecoDataService.getAll()
        .then((response) => {
          this.enderecos = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveEnderecos();
      this.currentEndereco = null;
      this.currentIndex = -1;
    },

    setActiveEndereco(endereco, index) {
      this.currentEndereco = endereco;
      this.currentIndex = index;
    },

    removeAllEnderecos() {
      EnderecoDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchEndereco() {
      EnderecoDataService.findByNome(this.search)
        .then((response) => {
          this.enderecos = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    adicionarEnderecos() {
      this.$router.push("/add-endereco");
    },
  },
  mounted() {
    this.retrieveEnderecos();
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