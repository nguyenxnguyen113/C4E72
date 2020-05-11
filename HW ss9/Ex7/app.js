 const quote = document.getElementById("quote")
 const author = document.getElementById("author")
 async function fetchData() {
     const quotesData = await fetch('http://quotes.rest/qod.json');
     const realData = await quotesData.json();
     return realData;
 }
 async function render() {
     const realData = await fetchData();
     const quotesData = realData.contents.quotes[0].quote;
     const authorData = realData.contents.quotes[0].author;
     quote.innerText = quotesData;
     author.innerText = authorData;
 }
 render();