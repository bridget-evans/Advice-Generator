const url = 'https://api.adviceslip.com/advice';

async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

getData();
