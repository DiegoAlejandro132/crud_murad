
<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="nome">Nome do contato</label>
        <input
          type="text"
          class="form-control"
          id="nome"
          required
          v-model="contato.nome"
          name="nome"
        />
      </div>

      <div class="form-group">
        <label for="tipo_contato">Informe o tipo de contato</label>
        <select
          class="form-control"
          id="tipo_contato"
          placeholder="Tipo de contato"
          required
          v-model="contato.tipo_contato"
          name="tipo_contato"
        >
            <option value="telefone">Telefone</option>
            <option value="email">E-mail</option>

        </select>
      </div>
      <div class="form-group">
        <label for="contato">Informe o contato</label>
        <input
        type="text"
          class="form-control"
          id="contato"
          required
          v-model="contato.contato"
          name="data_nascimento"
        />
      </div> <br> <br>

      <button @click="saveContato" class="btn btn-success">Confirmar</button>
      <button class="m-3 btn btn-md btn-warning" @click="goBack()">Voltar</button>
    </div>

    <div v-else>
      <h4>Voce cadastrou um contato com sucesso!</h4>
      <span>
        <button class="m-3 btn btn-success" @click="newContato">Add</button>
      </span>
      <span>
        <button class="btn btn-warning" @click="listaContato">Lista</button>
      </span>
    </div>
  </div>
</template>

<script>
import ContatoDataService from "../services/ContatoDataService"; //é necessario criar contato dataService


export default {
    /* eslint-disable */
  name: "add-contato",
  data() {
    return {
      contato: {
        id: null,
        nome: "",
        tipo: "",
        contato: ""
      },
      submitted: false
    };
  },
  methods: {
    saveContato() {
      var data = {
        nome: this.contato.nome,
        tipo: this.contato.tipo,
        contato: this.contato.contato
      };

      ContatoDataService.create(data)
        .then(response => {
          this.contato.nome = response.data.nome;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newContato() {
      this.submitted = false;
      this.cliente = {};

    },
    listaContato(){
      this.$router.push( "/lista_contato" )
    },
    goBack() {
      window.history.back();
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