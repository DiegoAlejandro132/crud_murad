
<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="nome">Nome da pessoa do endereço</label>
        <input
          type="text"
          class="form-control"
          id="nome"
          required
          v-model="endereco.nome"
          name="nome"
        />
      </div>

      <div class="form-group">
        <label for="tipo_contato">Informe o cep</label>
        <input
          class="form-control"
          id="cep"
          placeholder="Tipo de contato"
          required
          v-model="endereco.cep"
          name="cep"
        />
      </div>
      <div class="form-group">
        <label for="logradouro">Informe o logradouro</label>
        <input
        type="text"
          class="form-control"
          id="logradouro"
          required
          v-model="endereco.logradouro"
          name="logradouro"
        />
      </div> 
      <div class="form-group">
        <label for="numero">Informe o numero</label>
        <input
        type="text"
          class="form-control"
          id="numero"
          required
          v-model="endereco.numero"
          name="numero"
        />
      </div> 
      <div class="form-group">
        <label for="bairro">Informe o bairro</label>
        <input
        type="text"
          class="form-control"
          id="bairro"
          required
          v-model="endereco.bairro"
          name="bairro"
        />
      </div>
      <div class="form-group">
        <label for="cidade">Informe a cidade</label>
        <input
        type="text"
          class="form-control"
          id="cidade"
          required
          v-model="endereco.cidade"
          name="cidade"
        />
      </div>
      <div class="form-group">
        <label for="estado">Informe o estado</label>
        <input
        type="text"
          class="form-control"
          id="estado"
          required
          v-model="endereco.estado"
          name="estado"
        />
      </div>
      <div class="form-group">
        <label for="complemento">Informe o complemento</label>
        <input
        type="text"
          class="form-control"
          id="complemento"
          required
          v-model="endereco.complemento"
          name="complemento"
        />
      </div>

      <br> <br>
      <button @click="saveTutorial" class="btn btn-success">Confirmar</button>
    </div>

    <div v-else>
      <h4>Voce cadastrou um endereco com sucesso!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script>
import EnderecoDataService from "../services/EnderecoDataService"; //é necessario criar endereco dataService


export default {
    /* eslint-disable */
  name: "add-contato",
  data() {
    return {
      endereco: {
        id: null,
        nome: "",
        cep: "",
        logradouro: "",
        numero:"",
        bairro:"",
        cidade:"",
        estado:"",
        complemento:"",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveEndereco() {
      var data = {
        nome: this.endereco.nome,
        cep: this.endereco.cep,
        logradouro: this.endereco.logradouro,
        numero: this.endereco.numero,
        bairro: this.endereco.bairro,
        cidade: this.endereco.cidade,
        estado: this.endereco.estado,
        complemento: this.endereco.complemento
      };

      EnderecoDataService.create(data)
        .then(response => {
          this.endereco.nome = response.data.nome;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newEndereco() {
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