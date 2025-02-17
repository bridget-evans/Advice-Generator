const url = 'https://api.adviceslip.com/advice';

async function getData() {
  const response = await fetch(url);
  console.log(response);
}

getData();
