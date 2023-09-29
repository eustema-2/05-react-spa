const storage = sessionStorage;

export default {
  setItem(key, data) {
    storage.setItem(key, JSON.stringify(data));
  },
  getItem(key) {
    return JSON.parse(storage.getItem(key));
  },
  removeItem(key) {
    storage.removeItem(key);
  },
  removeAll() {
    storage.removeAll();
  },
};
