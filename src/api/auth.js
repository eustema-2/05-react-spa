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
  async requestResetPassword(payload) {
    const { data } = await client.post(`/request-reset`, payload);
    return data;
  },
  async confirmResetPassword(payload) {
    const { data } = await client.post(`/confirm-reset`, payload);
    return data;
  },
};
