function fetchSimpsonJSON() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID
  const simpsonIndex = [0];
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(simpson) {
    console.log('data decoded from JSON:', simpson);
  
    // Build a block of HTML
    const simsponHtml = `
      <p><strong>${simpson[0].character}</strong></p>
      <img src="${simpson[0].image}" />
      <p><strong>${simpson[0].quote}</strong></p>
    `;
    document.querySelector('#simpson').innerHTML = simsponHtml;
    });
  }
  
  fetchSimpsonJSON();