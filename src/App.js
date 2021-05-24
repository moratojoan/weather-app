import { useEffect, useState } from 'react';

import Page from './Page';
import Searcher from './Searcher';
import Auth from './Auth';
import Cards from './Cards';

import 'firebase/database';
import {
    useFirebaseApp,
    useUser
} from 'reactfire';


function reformatMunicipiosFromDB(municipiosFromDB) {
    return  Object.entries(municipiosFromDB).map(([id, {name, codProv}]) => ({
        id,
        name,
        codProv
    }));
}

export default function App() {
    const firebase = useFirebaseApp();
    const user = useUser();
    const [municipiosSelected, setMunicipiosSelected] = useState([]);

    useEffect(() => {
        if(!user.data) return;

        firebase.database()
        .ref(`users/${user.data.uid}/municipios`)
        .get()
        .then(municipiosFromDB => {
            if(municipiosFromDB.exists()) {
                const municipiosReformated = reformatMunicipiosFromDB(municipiosFromDB.val());
                setMunicipiosSelected(municipiosReformated);
            }
        });
    }, [firebase, user.data]);

    const getMunicipioRefFromDB = municipioId => {
        return firebase.database().ref(`users/${user.data.uid}/municipios/${municipioId}`);
    }
    const setMuniciposSelectedToDB = value => {
        if(!user.data) return;

        getMunicipioRefFromDB(value.id).set({
            name: value.name,
            codProv: value.codProv
        });
    }
    const removeMunicipioFromDB = municipioToDelteId => {
        if(!user.data) return;

        getMunicipioRefFromDB(municipioToDelteId).remove();
    }

    const onSelectMunicipio = async ([{value}]) => {
        setMuniciposSelectedToDB(value);
        setMunicipiosSelected([
            ...municipiosSelected,
            value
        ]);
    }

    const onDeleteCard = municipioToDelteId => {
        removeMunicipioFromDB(municipioToDelteId);
        setMunicipiosSelected(municipiosSelected.filter(m => m.id !== municipioToDelteId))
    }

    return (
        <Page
            auth={<Auth />}
            searcher={<Searcher onSelect={onSelectMunicipio} />}
            content={
                <Cards
                    municipiosSelected={municipiosSelected}
                    onDeleteCard={onDeleteCard}
                />
            }
        />
    );
}
