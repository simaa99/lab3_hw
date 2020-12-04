//homework lab 3  simaa abd al fattah abumousa  
let data = require("./hw.json");

function topping_type() {
  var t = {};
  for (let m = 0; m < data.length; m++) {
    for (let n = 0; n < data[m].topping.length; n++) {
      t[data[m].topping[n].type] = 0;
    }
  }
  return Object.keys(t);
}


function batter_types() {
  var b = {};
  for (let m = 0; m < data.length; m++) {
    for (let n = 0; n < data[m].batters.batter.length; n++) {
      b[data[m].batters.batter[n].type] = 0;
    }
  }
  return Object.keys(b);
}


function Ppu_average() {
  var sum = 0;
  for (let m = 0; m < data.length; m++) {
    sum += data[m].ppu;
  }
  return sum / data.length;
}


function Ppu_sum() {
  var sum = 0;
  for (let m = 0; m < data.length; m++) {
    sum += data[m].ppu;
  }
  return sum;
}


function AllIDs() {
  var Ids = {};
  for (let m = 0; m < data.length; m++) {
    Ids[data[m].id] = 0;
    for (let n = 0; n < data[m].batters.batter.length; n++) {
      Ids[data[m].batters.batter[n].id] = 0;
    }
    for (let n = 0; n < data[m].topping.length; n++) {
      Ids[data[m].topping[n].id] = 0;
    }
  }
  return Object.keys(Ids);
}