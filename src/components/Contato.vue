
<template>
  <div v-if="currentContato" class="edit-form">
    <h4>Contato</h4>
    <form>
      <div class="form-group">
        <label for="nome">Nome</label>
        <input
          type="text"
          class="form-control"
          id="nome"
          v-model="currentContato.nomeContato"
        />
      </div>
      <div class="form-group">
        <label for="contato">Contato</label>
        <input
          type="text"
          class="form-control"
          id="contato"
          v-model="currentContato.contato"
        />
      </div>
      <div>
          <span>Tipo de contato</span> <br>
        <select 
          class="form-group"
          id="tipo"
          placeholder="Tipo de contato"
          v-model="currentContato.tipo"
          name="tipo_contato"
        >
          <option value="telefone">Telefone</option>
          <option value="email">E-mail</option>
        </select>
        
      </div>
    </form>

    <button class="mt-3 btn btn-sm btn-outline-danger" @click="deleteContato">
      Delete
    </button>

    <button type="submit" class="mt-3 btn btn-sm btn-outline-primary" @click="updateContato">
      Update
    </button>
    <button class="mt-3 btn btn-sm btn-outline-warning" @click="goBack()">
      Voltar
    </button>

    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Contato...</p>
  </div>
</template>

<script>
import ContatoDataService from "../services/ContatoDataService";

export default {
  /* eslint-disable */
  name: "contato",
  data() {
    return {
      currentContato: null,
      message: "",
    };
  },
  methods: {
    getContato(id) {
      ContatoDataService.get(id)
        .then((response) => {
          this.currentContato = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateContato() {
      ContatoDataService.update(this.currentContato.id, this.currentContato)
        .then((response) => {
          console.log(response.data);
          this.message = "The contato was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteContato() {
      ContatoDataService.delete(this.currentContato.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/lista_contato");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    goBack() {
      this.$router.push("/lista_contato");
    }
  },
  mounted() {
    this.message = "";
    this.getContato(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
