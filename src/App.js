import Page from './Page';
import Searcher from './Searcher';
import Cards from './Cards';

import { getMunicipioWeather } from './getMunicipioWeather';


const municipiosWeatherInfo = [
    {
        id: "1",
        name: "Barcelona",
        actualTemperature: "18",
        rain: "5"
    },
    {
        id: "2",
        name: "Barcelona",
        actualTemperature: "18",
        rain: "5"
    },
    {
        id: "3",
        name: "Barcelona",
        actualTemperature: "18",
        rain: "5"
    },
    {
        id: "4",
        name: "Barcelona",
        actualTemperature: "18",
        rain: "5"
    },
    {
        id: "5",
        name: "Barcelona",
        actualTemperature: "18",
        rain: "5"
    }
];

export default function App() {
    const onSelectMunicipio = async ([{value}]) => {
        console.log(value);
        const municipioWeather = await getMunicipioWeather(value)
        console.log(municipioWeather);
    }

    return (
        <Page
            searcher={<Searcher onSelect={onSelectMunicipio} />}
            content={
                <Cards
                    municipiosWeatherInfo={municipiosWeatherInfo}
                />
            }
        />
    );
}
