
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

      <br />
      <br />
      <button @click="saveEndereco" class="btn btn-success">Confirmar</button>
      <button class="m-3 btn btn-md btn-warning" @click="goBack()">
        Voltar
      </button>
    </div>

    <div v-else>
      <h4>Voce cadastrou um endereco com sucesso!</h4>
      <span>
        <button class="btn btn-success" @click="newEndereco">Add</button>
      </span>
      <span>
        <button class="m-3 btn btn-warning" @click="voltarLista">Lista</button>
      </span>
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
        numero: "",
        bairro: "",
        cidade: "",
        estado: "",
        complemento: "",
      },
      submitted: false,
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
        complemento: this.endereco.complemento,
      };

      EnderecoDataService.create(data)
        .then((response) => {
          this.endereco.nome = response.data.nomeEndereco;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newEndereco() {
      this.submitted = false;
      this.cliente = {};
    },
    voltarLista() {
      this.$router.push("/lista_enderecos");
    },
    goBack() {
      window.history.back();
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>