import client from "./client";

export default {
  async login(payload) {
    const { data } = await client.post(`/login`, payload);
    return data;
  },
  async create(payload) {
    const { data } = await client.post(`/`, payload);
    return data;
  },
};
