/* eslint-disable */
const setBaseData = (state, data) => {
  return { baseData: data };
}

const setMergeData = (state, data) => {
  return { mergeData: data };
}

const setBaseKey = (state, key) => {
  return { baseKey: key };
}

const setMergeKey = (state, key) => {
  return { mergeKey: key };
}

export default Store => ({
  setBaseData,
  setMergeData,
  setBaseKey,
  setMergeKey
});
