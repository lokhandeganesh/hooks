export const zoomToExtent = (extentString) => {
  if (!extentString) return;
  const extent = JSON.parse(extentString);
  // Logic to zoom map to the provided extent
  console.log("Zooming to extent:", extent);
};

export const updateLayerOnDistrict = (distCode) => {
  console.log("Updating layers for district:", distCode);
};

export const updateLayerOnTaluka = (distCode, talCode) => {
  console.log("Updating layers for taluka:", talCode);
};

export const updateLayerOnVillage = (vinCode) => {
  console.log("Updating layers for village:", vinCode);
};
