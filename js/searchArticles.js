import { allArticles } from "./articles_data.js";

const searchInput = document.getElementById("search--articles");
const searchModal = document.querySelector(".search-modal");
const searchPar = document.querySelector(".search-input");
const searchResultContainer = document.querySelector(".search-result");
const closeSearchMenu = document.querySelector(".close-search-modal-btn");

searchInput.addEventListener("click", () => {
  searchModal.classList.remove("hidden");

  searchResultContainer.innerHTML = "";
  document.addEventListener("keyup", (e) => {
    const articlesSearchResult = [];
    allArticles.forEach((article) => {
      if (
        article.title.toLowerCase().includes(searchPar.value.toLowerCase()) &&
        searchPar.value.length > 1 &&
        articlesSearchResult.length < 3
      ) {
        articlesSearchResult.push(article);
        console.log(articlesSearchResult);

        renderingSearchResult(articlesSearchResult);
      }
    });
  });
});

closeSearchMenu.addEventListener("click", () => {
  searchResultContainer.innerHTML = "";
  searchPar.value = "";
  searchModal.classList.add("hidden");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searchResultContainer.innerHTML = "";
    searchPar.value = "";
    searchModal.classList.add("hidden");
  }
});

const renderingSearchResult = function (result) {
  searchResultContainer.innerHTML = "";
  result.forEach((artticle) => {
    searchResultContainer.insertAdjacentHTML(
      "beforeend",
      `
          
            <div>
            <img
            src="../images/${artticle.image}"
            alt="${artticle.imageDescription}"
          />
              <div class="author">
                <span>${artticle.author}</span>
    
                <span class="dot"> </span>
                <span>${artticle.dateOfPublish}</span>
              </div>
              <h2>
                <a href="../articles/${artticle.articleLocation}.html">
                  ${artticle.title}
                </a>
              </h2>
              <p class="article-intro">
                ${artticle.articleDescription}
              </p>
              <div class="category--marker">
                
              </div>
            </div>
          `
    );
  });
};
