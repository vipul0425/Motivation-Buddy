// fetch element from DOM
const showQuote = document.getElementById('display');
const showAuthor = document.getElementById('author');

// Fetch Quotes from motivational quotes API
let rand = Math.floor(Math.random() * 1500)
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    showQuote.innerText = data[rand].text;
    showAuthor.innerText = `- ${data[rand].author}`
    
  });