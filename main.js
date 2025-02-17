const url = 'https://api.adviceslip.com/advice';
const adviceNum = document.getElementById("#advice-num");
const quote = document.getElementById("#quote");

async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

getData();
