


export function getMunicipios() {
    return new Promise(resolve => {
        fetch("https://www.el-tiempo.net/api/json/v2/municipios")
        .then(response => {
            if(!response.ok) throw new Error(response.status);
            return response.json();
        })
        .then(municipios => {
            const municipiosTransformed = transformMunicipios(municipios);
            resolve(municipiosTransformed);
        })
        .catch(error => console.log(error));
    });
}

function transformMunicipios(municipios) {
    return municipios.map(transformMunicipio);
}

function decodeApostroph(string) {
    const APOSTROPH_ENTITY = "&#39;";
    const stringDecoded = string.replaceAll(APOSTROPH_ENTITY, "'");
    return stringDecoded;
}

function transformMunicipio(municipio) {
    const getId = ({CODIGOINE}) => CODIGOINE.slice(0, 5);
    const getLabel = ({NOMBRE, NOMBRE_PROVINCIA}) =>
        `${decodeApostroph(NOMBRE)} - ${decodeApostroph(NOMBRE_PROVINCIA)}`;

    return {
        label: getLabel(municipio),
        value: {
            id: getId(municipio),
            codProv: municipio.CODPROV,
            name: decodeApostroph(municipio.NOMBRE)
        }
    };
}
