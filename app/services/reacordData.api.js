const URL = 'https://5ee2faa18b27f300160951b4.mockapi.io/api/data/';

const fetchRecordData = async () => {
  // const response = await Promise.all([
  //   fetch(`${URL}income`),
  //   fetch(`${URL}expense`),
  // ]);
  const response = await fetch(`${URL}records`);
  // if (response[0].status >= 400 || response[1].status >= 400) {
  //   throw new Error(data.errors);
  // }
  const data = await response.json();
  return {
    records: data,
  };
};

export { fetchRecordData };
