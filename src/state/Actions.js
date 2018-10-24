/* eslint-disable */
const setBaseData = (state, data) => {
  return { baseData: data, baseKey: data.columns[0] };
}

const setMergeData = (state, data) => {
  return { mergeData: data, mergeKey: data.columns[0] };
}

const setBaseKey = (state, key) => {
  return { baseKey: key };
}

const setMergeKey = (state, key) => {
  return { mergeKey: key };
}

const setDownloadFormat = (state, downloadFormat) => {
  return { downloadFormat };
}

export default Store => ({
  setBaseData,
  setMergeData,
  setBaseKey,
  setMergeKey,
  setDownloadFormat
});
