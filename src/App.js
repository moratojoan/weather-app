import { useState } from 'react';

import Page from './Page';
import Searcher from './Searcher';
import Auth from './Auth';
import Cards from './Cards';

import { getMunicipioWeather } from './getMunicipioWeather';


export default function App() {
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
            auth={<Auth />}
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
