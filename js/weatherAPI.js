console.log(winners);

function setup(){
  $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Siem Reap&APPID=9b021461b994f10f96e2234841d14255&units=metric', gotData);
}

function gotData(data){
  weather = data;
  console.log("The current weather in " + weather.name + " is " + weather.main.temp);
}

setup();
