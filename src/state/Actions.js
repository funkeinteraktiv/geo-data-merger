/* eslint-disable */
const setBaseData = (state, fileData) => {
  const isDelete = fileData === null;
  return {
    baseData: isDelete ? [] : fileData.data,
    baseKey: isDelete ? '' : fileData.data.columns[0],
    baseFileName: isDelete ? '' : fileData.fileName,
    baseFileType: isDelete ? '' : fileData.type
  };
}

const setMergeData = (state, fileData) => {
  const isDelete = fileData === null;
  return {
    mergeData: isDelete ? [] :fileData.data,
    mergeKey: isDelete ? '' : fileData.data.columns[0],
    mergeFileName: isDelete ? '' : fileData.fileName,
    mergeFileType: isDelete ? '' : fileData.type
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
