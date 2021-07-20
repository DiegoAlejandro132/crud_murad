import http from "../http-common";

class ContatoDataService {
  getAll() {
    return http.get("/contato");
  }

  get(id) {
    return http.get(`/contato/${id}`);
  }

  create(data) {
    return http.post("/contato", data);
  }

  update(id, data) {
    return http.put(`/contato/${id}`, data);
  }

  delete(id) {
    return http.delete(`/contato/${id}`);
  }

  deleteAll() {
    return http.delete(`/contato`);
  }

  findByTitle(nome) {
    return http.get(`/contato?title=${nome}`);
  }
}

export default new ContatoDataService();