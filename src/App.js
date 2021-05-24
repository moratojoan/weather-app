import { useState } from 'react';

import Page from './Page';
import Searcher from './Searcher';
import Auth from './Auth';
import Cards from './Cards';


export default function App() {
    const [municipiosSelected, setMunicipiosSelected] = useState([]);

    const onSelectMunicipio = async ([{value}]) => {
        setMunicipiosSelected([
            ...municipiosSelected,
            value
        ]);
    }

    const onDeleteCard = municipioToDelteId => {
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
