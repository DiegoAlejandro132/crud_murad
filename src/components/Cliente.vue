
<template>
  <div v-if="currentCliente" class="edit-form">
    <h4>Cliente</h4>
    <form>
      <div class="form-group">
        <label for="nome">Nome</label>
        <input type="text" class="form-control" id="nome"
          v-model="currentCliente.nome"
        />
      </div>
      <div class="form-group">
        <label for="cpf">CPF</label>
        <input type="text" class="form-control" id="cpf"
          v-model="currentCliente.cpf"
        />
      </div>
      <div class="form-group">
        <label for="data_nascimento">Data de nascimento</label>
        <input type="text" class="form-control" id="data_nascimento"
          v-model="currentCliente.data_nascimento"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentCliente.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button class="badge badge-primary mr-2"
      v-if="currentCliente.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button>

    <button class="badge badge-danger mr-2"
      @click="deleteCliente"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateCliente"
    >
      Update
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
      message: ''
    }
  },
  methods: {
    getCliente (cpf) {
      ClienteDataService.get(cpf)
        .then(response => {
          this.currentCliente = response.data
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    },

    updatePublished (status) {
      var data = {
        id: this.currentCliente.id,
        nome: this.currentCliente.nome,
        cpf: this.currentCliente.cpf,
        data_nascimento: this.currentCliente.data_nascimento,
        published: status
      }

      ClienteDataService.update (this.currentCliente.id, data)
        .then(response => {
          this.currentCliente.published = status
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    },

    updateCliente () {
      ClienteDataService.update(this.currentCliente.id, this.currentCliente)
        .then(response => {
          console.log(response.data)
          this.message = 'The cliente was updated successfully!'
        })
        .catch(e => {
          console.log(e)
        })
    },

    deleteCliente () {
      ClienteDataService.delete(this.currentCliente.id)
        .then(response => {
          console.log(response.data)
          this.$router.push({ name: "clientes" })
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  mounted () {
    this.message = ''
    this.getCliente(this.$route.params.id)
  }
}
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
