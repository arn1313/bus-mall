'use strict';

var allImg = [];
var pathArray = [];
var product = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulu', 'dog-duck', 'dragon','pen', 'pet-sweep', 'scissors','shark','sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var images = document.getElementById('images');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');

function product(name, path) {
  this.name = name;
  this.path = path;
  this.tally = 0;
  this.clicks = 0;
  product.push(this.path);
  allImg.push(this.path);
}

// var bag = new product('bag', 'images/bag.jpg');
// var banana = new product('banana', 'images/banana.jpg');
// var bathroom = new product('bathroom', 'images/bathroom.jpg');
// var boots = new product('boots', 'images/boots.jpg');
// var breakfast = new product('breakfast', 'images/breakfast.jpg');
// var bubblegum = new product('bubblegum', 'images/bubblegum.jpg');
// var chair = new product('chair', 'images/chair.jpg');
// var cthulu = new product('cthulu', 'images/cthulhu.jpg');
// var dog_duck = new product('dog-duck', 'images/dog-duck.jpg');
// var dragon  = new product('dragon', 'images/dragon.jpg');
// var pen = new product('pen', 'images/pen.jpg');
// var pet_sweep = new product('pet-sweep', 'images/pet-sweep.jpg');
// var scissors = new product('scissors', 'images/scissors.jpg');
// var shark = new product('shark', 'images/shark.jpg');
// var sweep = new product('sweep', 'images/sweep.png');
// var tauntaun = new product('tauntaun', 'images/tauntaun.jpg');
// var unicorn = new product('unicorn', 'images/unicorn.jpg');
// var water_can = new product('water-can', 'images/water-can.jpg');
// var wine_glass = new product('wine-glass', 'images/wine-glass.jpg');
// var usb = new product('usb', 'images/usb.gif');

function randomImg1(){
  var randomNum = Math.floor(Math.random() * allImg.length + 1);
  console.log(randomNum);
  document.getElementById('img1').src = allImg[randomNum];
}

function randomImg2(){
  var randomNum = Math.floor(Math.random() * allImg.length + 1);
  console.log(randomNum);
  document.getElementById('img2').src = allImg[randomNum];
}

function randomImg3(){
  var randomNum = Math.floor(Math.random() * allImg.length + 1);
  console.log(randomNum);
  document.getElementById('img3').src = allImg[randomNum];
}

function clickHand (event) {
  var img1 = event.target.img1.value;
  var img2 = event.target.img2.value;
  var img3 = event.target.img3.value;
}

images.addEventListener('click', clickHand);
