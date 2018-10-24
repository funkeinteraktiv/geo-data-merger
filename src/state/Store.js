import createStore from 'unistore';

const Store = createStore({
  baseData: [],
  mergeData: [],
  baseKey: '',
  mergeKey: '',
  downloadFormat: config.downloadFormats[0],
  excludeFields: []
});

export default Store;
