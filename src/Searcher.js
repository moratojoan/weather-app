import { useState, useEffect, useCallback } from 'react';

import { EuiComboBox } from '@elastic/eui';

import './Searcher.css';


const options = [
    {
      label: 'Titan',
      'data-test-subj': 'titanOption',
    },
    {
      label: 'Enceladus',
    },
    {
      label: 'Mimas',
    },
    {
      label: 'Dione',
    },
    {
      label: 'Iapetus',
    },
    {
      label: 'Phoebe',
    },
    {
      label: 'Rhea',
    },
    {
      label:
        "Pandora is one of Saturn's moons, named for a Titaness of Greek mythology",
    },
    {
      label: 'Tethys',
    },
    {
      label: 'Hyperion',
    },
  ];

export default function Searcher() {

    return (
        <div className="searcher-box">
            <EuiComboBox
                placeholder="Select one or more options"
                options={options}
            />
        </div>
    );
}
