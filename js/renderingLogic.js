import { allArticles } from "./articles_data.js";

const searchPar = document.getElementById("search-param").innerHTML;
const containter = document.querySelector(".categories-articles");

allArticles.forEach((artticle) => {
  if (searchPar.toLowerCase() === artticle.category.toLowerCase()) {
    containter.insertAdjacentHTML(
      "beforeend",
      `
        
          <div>
            <img
              src="../images/${artticle.image}.jpg"
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
              <span><a href="drustvo.html">${artticle.category}</a></span>
            </div>
          </div>
        `
    );
  }
});

// containter.insertAdjacentHTML(
//   "beforeend",
//   allArticles.forEach((artticle) => {
//     console.log(artticle);
//     `
//     <div class="categories-articles">
//           <div>
//             <img
//               src="../images/${artticle.image}.jpg"
//               alt="${artticle.imageDescription}"
//             />
//             <div class="author">
//               <span>${artticle.author}</span>

//               <span class="dot"> </span>
//               <span>${artticle.dateOfPublish}</span>
//             </div>
//             <h2>
//               <a href="../articles/${artticle.articleLocation}.html">
//                 ${artticle.title}
//               </a>
//             </h2>
//             <p class="article-intro">
//               ${artticle.articleDescription}
//             </p>
//             <div class="category--marker">
//               <span><a href="./categories/drustvo.html">${artticle.category}</a></span>
//             </div>
//           </div>
//     `;
//   })
// );
console.log(allArticles);
