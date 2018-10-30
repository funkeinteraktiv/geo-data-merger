/* eslint-disable */
const setBaseData = (state, fileData) => {
  return {
    baseData: fileData.data,
    baseKey: fileData.data.columns[0],
    baseFileName: fileData.fileName,
    baseFileType: fileData.type
  };
}

const setMergeData = (state, fileData) => {
  return {
    mergeData: fileData.data,
    mergeKey: fileData.data.columns[0],
    mergeFileName: fileData.fileName,
    mergeFileType: fileData.type
  };
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
