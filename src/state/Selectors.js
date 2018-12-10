import { createSelector } from 'reselect';
import { map } from 'd3-collection';
import { getColumns } from '~/utils';

const baseDataSelector = state => state.baseData;
const mergeDataSelector = state => state.mergeData;
const baseKeySelector = state => state.baseKey;
const mergeKeySelector = state => state.mergeKey;
const mergeFileNameSelector = state => state.mergeFileName;
const baseFileNameSelector = state => state.baseFileName;

const mergeDataMapSelector = createSelector(
  [mergeDataSelector, mergeKeySelector],
  (mergeData, mergeKey) => {
    if (!mergeData || !mergeKey) {
      return map([], d => d);
    }

    return map(mergeData, d => d[mergeKey]);
  }
);

export const mergedDataSelector = createSelector(
  [baseDataSelector, baseKeySelector, mergeDataMapSelector],
  (baseData, baseKey, mergeDataMap) => {
    let res = [];

    if (baseData) {
      res = baseData.map((d) => {
        const key = d[baseKey];
        const addData = mergeDataMap.get(key);
        return Object.assign({}, d, addData);
      });
    }

    res.columns = getColumns(res);

    return res;
  }
);

export const isBaseDataGeo = createSelector(
  [baseDataSelector],
  baseData => ['geojson', 'topojson'].includes(baseData.type)
);

export const outputFileNameSelector = createSelector(
  [baseFileNameSelector, mergeFileNameSelector],
  (baseFileName, mergeFileName) => {
    if (!baseFileName && !mergeFileName) {
      return 'output';
    }
    return `merge__${baseFileName.substring(0, 10)}__${mergeFileName.substring(0, 10)}`;
  }
);

export default {
  mergedDataSelector,
  isBaseDataGeo,
  outputFileNameSelector
};
