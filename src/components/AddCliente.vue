
<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="cliente">Nome do cliente</label>
        <input
          type="text"
          class="form-control"
          id="nome"
          required
          v-model="cliente.nome"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="cpf">CPF</label>
        <input
          type="text"
          maxlength="14"
          placeholder="EX: 111.222.333-44"
          class="form-control"
          id="cpf"
          required
          v-model="cliente.cpf"
          name="description"
        />
      </div>
      <div class="form-group">
        <label for="description">Data de nascimento</label>
        <input
        type="date"
          class="form-control"
          id="data_nascimento"
          required
          v-model="cliente.data_nascimento"
          name="description"
        />
      </div>

      <button @click="saveTutorial" class="btn btn-success">Confirmar</button>
    </div>

    <div v-else>
      <h4>Voce cadastrou um cliente com sucesso!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script>
import ClienteDataService from "../services/TutorialDataService";


export default {
    /* eslint-disable */
  name: "add-cliente",
  data() {
    return {
      cliente: {
        id: null,
        nome: "",
        cpf: "",
        data_nascimento: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        nome: this.cliente.nome,
        cpf: this.cliente.cpf,
        data_nascimento: this.cliente.data_nascimento
      };

      ClienteDataService.create(data)
        .then(response => {
          this.cliente.cpf = response.data.cpf;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newCliente() {
      this.submitted = false;
      this.cliente = {};

    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>