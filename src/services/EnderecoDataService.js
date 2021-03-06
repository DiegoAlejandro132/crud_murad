import http from "../http-common"

class EnderecoDataService {
  getAll() {
    return http.get("/endereco")
  }

  get(id) {
    return http.get(`/endereco/${id}`)
  }

  create(data) {
    return http.post("/endereco", data)
  }

  update(id, data) {
    return http.put(`/endereco/${id}`, data)
  }

  delete(id) {
    return http.delete(`/endereco/${id}`)
  }

  deleteAll() {
    return http.delete(`/endereco`)
  }

  findByNome(search) {
    return http.get(`/endereco?search=${search}`)
  }
}

export default new EnderecoDataService()