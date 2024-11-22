import axios from 'axios';

// Define the default extent for Maharashtra
const _mhExtent = [72.19, 15.12, 81.80, 22.77];

// Utility function to fetch data and process it for dropdown options
export const fetchOptions = async (url, labelKey, valueKey) => {
  try {
    const response = await axios.get(url);
    const data = response.data.data;

    return data.map(item => ({
      value: item[valueKey],
      label: item[labelKey],
      dataName: item[labelKey],
      // Use the specific extent if available, otherwise use the default Maharashtra extent
      dataExtent: (item.xmin && item.ymin && item.xmax && item.ymax)
        ? `[${item.xmin}, ${item.ymin}, ${item.xmax}, ${item.ymax}]`
        : JSON.stringify(_mhExtent)
    }));
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    return [];
  }
};
