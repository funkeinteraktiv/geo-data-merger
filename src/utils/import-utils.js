import * as D3Dsv from 'd3-dsv';
import * as TopoJSON from 'topojson';
import { getType } from '@turf/invariant';

function regexEscape(str) {
  return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function getDelimiterRxp(delim) {
  const rxp = `^[^\\n\\r]+${regexEscape(delim)}`;
  return new RegExp(rxp);
}

export function guessDelimiter(file) {
  return config.defaultDelimiters.find((delim) => {
    const rxp = getDelimiterRxp(delim);
    return rxp.test(file);
  }) || ',';
}

export function parseCsv(file, isFirstRowHeader = true) {
  let res = false;

  try {
    const delimiter = guessDelimiter(file);
    const formattedCsv = D3Dsv.dsvFormat(delimiter);

    if (isFirstRowHeader) {
      res = formattedCsv.parse(file);
    } else {
      res = formattedCsv.parseRows(file, d => d.reduce((row, item, i) => {
        row[`column_${i + 1}`] = item; // eslint-disable-line
        return row;
      }, {}));
    }
  } catch (e) {
    res = false;
  }
  return res;
}

export function parseJSON(file) {
  let res = false;

  try {
    res = JSON.parse(file);
  } catch (e) {
    res = false;
  }
  return res;
}

export function isGeoJSON(data) {
  const type = getType(data);
  return type === 'FeatureCollection';
}

export function isTopoJSON(data) {
  const type = getType(data);
  return type === 'Topology';
}

export function geoJSON2JSON(geoJSON) {
  return geoJSON.features.map(feat => Object.assign({}, {
    ...feat.properties,
    __geometry: feat.geometry,
    __id: feat.id
  }));
}

export function topoJSON2JSON(topoJSON) {
  const objectName = Object.keys(topoJSON.objects)[0];
  const geoJSON = TopoJSON.feature(topoJSON, topoJSON.objects[objectName]);
  return geoJSON2JSON(geoJSON);
}

export function getColumns(data) {
  return data
    .reduce((prev, curr) => [...new Set(prev.concat(Object.keys(curr)))], [])
    .filter(col => col.indexOf('__') !== 0);
}

export function unifyData(data) {
  let res = [];
  let type = '';

  if (isGeoJSON(data)) {
    res = geoJSON2JSON(data);
    type = 'geojson';
  } else if (isTopoJSON(data)) {
    res = topoJSON2JSON(data);
    type = 'topojson';
  } else if (data.length && data.columns) {
    type = 'csv';
    res = data;
  } else if (data.length) {
    type = 'json';
    res = data;
  }

  res.columns = getColumns(res);
  res.type = type;

  return res;
}

export function parseFile(file) {
  const jsonData = parseJSON(file) || parseCsv(file);

  if (!jsonData) {
    // file is not json or csv
    return false;
  }

  return {
    data: unifyData(jsonData),
    rawData: file
  };
}

export default {
  parseFile,
  getColumns,
  unifyData
};
