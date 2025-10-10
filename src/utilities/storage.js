// Save data to local Storage
const saveData = (data) => {
  localStorage.setItem("apps", JSON.stringify(data));
};

// Get data from local Storage
export const getData = () => {
  const jsonData = localStorage.getItem("apps");

  if (jsonData) {
    return JSON.parse(jsonData);
  }

  return [];
};

// Set data to local Storage
export const setData = (newDataId) => {
  const prevData = getData();
  const newData = [...prevData, newDataId];
  saveData(newData);
};

// Remove data from local Storage
export const removeData = (newDataId) => {
  const prevData = getData();
  const newData = prevData.filter((id) => id !== newDataId);
  console.log(newData);
  saveData(newData);
};
