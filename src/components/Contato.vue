
<template>
  <div v-if="currentContato" class="edit-form">
    <h4>Contato</h4>
    <form>
      <div class="form-group">
        <label for="nome">Nome</label>
        <input type="text" class="form-control" id="nome"
          v-model="currentContato.nome"
        />
      </div>
      <div class="form-group">
        <label for="contato">Contato</label>
        <input type="text" class="form-control" id="contato"
          v-model="currentContato.contato"
        />
      </div>
        <div>
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

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentContato.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button class="badge badge-primary mr-2"
      v-if="currentContato.published"
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
      @click="deleteContato"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateContato"
    >
      Update
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
      message: ''
    }
  },
  methods: {
    getContato (id) {
      ContatoDataService.get(id)
        .then(response => {
          this.currentContato = response.data
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    },

    updatePublished (status) {
      var data = {
        id: this.currentContato.id,
        nomeContato: this.currentContato.nome,
        contato: this.currentContato.contato,
        tipo: this.currentContato.tipo,
        published: status
      }

      ContatoDataService.update (this.currentContato.id, data)
        .then(response => {
          this.currentContato.published = status
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    },

    updateContato () {
      ContatoDataService.update(this.currentContato.id, this.currentContato)
        .then(response => {
          console.log(response.data)
          this.message = 'The contato was updated successfully!'
        })
        .catch(e => {
          console.log(e)
        })
    },

    deleteContato () {
      ContatoDataService.delete(this.currentContato.id)
        .then(response => {
          console.log(response.data)
          this.$router.push({ name: "contatos" })
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  mounted () {
    this.message = ''
    this.getContato(this.$route.params.id)
  }
}
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
