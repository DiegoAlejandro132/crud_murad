
<template>
  <div v-if="currentInquilino" class="edit-form">
    <h4>Inquilino</h4>
    <form>
      <div class="form-group">
        <label for="nome">Nome</label>
        <input
          type="text"
          class="form-control"
          id="nome"
          v-model="currentInquilino.nomeInquilino"
        />
      </div>
      <div class="form-group">
        <label for="cpf">CPF</label>
        <input
          type="text"
          class="form-control"
          id="cpf"
          v-model="currentInquilino.cpfInquilino"
        />
      </div>

      <div class="form-group">
        <label for="dataNascimento">Data de nascimento</label>
        <input
          type="date"
          class="form-control"
          id="dataNascimento"
          v-model="currentInquilino.dataNascimentoInquilino"
        />
      </div>
    </form>

    <button class="mt-3 btn btn-sm btn-outline-danger" @click="deleteInquilino">
      Delete
    </button>

    <button
      type="submit"
      class="mt-3 btn btn-sm btn-outline-primary"
      @click="updateInquilino"
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
    <p>Please click on a Inquilino...</p>
  </div>
</template>

<script>
import InquilinoDataService from "../services/InquilinoDataService";

export default {
  /* eslint-disable */
  name: "Inquilino",
  data() {
    return {
      currentInquilino: null,
      message: "",
    };
  },
  methods: {
    getInquilino(id) {
      InquilinoDataService.get(id)
        .then((response) => {
          this.currentInquilino = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateInquilino() {
      InquilinoDataService.update(
        this.currentInquilino.id,
        this.currentInquilino
      )
        .then((response) => {
          console.log(response.data);
          this.message = "The Inquilino was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteInquilino() {
      InquilinoDataService.delete(this.currentInquilino.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push("lista_inquilinos");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    goBack() {
      this.$router.push("/lista_inquilinos");
    },
  },
  mounted() {
    this.message = "";
    this.getInquilino(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
