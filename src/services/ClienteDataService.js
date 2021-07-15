import http from "../http-common";

class ClienteDataService {
  getAll() {
    return http.get("/cliente");
  }

  get(cpf) {
    return http.get(`/cliente/${cpf}`);
  }

  create(data) {
    return http.post("/cliente", data);
  }

  update(cpf, data) {
    return http.put(`/cliente/${cpf}`, data);
  }

  delete(cpf) {
    return http.delete(`/cliente/${cpf}`);
  }

  deleteAll() {
    return http.delete(`/cliente`);
  }

  findByTitle(cpf) {
    return http.get(`/tutorials?nome=${cpf}`);
  }
}

export default new ClienteDataService();