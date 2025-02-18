const url = "https://api.adviceslip.com/advice";
const adviceNum = document.querySelector("#advice-num");
const quote = document.querySelector("#quote");
const getData = document.querySelector("#getData");

getData.addEventListener("click", () => {
  getAdvice();
});

window.onload = () => {
  getAdvice();
};

function getAdvice() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const Adviceobj = adviceData.slip;
      adviceNum.innerHTML = `<p>ADVICE #${Adviceobj.id}</p>`;
      quote.innerHTML = `<p>"${Adviceobj.advice}"</p>`;
    })
    .catch((error) => {
      console.log(error);
    });
}
