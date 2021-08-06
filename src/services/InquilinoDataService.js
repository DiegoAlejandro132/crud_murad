import http from "../http-common"

class InquilinoDataService {
  getAll() {
    return http.get("/inquilino")
  }

  get(id) {
    return http.get(`/inquilino/${id}`)
  }

  create(data) {
    return http.post("/inquilino", data)
  }

  update(id, data) {
    return http.put(`/inquilino/${id}`, data)
  }

  delete(id) {
    return http.delete(`/inquilino/${id}`)
  }

  deleteAll() {
    return http.delete(`/inquilino`)
  }

  findBySearch(search) {
    return http.get(`/inquilino?search=${search}`)
  }
}

export default new InquilinoDataService()