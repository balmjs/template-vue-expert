export default {
  async getMenu() {
    let resp = await this.$http.get('/data/menu.json');
    let { code, data, message } = resp.data;

    if (code === 200) {
      this.menu = data;
    } else {
      alert(message);
    }
  }
};
