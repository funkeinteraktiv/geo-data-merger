import * as D3Dsv from 'd3-dsv';
import * as TopoJSON from 'topojson-client';
import { getType } from '@turf/invariant';

const csvParser = D3Dsv.dsvFormat('\t');

export function parseCsv(file) {
  let res = false;

  try {
    res = csvParser.parse(file);
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

export function isTopoJSON() {
  // @TODO: how to detect topojson files
  return false;
}

export function geoJSON2JSON(geoJSON) {
  return geoJSON.features.map(feat => Object.assign({}, {
    ...feat.properties,
    __geometry: feat.geometry,
    __id: feat.id
  }));
}

export function topoJSON2JSON(topoJSON) {
  const geoJSON = TopoJSON.feature(topoJSON);
  return geoJSON2JSON(geoJSON);
}

export function getColumns(data) {
  return data
    .reduce((prev, curr) => [...new Set(prev.concat(Object.keys(curr)))], [])
    .filter(col => col.indexOf('__') !== 0);
}

export function unifyData(data) {
  let res = [];

  if (isGeoJSON(data)) {
    res = geoJSON2JSON(data);
  }

  if (isTopoJSON(data)) {
    res = topoJSON2JSON(data);
  }

  if (data.length) {
    res = data;
  }

  res.columns = getColumns(res);
  return res;
}

export function parseFile(file) {
  const jsonData = parseJSON(file) || parseCsv(file);

  if (!jsonData) {
    // file is not json or csv
    return false;
  }

  return unifyData(jsonData);
}

export default {
  parseFile,
  getColumns
};
