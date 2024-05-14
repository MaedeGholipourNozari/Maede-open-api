

fetch('https://api.sampleapis.com/coffee/hot')
  .then(response => response.json())
  .then(parsedData => {
    const repositories = parsedData.map(coffee => ({
      name: coffee.title,
      description: coffee.description
    }));
    console.log(repositories);
  })
  .catch(error => {
    // Handle any errors that occur during the fetch call
    console.error('Error fetching data:', error);
    
  });