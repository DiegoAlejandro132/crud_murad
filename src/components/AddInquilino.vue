
<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="nome">Nome do inquilino</label>
        <input
          type="text"
          class="form-control"
          id="nome"
          required
          v-model="inquilino.nome"
          name="nome"
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
          v-model="inquilino.cpf"
          name="cpf"
        />
      </div>
      <div class="form-group">
        <label for="data_nascimento">Data de nascimento</label>
        <input
        type="date"
          class="form-control"
          id="data_nascimento"
          required
          v-model="inquilino.data_nascimento"
          name="data_nascimento"
        />
      </div> <br> <br>

      <button @click="saveInquilino" class="btn btn-success">Confirmar</button>
    </div>

    <div v-else>
      <h4>Voce cadastrou um inquilino com sucesso!</h4>
      <button class="btn btn-success" @click="newInquilino">Add</button>
    </div>
  </div>
</template>

<script>
import InquilinoDataService from "../services/InquilinoDataService"; //é necessario criar inquilino dataService


export default {
    /* eslint-disable */
  name: "add-inquilino",
  data() {
    return {
      inquilino: {
        id: null,
        nome: "",
        cpf: "",
        data_nascimento: ""
      },
      submitted: false
    };
  },
  methods: {
    saveInquilino() {
      var data = {
        nomeInquilino: this.inquilino.nome,
        cpf: this.inquilino.cpf,
        dataNascimentoInquilino: this.inquilino.data_nascimento
      };

      InquilinoDataService.create(data)
        .then(response => {
          this.inquilino.cpf = response.data.cpfInquilino;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newInquilino() {
      this.submitted = false;
      this.inquilino = {};

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