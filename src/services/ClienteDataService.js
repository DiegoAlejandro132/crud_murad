import http from "../http-common";

class ClienteDataService {
  getAll() {
    return http.get("/cliente");
  }

  get(id) {
    return http.get(`/cliente?id=${id}`);
  }

  create(data) {
    return http.post("/cliente", data);
  }

  update(id, data) {
    return http.put(`/cliente/${id}`, data);
  }

  delete(id) {
    return http.delete(`/cliente/${id}`);
  }

  deleteAll() {
    return http.delete(`/cliente`);
  }

  findByTitle(id) {
    return http.get(`/tutorials?nome=${id}`);
  }
}

export default new ClienteDataService();