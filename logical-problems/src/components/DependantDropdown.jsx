import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';

const DependantDropdown = () => {
  const webservice_base = "http://172.22.105.124/webservices";

  const [districtList, setDistrictList] = useState([]);
  const [talukaList, setTalukaList] = useState([]);
  const [villageList, setVillageList] = useState([]);

  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedTaluka, setSelectedTaluka] = useState(null);
  const [selectedVillage, setSelectedVillage] = useState(null);

  const is_pocra = 1;

  // Construct URLs dynamically
  const getDistrictsUrl = (_is_pocra) =>
    _is_pocra != null
      ? `${webservice_base}/districts?is_pocra=${_is_pocra}`
      : `${webservice_base}/districts`;

  const getTalukasUrl = (_is_pocra, _districtCode) =>
    _is_pocra != null
      ? `${webservice_base}/talukas?dtncode=${_districtCode}&is_pocra=${_is_pocra}`
      : `${webservice_base}/talukas?dtncode=${_districtCode}`;

  const getVillagesUrl = (_is_pocra, _talukaCode) =>
    _is_pocra != null
      ? `${webservice_base}/villages?thncode=${_talukaCode}&is_pocra=${_is_pocra}`
      : `${webservice_base}/villages?thncode=${_talukaCode}`;

  // Fetch all districts
  useEffect(() => {
    getAllDistricts();
  }, []);

  const getAllDistricts = async () => {
    const url = getDistrictsUrl(is_pocra);
    try {
      const result = await axios.get(url);
      const districtOptions = result.data.data.map((district) => ({
        value: district.dtncode,
        label: district.dtname,
        dataExtent: `[${district.xmin}, ${district.ymin}, ${district.xmax}, ${district.ymax}]`,
      }));
      setDistrictList([{ value: -1, label: '-- Select All --' }, ...districtOptions]);
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  };

  const fetchTalukas = async (_districtCode) => {
    const url = getTalukasUrl(is_pocra, _districtCode);
    try {
      const result = await axios.get(url);
      const talukaOptions = result.data.data.map((taluka) => ({
        value: taluka.thncode,
        label: taluka.thname,
        dataExtent: `[${taluka.xmin}, ${taluka.ymin}, ${taluka.xmax}, ${taluka.ymax}]`,
      }));
      setTalukaList([{ value: -1, label: '-- Select All --' }, ...talukaOptions]);
    } catch (error) {
      console.error("Error fetching talukas:", error);
    }
  };

  const fetchVillages = async (_talukaCode) => {
    const url = getVillagesUrl(is_pocra, _talukaCode);
    try {
      const response = await axios.get(url);
      const villageOptions = response.data.data.map((village) => ({
        value: village.vincode,
        label: village.vlname,
        dataExtent: `[${village.xmin}, ${village.ymin}, ${village.xmax}, ${village.ymax}]`,
      }));
      setVillageList([{ value: -1, label: '-- Select All --' }, ...villageOptions]);
    } catch (error) {
      console.error("Error fetching villages:", error);
    }
  };

  // Handle district change
  const handleDistrictChange = (selectedOption) => {
    setSelectedDistrict(selectedOption);
    setTalukaList([]);
    setVillageList([]);
    setSelectedTaluka(null);
    setSelectedVillage(null);
    if (selectedOption?.value !== -1) {
      let districtCode = selectedOption.value;
      let districtExtent = selectedOption.dataExtent;
      fetchTalukas(districtCode);
    }
  };

  // Handle taluka change
  const handleTalukaChange = (selectedOption) => {
    setSelectedTaluka(selectedOption);
    setVillageList([]);
    setSelectedVillage(null);
    if (selectedOption?.value !== -1) {
      let talukaCode = selectedOption.value;
      let talukaExtent = selectedOption.dataExtent;
      fetchVillages(talukaCode);
    }
  };

  // Handle village change
  const handleVillageChange = (selectedOption) => {
    setSelectedVillage(selectedOption);
    if (selectedOption?.value !== -1) {
      let villageCode = selectedOption.value;
      let villageExtent = selectedOption.dataExtent;
      console.log("Selected Village:", selectedOption);
    }
  };

  return (
    <div>
      <div className="mt-2 p-3 bg-primary text-white rounded text-center">
        <h1>Dependent Drop-down</h1>
        <h4>District - Taluka - Village</h4>
      </div>
      <div className='row pt-1'>
        <div className="col-4 p-4">
          <label>Select District</label>
          <Select
            options={districtList}
            value={selectedDistrict}
            onChange={handleDistrictChange}
            placeholder="-- Select District --"
            isClearable
          />
        </div>

        <div className='col-4 p-4'>
          <label>Select Taluka</label>
          <Select
            options={talukaList}
            value={selectedTaluka}
            onChange={handleTalukaChange}
            placeholder="-- Select Taluka --"
            isClearable
            isDisabled={!selectedDistrict}
          />
        </div>

        <div className='col-4 p-4'>
          <label>Select Village</label>
          <Select
            options={villageList}
            value={selectedVillage}
            onChange={handleVillageChange}
            placeholder="-- Select Village --"
            isClearable
            isDisabled={!selectedTaluka}
          />
        </div>
      </div>
    </div>
  );
};

export default DependantDropdown;
