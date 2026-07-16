const cityCoords = {
    "대한민국 서울": { lat: 37.5665, lon: 126.9780 },
    "프랑스 파리": { lat: 48.8566, lon: 2.3522 },
    "중국 베이징": { lat: 39.9042, lon: 116.4074 },
    "태국 방콕": { lat: 13.7563, lon: 100.5018 },
};

const select = document.querySelector("#city-select");
const weatherBox = document.querySelector("#weather-box");

select.addEventListener("change", function () {
  updateWeather();
});

function updateWeather() {
  const city = select.value;
  const coord = cityCoords[city];
  if (coord) {
    weatherBox.innerHTML = `
      <p>${city}</p>
      <p>위도: ${coord.lat}</p>
      <p>경도: ${coord.lon}</p>
    `;
  }
}

updateWeather();