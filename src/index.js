const container = document.querySelector("#results");
const form = document.querySelector("#movies-form");

const fetchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then((response) => response.json())
    .then((data) => {
      const results = data.Search;
      container.innerHTML = "";
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
    });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = document.querySelector("#movieInput").value;
  fetchMovies(query);
});

const cityInput = document.querySelector("#cityInput");
const locationResults = document.querySelector("#locationResults");

const fetchLocation = (query) => {
  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: JSON.stringify({ query: query }),
  })
    .then((response) => response.json())
    .then((data) => {
      const results = data.hits;
      locationResults.innerHTML = "";
      results.forEach((result) => {
        const value = result._highlightResult.locale_names.default[0].value;
        locationResults.insertAdjacentHTML("afterbegin", `<div>${value}</div>`);
      });
    });
};

cityInput.addEventListener("keyup", (event) => {
  const query = event.currentTarget.value;
  fetchLocation(query);
});
