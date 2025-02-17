const url = 'https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple';

async function getData() {
  const response = await fetch(url);
  console.log(response);
}

getData();
