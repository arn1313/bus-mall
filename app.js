'use strict';

var totalClicks = 0;

var products = [];

var prodLast = [];

var prodNew = [];

var picWheel =  document.getElementById('imgPic');

var viewList = document.getElementById('view');

var chartList = document.getElementById('chart');

function Product(name, path) {
  this.name = name;
  this.path = path;
  this.clicks = 0;
  this.views = 0;
  this.conversion = 0;
  products.push(this);
}

function calcConversion() {
  for (var i = 0; i < products.length; i++){
    if(products[i].views === 0){
      products[i].conversion = 'NA';
    } else {
      products[i].conversion = products[i].clicks / products[i].views;
    }
  }
}

function checkQ(array, value) {
  for(var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return false;
    }
  }
  return true;
}

function getImage() {
  prodNew = [];
  while(prodNew.length < 3){
    var select = Math.floor(Math.random() * (products.length));
    if(checkQ(prodNew, products[select]) && checkQ(prodLast, products[select])){
      prodNew.push(products[select]);
      products[select].views++;
    }
  }
  prodLast = prodNew;
}

function clickHand(event) {
  if(event.target.id === 'imgPics'){
    alert('click on a picture');
  }
  for(var i = 0; i < products.length; i++) {
    localStorage.setItem('data', JSON.stringify(products));
    if(event.target.id === products[i].name) {
      products[i].clicks++;
    }
  }

  if (totalClicks < 25){
    onclick = totalClicks++;
    render();
  } else {
    picWheel.removeEventListener('click', clickHand);
  }
}

function handleList() {
  var picList = document.getElementById('pic-list');
  function displayList() {
    picList.innerHTML = '';
    for (var i = 0; i < products.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = 'Product: ' + products[i].name + ' has been clicked ' + products[i].clicks + ' times.';
      picList.appendChild(liEl);
    }
  }
  displayList();
}

function render(){
  getImage();
  picWheel.innerHTML = '';
  for(var i = 0; i < prodNew.length; i++){
    var imgEl = document.createElement('img');
    imgEl.src = prodNew[i].path;
    imgEl.id = prodNew[i].name;
    picWheel.appendChild(imgEl);
  }
}

var research = function(){
  if (localStorage.data){
    products = JSON.parse(localStorage.data);
  } else {
    getImage();
  }
};

function thisChart() {
  var chartLabel = [];
  var chartData = [];
  for (var i = 0; i < products.length; i++){
    console.log('is this thing on?');
    chartData.push(products[i].clicks);
    chartLabel.push(products[i].name);
  }
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartLabel,
      datasets: [{
        label: 'Click Tracker',
        data: chartData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
thisChart();
new Product('bag', 'images/bag.jpg');
new Product('banana', 'images/banana.jpg');
new Product('bathroom', 'images/bathroom.jpg');
new Product('boots', 'images/boots.jpg');
new Product('breakfast', 'images/breakfast.jpg');
new Product('bubblegum', 'images/bubblegum.jpg');
new Product('chair', 'images/chair.jpg');
new Product('cthulu', 'images/cthulhu.jpg');
new Product('dog-duck', 'images/dog-duck.jpg');
new Product('dragon', 'images/dragon.jpg');
new Product('pen', 'images/pen.jpg');
new Product('pet-sweep', 'images/pet-sweep.jpg');
new Product('scissors', 'images/scissors.jpg');
new Product('shark', 'images/shark.jpg');
new Product('sweep', 'images/sweep.png');
new Product('tauntaun', 'images/tauntaun.jpg');
new Product('unicorn', 'images/unicorn.jpg');
new Product('water-can', 'images/water-can.jpg');
new Product('wine-glass', 'images/wine-glass.jpg');
new Product('usb', 'images/usb.gif');

render();

picWheel.addEventListener('click', clickHand);
viewList.addEventListener('click', handleList);
chartList.addEventListener('click', thisChart);
