import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { fetchOptions } from './utils';

const VillageSelect = ({ talukaCode, value, onChange, isDisabled = false, is_pocra = 1 }) => {
  const [villageOptions, setVillageOptions] = useState([]);
  const webservice_base = import.meta.env.VITE_WEBSERVICE_BASE;

  useEffect(() => {
    // If talukaCode is -1, clear the options and don't fetch
    if (!talukaCode || talukaCode === -1) {
      setVillageOptions([]);
      return;
    }

    const fetchVillages = async () => {
      const url = `${webservice_base}/villages?thncode=${talukaCode}&is_pocra=${is_pocra}`;
      const options = await fetchOptions(url, 'vlname', 'vincode');
      const allOption = { value: -1, label: '-- All Villages --' };
      setVillageOptions([allOption, ...options]);
    };

    fetchVillages();
  }, [talukaCode, is_pocra]);

  return (
    <Select
      options={villageOptions}
      value={value}
      onChange={onChange}
      placeholder="-- Select Village --"
      isClearable
      isDisabled={isDisabled || !talukaCode || talukaCode === -1}
    />
  );
};

export default VillageSelect;

