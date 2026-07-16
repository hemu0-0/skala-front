const cityCoords = {
    "대한민국 서울": { lat: 37.5665, lon: 126.9780 },
    "프랑스 파리": { lat: 48.8566, lon: 2.3522 },
    "중국 베이징": { lat: 39.9042, lon: 116.4074 },
    "태국 방콕": { lat: 13.7563, lon: 100.5018 },
};

export async function getWeatherData(city) {
    const coord = cityCoords[city];
    if (!coord) return null;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coord.lat}&longitude=${coord.lon}&current=temperature_2m,relative_humidity_2m`;

    const response = await fetch(url);
    const data = await response.json();

    return {
        temp: data.current.temperature_2m,
        humidity: data.current.relative_humidity_2m,
    };

}

export {cityCoords};