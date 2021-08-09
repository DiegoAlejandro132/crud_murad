
<template>
  <div v-if="currentEndereco" class="edit-form">
    <h4>Endereço</h4>
    <form>
      <div class="form-group">
        <label for="nomeEndereco">nome do responsavel do endereco</label>
        <input
          type="text"
          class="form-control"
          id="nomeEndereco"
          v-model="currentEndereco.nomeEndereco"
        />
      </div>
      <div class="form-group">
        <label for="cep">CEP</label>
        <input
          type="text"
          class="form-control"
          id="cep"
          v-model="currentEndereco.cep"
        />
        <div class="form-group">
          <label for="logradouro">Logradouro</label>
          <input
            type="text"
            class="form-control"
            id="logradouro"
            v-model="currentEndereco.logradouro"
          />
        </div>
        <div class="form-group">
          <label for="numero">Numero</label>
          <input
            type="text"
            class="form-control"
            id="numero"
            v-model="currentEndereco.numero"
          />
        </div>
        <div class="form-group">
          <label for="bairro">Bairro</label>
          <input
            type="text"
            class="form-control"
            id="bairro"
            v-model="currentEndereco.bairro"
          />
        </div>
        <div class="form-group">
          <label for="cidade">Cidade</label>
          <input
            type="text"
            class="form-control"
            id="cidade"
            v-model="currentEndereco.cidade"
          />
        </div>
        <div class="form-group">
          <label for="estado">Estado</label>
          <input
            type="text"
            class="form-control"
            id="estado"
            v-model="currentEndereco.estado"
          />
        </div>
        <div class="form-group">
          <label for="complemento">Complemento</label>
          <input
            type="text"
            class="form-control"
            id="complemento"
            v-model="currentEndereco.complemento"
          />
        </div>
      </div>
    </form>

    <button class="mt-3 btn btn-sm btn-outline-danger" @click="deleteEndereco">
      Delete
    </button>

    <button
      type="submit"
      class="mt-3 btn btn-sm btn-outline-primary"
      @click="updateEndereco"
    >
      Update
    </button>
    <button class="mt-3 btn btn-sm btn-outline-warning" @click="goBack()">
      Voltar
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Endereco...</p>
  </div>
</template>

<script>
import EnderecoDataService from "../services/EnderecoDataService";

export default {
  /* eslint-disable */
  name: "endereco",
  data() {
    return {
      currentEndereco: null,
      message: "",
    };
  },
  methods: {
    getEndereco(id) {
      EnderecoDataService.get(id)
        .then((response) => {
          this.currentEndereco = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateEndereco() {
      EnderecoDataService.update(this.currentEndereco.id, this.currentEndereco)
        .then((response) => {
          console.log(response.data);
          this.message = "The Endereco was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteEndereco() {
      EnderecoDataService.delete(this.currentEndereco.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/lista_enderecos");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    goBack() {
      this.$router.push("/lista_enderecos");
    },
  },
  mounted() {
    this.message = "";
    this.getEndereco(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
