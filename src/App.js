import { useState } from 'react';

import Page from './Page';
import Searcher from './Searcher';
import Cards from './Cards';

import { getMunicipioWeather } from './getMunicipioWeather';

import { useFirebaseApp } from 'reactfire';


export default function App() {
    const firebase = useFirebaseApp();
    console.log(firebase);

    const [municipiosWeatherInfo, setMunicipiosWeatherInfo] = useState([]);

    const onSelectMunicipio = async ([{value}]) => {
        const municipioWeather = await getMunicipioWeather(value);
        setMunicipiosWeatherInfo([
            ...municipiosWeatherInfo,
            municipioWeather
        ]);
    }

    const onDeleteCard = id => {
        setMunicipiosWeatherInfo(municipiosWeatherInfo.filter(m => m.id !== id));
    }

    return (
        <Page
            searcher={<Searcher onSelect={onSelectMunicipio} />}
            content={
                <Cards
                    municipiosWeatherInfo={municipiosWeatherInfo}
                    onDeleteCard={onDeleteCard}
                />
            }
        />
    );
}
