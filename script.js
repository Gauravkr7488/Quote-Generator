const newQuote = document.getElementById("newquote");
const twitter = document.getElementById("twitter");
const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
    const promise = await fetch(url);
    const data = await promise.json();
    console.log(data);
    console.log(data.content);
    qoute.innerText = data.content;
    author.innerText = `--- ${data.author}`;
}

getQuote(api_url);

const qoute = document.getElementById("quote");
const author = document.getElementById("author");

function getNewQuote() {
    window.location.reload();
}
newQuote.addEventListener("click",() => getQuote(api_url) , false);

