
<template>
  <div v-if="currentCliente" class="edit-form">
    <h4>Cliente</h4>
    <form>
      <div class="form-group">
        <label for="nome">Nome</label>
        <input
          type="text"
          class="form-control"
          id="nome"
          v-model="currentCliente.nomeCliente"
        />
      </div>
      <div class="form-group">
        <label for="cpf">CPF</label>
        <input
          type="text"
          class="form-control"
          id="cpf"
          v-model="currentCliente.cpfCliente"
        />
      </div>
      <div class="form-group">
        <label for="data_nascimento">Data de nascimento</label>
        <input
          type="date"
          class="form-control"
          id="data_nascimento"
          v-model="currentCliente.dataNascimentoCliente"
        />
      </div>
    </form>

    <button class="btn btn-sm btn-outline-danger" @click="deleteCliente">
      Delete
    </button>

    <button
      type="submit"
      class="m-3 btn btn-sm btn-outline-success"
      @click="updateCliente"
    >
      Update
    </button>

    <button class="btn btn-sm btn-outline-warning" @click="goBack()">
      Voltar
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click on a Cliente...</p>
  </div>
</template>

<script>
import ClienteDataService from "../services/ClienteDataService";

export default {
  /* eslint-disable */
  name: "cliente",
  data() {
    return {
      currentCliente: null,
      message: "",
    };
  },
  methods: {
    getCliente(id) {
      ClienteDataService.get(id)
        .then((response) => {
          this.currentCliente = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateCliente() {
      ClienteDataService.update(this.currentCliente.id, this.currentCliente)
        .then((response) => {
          console.log(response.data);
          this.message = "The cliente was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteCliente() {
      ClienteDataService.delete(this.currentCliente.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/lista_cliente");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    goBack() {
      window.history.back();
    },
  },

  mounted() {
    this.message = "";
    this.getCliente(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
