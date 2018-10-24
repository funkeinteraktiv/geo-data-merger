import { saveAs } from 'file-saver';
import { feature, featureCollection } from '@turf/helpers';
import { topology } from 'topojson';
import { csvFormat } from 'd3-dsv';

export function stringifyJSON(data) {
  return JSON.stringify(data);
}

export function cloneWithoutGeometries(properties) {
  const props = Object.assign({}, properties);
  delete props.__id;
  delete props.__geometry;
  return props;
}

export function formatJSON(data) {
  const res = data.map(cloneWithoutGeometries);
  return stringifyJSON(res);
}

export function JSON2GeoJSON(data) {
  const features = data.map((properties) => {
    const geometry = properties.__geometry;
    const options = { id: properties.__id };
    const props = cloneWithoutGeometries(properties);

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
  const res = data.map(cloneWithoutGeometries);
  return csvFormat(res);
}

export function downloadFile(data, filetype) {
  let downloadData = null;

  if (filetype === 'geojson') {
    downloadData = {
      data: formatGeoJSON(data),
      type: 'text/json;charset=utf-8',
      name: 'output.geojson'
    };
  }

  if (filetype === 'topojson') {
    downloadData = {
      data: formatTopoJSON(data),
      type: 'text/json;charset=utf-8',
      name: 'output.topo.json'
    };
  }

  if (filetype === 'json') {
    downloadData = {
      data: formatJSON(data),
      type: 'text/json;charset=utf-8',
      name: 'output.json'
    };
  }

  if (filetype === 'csv') {
    downloadData = {
      data: formatCsv(data),
      type: 'text/csv;charset=utf-8',
      name: 'output.csv'
    };
  }

  if (downloadData) {
    const dataBlob = new Blob([downloadData.data], { type: downloadData.type });
    saveAs(dataBlob, downloadData.name);
  }
}

export default {
  downloadFile
};
