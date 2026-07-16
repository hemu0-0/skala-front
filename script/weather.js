const cityCoords = {
    "대한민국 서울": { lat: 37.5665, lon: 126.9780 },
    "프랑스 파리": { lat: 48.8566, lon: 2.3522 },
    "중국 베이징": { lat: 39.9042, lon: 116.4074 },
    "태국 방콕": { lat: 13.7563, lon: 100.5018 },
};

const select = document.querySelector("#city-select");
const weatherBox = document.querySelector("#weather-box");

select.addEventListener("change", function () {
  updateWeather(select.value);
});

async function updateWeather(city) {
  const coord = cityCoords[city];
  if (!coord) return;
  weatherBox.innerHTML = `<p> 실시간 날씨 로딩 중...⏳</p>`;

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coord.lat}&longitude=${coord.lon}&current=temperature_2m,relative_humidity_2m`;

    const response = await fetch(url);
    const data = await response.json();

    const temp = data.current.temperature_2m;
    const humidity = data.current.relative_humidity_2m;

    weatherBox.innerHTML = `
      <p>${city} 실시간 날씨</p>
      <p>현재 기온: ${temp} °C</p>
      <p>현재 습도: ${humidity} %</p>
    `;
  } catch(error) {
    weatherBox.innerHTML = `알 수 없는 오류 발생 ㅠㅠ`;
    console.error(error);
  }
}

updateWeather(select.value);