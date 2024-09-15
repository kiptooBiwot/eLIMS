
export const useValuersStore = defineStore('valuers', {
  state: () => ({
    valuers: []
  }),
  getters: {},
  actions: {
    async fetchValuers() {
      const response = await fetch('/data1.json');
      const data = await response.json();
      console.log('VALUERS DATA:', data.valuers);

      this.valuers = data;
    },
  }
})