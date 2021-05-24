import { useEffect, useState } from 'react';

import CardTemplate from './CardTemplate';

import { getMunicipioWeather } from './services/getMunicipioWeather';


export default function Card({
    onDelete,
    name,
    id,
    codProv
}) {
    const [weather, setWeather] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getMunicipioWeather({id, codProv})
        .then(weather => {
            setWeather(weather);
            setIsLoading(false);
        })
    }, [id, codProv]);

    return (
        <CardTemplate
            title={name}
            isLoading={isLoading}
            weather={weather}
            onDelete={onDelete}
        />
    );
}
