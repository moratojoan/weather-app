

export async function getMunicipiosFromDB(database, userId) {
    function reformatMunicipiosFromDB(municipiosFromDB) {
        return  Object.entries(municipiosFromDB).map(([id, {name, codProv}]) => ({
            id,
            name,
            codProv
        }));
    }

    const municipiosFromDB = await database.ref(`users/${userId}/municipios`).get();
    if(!municipiosFromDB.exists()) return [];

    const municipios = reformatMunicipiosFromDB(municipiosFromDB.val());
    return municipios;
}

function getMunicipioRef(database, userId, municipioId) {
    return database.ref(`users/${userId}/municipios/${municipioId}`);
}

export function setMunicipioToDB(database, userId, municipio) {
    const municipioRef = getMunicipioRef(database, userId, municipio.id);
    municipioRef.set({
        name: municipio.name,
        codProv: municipio.codProv
    });
}

export function removeMunicipioFromDB(database, userId, municipioId) {
    const municipioRef = getMunicipioRef(database, userId, municipioId);
    municipioRef.remove();
}
