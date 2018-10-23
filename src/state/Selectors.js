import { createSelector } from 'reselect';
import { map } from 'd3-collection';
import { getColumns } from '~/utils';

const baseDataSelector = state => state.baseData;
const mergeDataSelector = state => state.mergeData;
const baseKeySelector = state => state.baseKey;
const mergeKeySelector = state => state.mergeKey;

const mergeDataMapSelector = createSelector(
  [mergeDataSelector, mergeKeySelector],
  (mergeData, mergeKey) => {
    if (!mergeData || !mergeKey) {
      return false;
    }

    return map(mergeData, d => d[mergeKey]);
  }
);

export const mergedDataSelector = createSelector(
  [baseDataSelector, baseKeySelector, mergeDataMapSelector],
  (baseData, baseKey, mergeDataMap) => {
    if (!baseData || !baseKey || !mergeDataMap) {
      return [];
    }

    const res = baseData.map((d) => {
      const key = d[baseKey];
      console.log(key);
      const addData = mergeDataMap.get(key);
      console.log(addData);
      return Object.assign({}, d, addData);
    });

    res.columns = getColumns(res);

    return res;
  }
);

export default {
  mergedDataSelector
};
