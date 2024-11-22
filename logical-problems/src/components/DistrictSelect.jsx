import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { fetchOptions } from './utils';

const _mhExtent = [72.19, 15.12, 81.80, 22.77]; // Default extent for Maharashtra

const DistrictSelect = ({ value, onChange, is_pocra = 1 }) => {
  const [districtOptions, setDistrictOptions] = useState([]);
  const webservice_base = import.meta.env.VITE_WEBSERVICE_BASE;

  useEffect(() => {
    const fetchDistricts = async () => {
      const url = `${webservice_base}/districts?is_pocra=${is_pocra}`;
      const options = await fetchOptions(url, 'dtname', 'dtncode');
      const allOption = { value: -1, label: '-- All Districts --' };
      setDistrictOptions([allOption, ...options]);
    };
    fetchDistricts();
  }, [is_pocra]);

  const handleChange = (district) => {
    if (district?.value === -1) {
      // Handle the "All Districts" case
      onChange(null, _mhExtent);
    } else {
      const extentString = district?.dataExtent;
      const distExtent = extentString ? JSON.parse(extentString) : _mhExtent;
      onChange(district, distExtent);
    }
  };

  return (
    <Select
      options={districtOptions}
      value={value}
      onChange={handleChange}
      placeholder="-- Select District --"
      isClearable
    />
  );
};

export default DistrictSelect;

