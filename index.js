
const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '8993b35f',
      i: 'tt0848228'
    }
  });

  console.log(response.data)
};

fetchData();