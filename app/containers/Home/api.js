const URL = 'https://5ee2faa18b27f300160951b4.mockapi.io/api/data/';

const fetchSankeyData = async () => {
  const response = await Promise.all([
    fetch(`${URL}income`),
    fetch(`${URL}expense`),
  ]);
  // if (response[0].status >= 400 || response[1].status >= 400) {
  //   throw new Error(data.errors);
  // }
  const data = await Promise.all([response[0].json(), response[1].json()]);
  return {
    income: data[0],
    expense: data[1],
  };
};

export { fetchSankeyData };
