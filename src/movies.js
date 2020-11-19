const container = document.querySelector("#results");


const callFetch = (event) => {
  event.preventDefault();
  const query = document.querySelector("#movieInput").value;
  fetchMovies(query);
}

const fillResults = (results) => {
  results.forEach((result) => {
    const title = result.Title;
    const poster = result.Poster;
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="col-md-4">
        <img src="${poster}"/>
        <p>${title}</p>
      </div>`
    );
  });
}


const fetchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then((response) => response.json())
    .then((data) => {
      const results = data.Search;
      container.innerHTML = "";
      fillResults(results);
    });
};



export { fetchMovies, callFetch }
