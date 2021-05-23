import Page from './Page';
import Cards from './Cards';


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
    return (
        <Page
            content={
                <Cards
                    municipiosWeatherInfo={municipiosWeatherInfo}
                />
            }
        />
    );
}
