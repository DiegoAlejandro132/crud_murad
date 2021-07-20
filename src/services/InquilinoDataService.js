import http from "../http-common";

class InquilinoDataService {
  getAll() {
    return http.get("/inquilino");
  }

  get(cpf) {
    return http.get(`/inquilino/${cpf}`);
  }

  create(data) {
    return http.post("/inquilino", data);
  }

  update(cpf, data) {
    return http.put(`/inquilino/${cpf}`, data);
  }

  delete(cpf) {
    return http.delete(`/inquilino/${cpf}`);
  }

  deleteAll() {
    return http.delete(`/inquilino`);
  }

  findByTitle(cpf) {
    return http.get(`/inquilino?title=${cpf}`);
  }
}

export default new InquilinoDataService();