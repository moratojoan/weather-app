
export function createDataBaseServices(firebase) {

    const database = firebase.database();

    function getMunicipioRef(userId, municipioId) {
        return database.ref(`users/${userId}/municipios/${municipioId}`);
    }

    return {
        getMunicipiosFromDB: async function (userId) {
            function reformatMunicipiosFromDB(municipiosFromDB) {
                return Object.entries(municipiosFromDB).map(([id, { name, codProv }]) => ({
                    id,
                    name,
                    codProv
                }));
            }

            const municipiosFromDB = await database.ref(`users/${userId}/municipios`).get();
            if (!municipiosFromDB.exists()) return [];

            const municipios = reformatMunicipiosFromDB(municipiosFromDB.val());
            return municipios;
        },
        setMunicipioToDB: function (userId, municipio) {
            const municipioRef = getMunicipioRef(userId, municipio.id);
            municipioRef.set({
                name: municipio.name,
                codProv: municipio.codProv
            });
        },
        removeMunicipioFromDB: function (userId, municipioId) {
            const municipioRef = getMunicipioRef(userId, municipioId);
            municipioRef.remove();
        }
    }
}


