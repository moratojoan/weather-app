


export function getMunicipioWeather({id, codeProv}) {
    return new Promise(resolve => {
        fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${codeProv}/municipios/${id}`)
        .then(response => {
            if(!response.ok) throw new Error(response.status);
            return response.json();
        })
        .then(data => {
            const municipioWeather = transformMunicipioWeather(data);
            resolve(municipioWeather);
        })
        .catch(error => console.log(error));
    });
}

function transformMunicipioWeather(data) {
    return {
        actualTemperature: data.temperatura_actual,
        rain: data.lluvia
    };
}
