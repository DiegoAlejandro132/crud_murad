
<template>
  <div v-if="currentEndereco" class="edit-form">
    <h4>Endereço</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
          v-model="currentEndereço.title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description"
          v-model="currentEndereço.description"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentEndereço.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button class="badge badge-primary mr-2"
      v-if="currentEndereco.published"
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
      @click="deleteEndereco"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateEndereco"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Endereco...</p>
  </div>
</template>

<script>
import EnderecoDataService from "../services/EnderecoDataService";

export default {
    /* eslint-disable */
  name: "endereco",
  data() {
    return {
      currentEndereco: null,
      message: ''
    }
  },
  methods: {
    getEndereco (id) {
      EnderecoDataService.get(id)
        .then(response => {
          this.currentEndereco = response.data
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    },

    updatePublished (status) {
      var data = {
        id: this.currentEndereco.id,
        title: this.currentEndereco.title,
        description: this.currentEndereco.description,
        published: status
      }

      EnderecoDataService.update (this.currentEndereco.id, data)
        .then(response => {
          this.currentEndereco.published = status
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    },

    updateEndereco () {
      EnderecoDataService.update(this.currentEndereco.id, this.currentEndereco)
        .then(response => {
          console.log(response.data)
          this.message = 'The Endereco was updated successfully!'
        })
        .catch(e => {
          console.log(e)
        })
    },

    deleteEndereco () {
      EnderecoDataService.delete(this.currentEndereco.id)
        .then(response => {
          console.log(response.data)
          this.$router.push({ name: "enderecos" })
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  mounted () {
    this.message = ''
    this.getEndereco(this.$route.params.id)
  }
}
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
