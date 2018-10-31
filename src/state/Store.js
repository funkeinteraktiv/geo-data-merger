import createStore from 'unistore';

const Store = createStore({
  baseData: [],
  mergeData: [],
  baseKey: null,
  mergeKey: null,
  downloadFormat: null,
  excludeFields: []
});

export default Store;
