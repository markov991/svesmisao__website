import { allArticles } from "./articles_data.js";
const sugArrticleContainer = document.querySelector(".sugested--articles");

function generateRandomArticles() {
  var numbers = [];

  while (numbers.length < 3) {
    var randomNumber = Math.floor(Math.random() * allArticles.length);

    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return numbers;
}

// Example usage
var randomArticles = generateRandomArticles();
randomArticles.forEach((article) => {
  sugArrticleContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div>
        <img src="../images/${allArticles[article].image}" alt="${allArticles[article].imageDescription}" />
        <div class="author">
            <span>${allArticles[article].author}</span>

            <span class="dot"> </span>
            <span>${allArticles[article].dateOfPublish}</span>
        </div>
        <h3>
            <a href="./${allArticles[article].articleLocation}.html">
            ${allArticles[article].title}
            </a>
        </h3>
        <p class="article-intro">${allArticles[article].articleDescription}</p>
        
    </div>
  `
  );
});
