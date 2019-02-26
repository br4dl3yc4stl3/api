"use strict";

// Fetch request
(function() {
	var url = "https://api.openweathermap.org/data/2.5/weather?q=London,England";
	var apiKey = "4d0867c01cdc7c75e105b97051855daf"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work

	fetch(url + '&appid=' + apiKey).then(function(response) {
		if (!response.ok) {
			throw Error(response.statusText);
		}
		return response.json();
	}).then(function(response) {
		updateUISuccess(response);
	}).catch(function() {
		updateUIError();
	});

	//handle XHR success
	function updateUISuccess(response) {
		var condition = response.weather[0].main;
		var degC = response.main.temp - 273.15;
		var degCInt = Math.floor(degC);
		var degF = degC * 1.8 + 32;
		var degFInt = Math.floor(degF);
		var weatherBox = document.getElementById("weather");
		weatherBox.innerHTML = "<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>"
	}
	//handle XHR error
	function updateUIError() {
		var weatherBox = document.getElementById("weather");
		weatherBox.className = "hidden";
	}
})();
