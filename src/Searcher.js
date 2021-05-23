import { useState, useEffect } from 'react';

import {
    EuiComboBox,
    EuiHighlight
} from '@elastic/eui';

import { getMunicipios } from './getMunicipios';

import './Searcher.css';


export default function Searcher() {
    const [options, setOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        getMunicipios()
        .then(municipios => {
            console.log(municipios);
            setOptions(municipios);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className="searcher-box">
            <EuiComboBox
                placeholder="Buscar municipio"
                isLoading={isLoading}
                options={options}
                sortMatchesBy="startsWith"
            />
        </div>
    );
}
