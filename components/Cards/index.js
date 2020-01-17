// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articleElement = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( response => {
        // deal with the response data in here
        let articleResponse = response.data;
        //console.log(articleResponse);
        for (const item in articleResponse) {
            //console.log(articleResponse[item]);
            for (const section in articleResponse[item]) {
                //console.log(articleResponse[item][art]);
                let tempArray = articleResponse[item][section]
                //console.log(tempArray)
                tempArray.forEach(article => {
                    //console.log(article);
                    articleElement.appendChild(createArticleElement(article));
                });
            }
        }
    })
    .catch( err => {
        // deal with the error in here
        console.log(`Error: ${err}`);
    })

function createArticleElement(article) {

    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    let headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headline');
    headlineDiv.textContent = `${article['headline']}`;

    let authorDiv = document.createElement('div');
    authorDiv.classList.add('author');

    let imageDiv = document.createElement('div');
    imageDiv.classList.add('img-container');

    let image = document.createElement('img');
    image.src = `${article['authorPhoto']}`;

    let span = document.createElement('span');
    span.textContent = `${article['authorName']}`;

    cardDiv.append(headlineDiv);
    cardDiv.appendChild(authorDiv);

    authorDiv.appendChild(imageDiv);
    authorDiv.appendChild(span);
    imageDiv.appendChild(image);

    return cardDiv;
}