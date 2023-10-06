import client from "./client";

export default {
  async upload(payload) {
    const { data } = await client.post("/converter/upload", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  },
};
