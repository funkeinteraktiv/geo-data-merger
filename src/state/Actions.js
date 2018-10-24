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

const swapData = (state) => {
  return {
    mergeData: state.baseData,
    baseData: state.mergeData
  }
}

const toggleExcludeField = (state, fieldName) => {
  const index = state.excludeFields.indexOf(fieldName)

  if (index === -1) {
    return { excludeFields: state.excludeFields.concat([fieldName]) };
  }
  return { excludeFields: state.excludeFields.filter((d, i) => i !== index) }
} 

export default Store => ({
  setBaseData,
  setMergeData,
  setBaseKey,
  setMergeKey,
  setDownloadFormat,
  swapData,
  toggleExcludeField
});
