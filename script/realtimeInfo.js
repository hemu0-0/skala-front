import { getWeatherData, cityCoords} from './weatherAPI.js' 

const select = document.querySelector("#city-select");
const weatherBox = document.querySelector("#weather-box");

select.addEventListener("change", function () {
  updateWeather(select.value);
});

async function updateWeather(city) {
  const coord = cityCoords[city];
  weatherBox.innerHTML = `<p> 실시간 날씨 로딩 중...⏳</p>`;

  try {

    const result = await getWeatherData(city);


    weatherBox.innerHTML = `
      <p>${city} 실시간 날씨</p>
      <p>현재 기온: ${result.temp} °C</p>
      <p>현재 습도: ${result.humidity} %</p>
    `;
  } catch(error) {
    weatherBox.innerHTML = `알 수 없는 오류 발생 ㅠㅠ`;
    console.error(error);
  }
}

updateWeather(select.value);