import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { fetchOptions } from './utils';

const TalukaSelect = ({ districtCode, value, onChange, isDisabled = false, is_pocra = 1 }) => {
  const [talukaOptions, setTalukaOptions] = useState([]);
  const webservice_base = import.meta.env.VITE_WEBSERVICE_BASE;

  useEffect(() => {
    // If districtCode is -1, clear the options and don't fetch
    if (!districtCode || districtCode === -1) {
      setTalukaOptions([]);
      return;
    }

    const fetchTalukas = async () => {
      const url = `${webservice_base}/talukas?dtncode=${districtCode}&is_pocra=${is_pocra}`;
      const options = await fetchOptions(url, 'thname', 'thncode');
      const allOption = { value: -1, label: '-- All Talukas --' };
      setTalukaOptions([allOption, ...options]);
    };

    fetchTalukas();
  }, [districtCode, is_pocra]);

  return (
    <Select
      options={talukaOptions}
      value={value}
      onChange={onChange}
      placeholder="-- Select Taluka --"
      isClearable
      isDisabled={isDisabled || !districtCode || districtCode === -1}
    />
  );
};

export default TalukaSelect;

