/* eslint-disable */
const setBaseData = store => (state, fileData) => {
  const data = setData('base', store, fileData);
  const isDelete = fileData === null;

  return {
    ...data,
    downloadFormat: isDelete ? null : fileData.data.type,
  };
}

const setMergeData = store => (state, fileData) => {
  const data = setData('merge', store, fileData);

  return data;
}

const setData = (key, store, fileData) => {
  const isDelete = fileData === null;
  const isValid = !isDelete && fileData.data.type;

  if (!isValid) {
    window.setTimeout(() => {
      store.setState({ [`${key}DataError`]: null })
    }, 4500);

    return {
      [`${key}DataError`]: !isValid
    };
  }

  return {
    [`${key}Data`]: isDelete ? [] : fileData.data,
    [`${key}Key`]: isDelete ? '' : fileData.data.columns[0],
    [`${key}FileName`]: isDelete ? '' : fileData.fileName,
    [`${key}FileType`]: isDelete ? '' : fileData.type
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

export default store => ({
  setBaseData: setBaseData(store),
  setMergeData: setMergeData(store),
  setBaseKey,
  setMergeKey,
  setDownloadFormat,
  swapData,
  toggleExcludeField
});
