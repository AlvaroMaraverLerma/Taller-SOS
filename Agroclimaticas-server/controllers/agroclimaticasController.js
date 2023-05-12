import * as service from '../services/agroclimaticasService.js';

export function getProvincias(req, res) {
    service.getProvincias(req, res);
}

export function findByprovince(req, res) {
    service.findByprovince(req, res);
}

