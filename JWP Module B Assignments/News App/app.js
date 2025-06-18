const input = document.getElementById("inputData");
const showData = document.getElementById("showData");
const loader = document.getElementById("loader");
let selectedCategory = "";

function setCategory(cat) {
  selectedCategory = cat;
  getNews();
}

const getNews = () => {
  const query = input.value.trim();
  let API_URL = "";

  if (query) {
    // Search query => use everything endpoint
    API_URL = `https://newsapi.org/v2/everything?apiKey=f88219f217de4663b55c3e59d4d7d439&q=${query}`;
  } else {
    // Category only => use top-headlines
    API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=f88219f217de4663b55c3e59d4d7d439`;
    if (selectedCategory) {
      API_URL += `&category=${selectedCategory}`;
    }
  }

  loader.style.display = "block";
  showData.innerHTML = "";

  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      loader.style.display = "none";

      if (!data.articles || data.articles.length === 0) {
        showData.innerHTML = `<p class="text-danger fs-4 text-center">No news articles found.</p>`;
        return;
      }

      data.articles.forEach((e) => {
        showData.innerHTML += `
          <div class="card shadow m-3" style="width: 20rem;">
            <img src="${e.urlToImage || 'https://via.placeholder.com/300'}" class="card-img-top" alt="News Image">
            <div class="card-body">
              <h5 class="card-title">${e.title}</h5>
              <p class="card-text">${e.description || 'No description available.'}</p>
              <a href="${e.url}" target="_blank" class="btn btn-primary">Read More</a>
            </div>
          </div>`;
      });
    })
    .catch((err) => {
      console.error(err);
      loader.style.display = "none";
      showData.innerHTML = `<p class="text-danger fs-4 text-center">Error fetching news. Please try again later.</p>`;
    });

  input.value = "";
};
