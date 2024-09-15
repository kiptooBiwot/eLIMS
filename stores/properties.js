

export const usePropertyStore = defineStore('property', {
  state: () => ({
    properties: [],
    filteredProperties: [],
    searchTerm: '',
    sortOrder: 'asc',
    currentPage: 1,
    pageSize: 10
  }),
  getters: {
    getItemsById: (state) => {
      return (titleNumber) => state.properties.landParcels.find(property => property.titleDeedNumber === titleNumber)
    }
  },
  actions: {
    async fetchProperties() {
      const response = await fetch('/data1.json');
      const data = await response.json();
      // console.log('STATE DATA:', data);

      this.properties = data;
    },
    filterByTitleDeedNumber(titleDeedNumber) {
      this.filteredProperties = this.properties.landParcels.filter(property =>
        property.titleDeedNumber.toLowerCase().includes(titleDeedNumber.toLowerCase())
      );
    },
  }

})