import { saveAs } from 'file-saver';
import { feature, featureCollection } from '@turf/helpers';
import { topology } from 'topojson-server';
import { csvFormat } from 'd3-dsv';

export function removePropsFromObject(obj, props = []) {
  return Object.keys(obj).reduce((prev, curr) => {
    if (props.indexOf(curr) === -1) {
      prev[curr] = obj[curr]; // eslint-disable-line
    }

    return prev;
  }, {});
}

export function stringifyJSON(data) {
  return JSON.stringify(data);
}

export function formatJSON(data) {
  const res = data.map(d => removePropsFromObject(d, ['__geometry', '__id']));
  return stringifyJSON(res);
}

export function JSON2GeoJSON(data) {
  const features = data.map((properties) => {
    const geometry = properties.__geometry;
    const options = { id: properties.__id };
    const props = removePropsFromObject(properties, ['__geometry', '__id']);

    return feature(geometry, props, options);
  });

  return featureCollection(features);
}

export function formatGeoJSON(data) {
  const geoJSON = JSON2GeoJSON(data);
  return stringifyJSON(geoJSON);
}

export function formatTopoJSON(data) {
  const geoJSON = JSON2GeoJSON(data);
  const topoJSON = topology({ data: geoJSON });
  return stringifyJSON(topoJSON);
}

export function formatCsv(data) {
  const res = data.map(d => removePropsFromObject(d, ['__geometry', '__id']));
  return csvFormat(res);
}

export function cleanData(data, options = {}) {
  let res = data;

  if (options.excludeFields) {
    res = res.map(d => removePropsFromObject(d, options.excludeFields));
  }

  return res;
}

export function getDownloadFileData(data, filetype, excludeFields = [], fileName = 'output') {
  const dataClean = cleanData(data, {
    excludeFields
  });

  let downloadData = null;

  if (filetype === 'geojson') {
    downloadData = {
      data: formatGeoJSON(dataClean),
      type: 'text/json;charset=utf-8',
      name: `${fileName}.geojson`
    };
  }

  if (filetype === 'topojson') {
    downloadData = {
      data: formatTopoJSON(dataClean),
      type: 'text/json;charset=utf-8',
      name: `${fileName}.topo.json`
    };
  }

  if (filetype === 'json') {
    downloadData = {
      data: formatJSON(dataClean),
      type: 'text/json;charset=utf-8',
      name: `${fileName}.json`
    };
  }

  if (filetype === 'csv') {
    downloadData = {
      data: formatCsv(dataClean),
      type: 'text/csv;charset=utf-8',
      name: `${fileName}.csv`
    };
  }

  return downloadData;
}

export function downloadFile(data, filetype, excludeFields = [], fileName) {
  const downloadData = getDownloadFileData(data, filetype, excludeFields, fileName);

  if (downloadData) {
    const dataBlob = new Blob([downloadData.data], { type: downloadData.type });
    saveAs(dataBlob, downloadData.name);
  }
}

export default {
  downloadFile
};
