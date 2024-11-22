import React, { useState } from 'react';
import DistrictSelect from './DistrictSelect';
import TalukaSelect from './TalukaSelect';
import VillageSelect from './VillageSelect';

const Weather = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedTaluka, setSelectedTaluka] = useState(null);
  const [selectedVillage, setSelectedVillage] = useState(null);

  const handleDistrictChange = (district, extent) => {
    setSelectedDistrict(district);
    setSelectedTaluka(district ? { value: -1, label: '-- All Talukas --' } : null);
    setSelectedVillage(null);

    // Other Logic
    console.log("Selected District Extent:", district, extent);
  };

  const handleTalukaChange = (taluka) => {
    setSelectedTaluka(taluka);
    setSelectedVillage(
      taluka?.value !== -1 ?
        { value: -1, label: '-- All Villages --' }
        : null
    );
  };

  const handleVillageChange = (village) => {
    setSelectedVillage(village);
  };

  return (
    <div>
      <h2>Dependent Dropdowns</h2>
      {/* District Dropdown */}
      <div className="mb-4">
        <label>Select District</label>
        <DistrictSelect
          value={selectedDistrict}
          onChange={handleDistrictChange}
        />
      </div>
      {/* Taluka Dropdown */}
      <div className="mb-4">
        <label>Select Taluka</label>
        <TalukaSelect
          districtCode={selectedDistrict?.value}
          value={selectedTaluka}
          onChange={handleTalukaChange}
        />
      </div>
      {/* Village Dropdown */}
      <div className="mb-4">
        <label>Select Village</label>
        <VillageSelect
          talukaCode={selectedTaluka?.value}
          value={selectedVillage}
          onChange={handleVillageChange}
        />
      </div>
    </div>
  );
};

export default Weather;

