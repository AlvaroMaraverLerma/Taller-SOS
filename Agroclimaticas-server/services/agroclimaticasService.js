export function getProvincias(req, res) {
    res.send([{
        province: "Sevilla",
        year: 2021
    }]);
}

export function findByprovince(req, res) {
    res.send({
        province: "Sevilla",
        year: 2021
    });
}

