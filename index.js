"use strict";

let temperatures = [];
let day = 0;
let days = [];

day = 0;
days = [];
temperatures = [17, 21, 23];
forecast(temperatures);

day = 0;
days = [];
temperatures = [12, 5, -5, 0, 4];
forecast(temperatures);


function forecast(temperatures) {
  temperatures.forEach(function (item, index, array) {
    day = ++day;
    days.push(day);
    if (day == temperatures.length) {
      console.log(`${item} degrés dans ${day} jours`);
    } else if (day >= 2) {
      console.log(`${item} degrés dans ${day} jours`);
    } else {
      console.log(`${item} degrés dans ${day} jour`);
    }
  });
}


