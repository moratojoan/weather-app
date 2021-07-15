import { useEffect, useState } from 'react';

import CardTemplate from './CardTemplate';

import { getMunicipioWeather } from './services/getMunicipioWeather';

const VIEW_STATE = {
    ready: 'ready',
    loading: 'loading',
    network_error: 'network_error',
    server_error: 'server_error'
}

export default function Card({
    onDelete,
    name,
    id,
    codProv
}) {
    const [weather, setWeather] = useState(null);
    const [viewState, setViewState] = useState(VIEW_STATE.ready);

    useEffect(() => {
        setViewState(VIEW_STATE.loading);
        getMunicipioWeather({ id, codProv })
            .then(weather => {
                setWeather(weather);
                setViewState(VIEW_STATE.ready);
            })
            .catch(err => {
                // TODO: Handle error
                // if NetworkError
                // setViewState(VIEW_STATE.network_error)
            })
    }, [id, codProv]);

    return (
        <>{weather && viewState !== VIEW_STATE.loading && <CardTemplate
            title={name}
            viewState={viewState}
            weather={weather}
            onDelete={onDelete}
        />}
            {viewState === VIEW_STATE.network_error && <div>There was a network error</div>}
        </>
    );
}
