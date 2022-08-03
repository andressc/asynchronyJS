"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

//////////////////////////////////////////////////////

/*const getCountryData = (country) => {
  const request = new XMLHttpRequest();
  request.open("GET", "https://restcountries.com/v3.1/name/" + country);
  request.send();
  request.addEventListener("load", () => {
    const [data] = JSON.parse(request.responseText);
    //console.log(data);

    const currencies = data.currencies;
    const currencyName = Object.values(currencies)[0].name;
    const currencySymbol = Object.values(currencies)[0].symbol;

    const languages = data.languages;
    const languageName = Object.values(languages)[0];

    const html = `
  <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.official}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(
        +data.population / 1000000
      ).toFixed(1)} миллионов</p>
      <p class="country__row"><span>🗣️</span>${languageName}</p>
      <p class="country__row"><span>💰</span>${currencySymbol} ${currencyName}</p>
    </div>
</article>`;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};*/

const displayCountry = (data, className = "") => {
  const currencies = data.currencies;
  const currencyName = Object.values(currencies)[0].name;
  const currencySymbol = Object.values(currencies)[0].symbol;

  const languages = data.languages;
  const languageName = Object.values(languages)[0];

  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.official}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(
        +data.population / 1000000
      ).toFixed(1)} миллионов</p>
      <p class="country__row"><span>🗣️</span>${languageName}</p>
      <p class="country__row"><span>💰</span>${currencySymbol} ${currencyName}</p>
    </div>
</article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndBorderCountries = (country) => {
  const request1 = new XMLHttpRequest();
  request1.open("GET", "https://restcountries.com/v3.1/name/" + country);
  request1.send();
  request1.addEventListener("load", () => {
    const [data1] = JSON.parse(request1.responseText);
    console.log(data1);

    displayCountry(data1);

    const [firstNeighbor] = data1.borders;

    if (!firstNeighbor) return;

    const request2 = new XMLHttpRequest();
    request2.open(
      "GET",
      "https://restcountries.com/v3.1/alpha/" + firstNeighbor
    );
    request2.send();

    request2.addEventListener("load", () => {
      const [data2] = JSON.parse(request2.responseText);
      displayCountry(data2, "neighbour");
    });
  });
};

//getCountryAndBorderCountries("usa");

const request3 = new XMLHttpRequest();
request3.open("GET", "https://restcountries.com/v3.1/name/" + country);
request3.send();
