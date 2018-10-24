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

export default {
  mergedDataSelector
};
