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

import * as databaseServices from './firebase/database';


export default function App() {
    const firebase = useFirebaseApp();
    const { data: user } = useUser();

    const defaultMunicipiosSelected = [
        {id: "08019", codProv: "08", name: "Barcelona"},
        {id: "28079", codProv: "28", name: "Madrid"},
        {id: "41091", codProv: "41", name: "Sevilla"}
    ]
    const [municipiosSelected, setMunicipiosSelected] = useState(defaultMunicipiosSelected);

    useEffect(() => {
        if(!user) return;

        databaseServices.getMunicipiosFromDB(firebase.database(), user.uid)
        .then(setMunicipiosSelected);

    }, [firebase, user]);

    const onSelectMunicipio = async ([{value}]) => {
        setMunicipiosSelected([
            ...municipiosSelected,
            value
        ]);

        if(!user) return;
        databaseServices.setMunicipioToDB(firebase.database(), user.uid, value);
    }

    const onDeleteCard = municipioToDelteId => {
        setMunicipiosSelected(municipiosSelected.filter(m => m.id !== municipioToDelteId));

        if(!user) return;
        databaseServices.removeMunicipioFromDB(firebase.database(), user.uid, municipioToDelteId);
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
