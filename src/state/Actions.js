/* eslint-disable */
import { parseCsv, getColumns } from '~/utils/import-utils';

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

// helper function used by setBaseData and setMergeData actions
const setData = (key, store, fileData) => {
  const isDelete = fileData === null;
  const isValid = !isDelete && fileData.data && fileData.data.type;

  if (!isValid && !isDelete) {
    return setError(store)(store.getState(), key);
  }

  return {
    [`${key}RawData`]: isDelete ? [] : fileData.rawData,
    [`${key}Data`]: isDelete ? [] : fileData.data,
    [`${key}Key`]: isDelete ? '' : fileData.data.columns[0],
    [`${key}FileName`]: isDelete ? '' : fileData.fileName,
    [`${key}FileType`]: isDelete ? '' : fileData.type
  };
}

const setError = store => (state, key) => {
  window.setTimeout(() => {
    store.setState({ [`${key}DataError`]: null })
  }, 4500);

  return {
    [`${key}DataError`]: true
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
    baseData: state.mergeData,
    mergeRawData: state.baseRawData,
    baseRawData: state.mergeRawData,
    mergeKey: state.baseKey,
    baseKey: state.mergeKey,
    mergeFileName: state.baseFileName,
    baseFileName: state.mergeFileName,
    mergeFileType: state.baseFileType,
    baseFileType: state.mergeFileType,
  };
}

const toggleExcludeField = (state, fieldName) => {
  const index = state.excludeFields.indexOf(fieldName)

  if (index === -1) {
    return {
      excludeFields: state.excludeFields.concat([fieldName])
    };
  }
  return {
    excludeFields: state.excludeFields.filter((d, i) => i !== index)
  };
}

const toggleFirstRowHeader = (state, fileType) => {
  const isFirstRowHeader = !state[`${fileType}FirstRowHeader`];
  const data = parseCsv(state[`${fileType}RawData`], isFirstRowHeader);

  data.columns = getColumns(data);

  return {
    [`${fileType}Data`]: data,
    [`${fileType}FirstRowHeader`]: isFirstRowHeader
  };
}

export default store => ({
  setBaseData: setBaseData(store),
  setMergeData: setMergeData(store),
  setError: setError(store),
  setBaseKey,
  setMergeKey,
  setDownloadFormat,
  swapData,
  toggleExcludeField,
  toggleFirstRowHeader
});
