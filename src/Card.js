import { useEffect, useState } from 'react';

import CardTemplate from './CardTemplate';

import { getMunicipioWeather } from './getMunicipioWeather';


export default function Card({
    onDelete,
    name,
    id,
    codeProv
}) {
    const [weather, setWeather] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getMunicipioWeather({id, codeProv})
        .then(weather => {
            setWeather(weather);
            setIsLoading(false);
        })
    }, [id, codeProv]);

    return (
        <CardTemplate
            title={name}
            isLoading={isLoading}
            weather={weather}
            onDelete={onDelete}
        />
    );
}
