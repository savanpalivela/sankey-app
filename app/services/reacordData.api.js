const URL = 'https://5ee2faa18b27f300160951b4.mockapi.io/api/data/';

const fetchRecordData = async () => {
  const response = await fetch(`${URL}records`);

  const data = await response.json();
  return {
    records: data,
  };
};

export { fetchRecordData };
