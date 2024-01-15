'use strict'
// Please don't delete the 'use strict' line above

const WEATHER_FORECAST =
"https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json"


fetch(WEATHER_FORECAST)
  .then((response) => {
    response.json().then((data) => {
			const Tokyo_tomorrow = data[0].timeSeries[0].areas[0].weathers[1];
      console.log("問題１：明日の東京の天気は " + Tokyo_tomorrow);
			console.log(data);
			console.log("then: ", response);
    })
  });

const weatherApi = "https://www.jma.go.jp/bosai/forecast/data/forecast/"
const getTodayForecast = (地域コード) => {
	const 地域コードs = String(地域コード);
	  if (
			地域コードs.length !== 6 ||
			Number(地域コードs.slice(0,2)) < 0 || 地域コードs.slice(0,2) > 47 ||
			String(地域コードs).slice(-4) !== "0000"
			) {
    console.error("問題２：正しい地域コードを入力してください");
		result = "正しい地域コードを入力してください";
    return;
  }
	const お天気API = weatherApi + 地域コード + ".json";
	fetch(お天気API).catch((error) => {
		console.log("catch: ", error);
		console.log("問題４：情報を取得できませんでした");
		result = "情報を取得できませんでした";
	}).then((response) => {
    response.json().then((data) => {
			const 地域 = data[0].timeSeries[0].areas[0].area.name;
			const 今日の天気 = data[0].timeSeries[0].areas[0].weathers[0];
      console.log("問題２：今日の"+ 地域 + "の天気は " + 今日の天気);
			console.log(data);
			result ="今日の"+ 地域 + "の天気は " + 今日の天気;
    
			const event = new Event('DOMContentLoaded');
			document.dispatchEvent(event);
		})
  });
}
let result = "";
getTodayForecast(400000);

let report;
document.addEventListener("DOMContentLoaded", function() {
  report = document.querySelector(".re");

  if (report) {
    report.style.color = "red";
		//問題３
		report.innerHTML = result;
  } else {
    console.error("要素が見つかりませんでした");
  }	
});