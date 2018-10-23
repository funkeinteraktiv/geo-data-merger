import * as D3Dsv from 'd3-dsv';
import { getType } from '@turf/invariant';

export function parseCsv(file) {
  let res = false;

  try {
    res = D3Dsv.csvParse(file);
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
  return false;
}

export function detectJSONType(data) {
  if (isGeoJSON(data)) {
    return 'geojson';
  }
  if (isTopoJSON(data)) {
    return 'topojson';
  }
  return 'json';
}

export function parseFile(file) {
  const jsonData = parseJSON(file);

  if (jsonData) {
    const fileType = detectJSONType(jsonData);
    return { type: fileType, data: jsonData };
  }

  const csvData = parseCsv(file);

  if (csvData) {
    return { type: 'csv', data: csvData };
  }

  return false;
}

export default {
  parseFile
};
