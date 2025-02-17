const url = 'https://api.adviceslip.com/advice';

async function getData() {
  const response = await fetch(url);
  const data = response.json();
  console.log(data);
}

getData();
