const key = 'e6115c78e86713a6102a4087b642367b';
const weather_api_url = 'http://api.openweathermap.org/data/2.5/weather';

function show_weather() {

    var city = $('#city').val();
    var url = weather_api_url + "?q=" + city + "&units=metric&appid=" + key;

    $.getJSON(url, function(result) {
        console.log(result);
        clean();
        var icon_url = 'http://openweathermap.org/img/wn/' + result.weather[0].icon + "@2x.png";

        $('#results').html('');
        $('#results').append("Temperature: " + result.main.temp + "°C" + "<br>");
        $('#results').append("Feels like: " + result.main.feels_like + "°C" + "<br>");
        $('#results').append("Temperature min:  " + result.main.temp_min + "°C" + "<br>");
        $('#results').append("Temperature max:  " + result.main.temp_max + "°C" + "<br>");
        $('#results').append("Humidity:  " + result.main.humidity + "%" + "<br>");
        $('#results').append("Visibility:  " + result.visibility + "m" + "<br>");
        $('#results').append("Wind speed: " + result.wind.speed + "m/s N" + "<br>");

        icon = $("<img>").attr('src', icon_url);
        $('#results').append(icon);
    });
}

function clean() {
    document.getElementById('city').value = '';
    var footer_weather = document.getElementById('footer');
    footer_weather.style.display = "block";
}