const URL = 'https://5ee2faa18b27f300160951b4.mockapi.io/api/data/';

const fetchSankeyData = async () => {
  console.log('reach 3');
  const response = await Promise.all([
    fetch(`${URL}nodes`),
    fetch(`${URL}links`),
  ]);
  const data = await Promise.all([response[0].json(), response[1].json()]);
  // if (response.status >= 400) {
  //   throw new Error(data.errors);
  // }
  return {
    nodes: data[0],
    links: data[1],
  };
};

export { fetchSankeyData };
