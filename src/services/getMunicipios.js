


export function getMunicipios() {
    return new Promise(resolve => {
        fetch("https://www.el-tiempo.net/api/json/v2/municipios")
            .then(response => {
                if (!response.ok) throw new ApiResponseError(response.status);
                return response.json();
            })
            .then(municipios => {
                const municipiosTransformed = transformMunicipios(municipios);
                resolve(municipiosTransformed);
            })
            .catch(error => {
                throw new NetworkError(error.msg)
            });
    });
}

class NetworkError extends Error {
    constructor(msg) {
        this.msg = msg;
    }
}

class ApiResponseError extends Error {
    constructor(status) {
        if (status === 404) this.msg = 'Not found'
    }
}

function transformMunicipios(municipios) {
    return municipios.map(transformMunicipio);
}

function decodeApostroph(string) {
    const APOSTROPH_ENTITY = "&#39;";
    const stringDecoded = string.replaceAll(APOSTROPH_ENTITY, "'");
    return stringDecoded;
}

const getLabel = ({ NOMBRE, NOMBRE_PROVINCIA }) =>
    `${decodeApostroph(NOMBRE)} - ${decodeApostroph(NOMBRE_PROVINCIA)}`;

const getId = ({ CODIGOINE }) => CODIGOINE.slice(0, 5);

/**
 * {
 *  name: '',
 *  province: '',
 *  codeProvince: '',
 *  INEcode: ''
 * }
 * @param {*} municipio 
 * @returns 
 */
function transformMunicipio(municipio) {
    return {
        label: getLabel(municipio),
        value: {
            id: getId(municipio),
            codProv: municipio.CODPROV,
            name: decodeApostroph(municipio.NOMBRE)
        }
    };
}
