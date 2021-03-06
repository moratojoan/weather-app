import { useState, useEffect } from 'react';

import { EuiComboBox } from '@elastic/eui';

import { getMunicipios } from './services/getMunicipios';

import './Searcher.css';


export default function Searcher({ onSelect }) {
    const [options, setOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        getMunicipios()
        .then(municipios => {
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
                onChange={onSelect}
                singleSelection
            />
        </div>
    );
}
