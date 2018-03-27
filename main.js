const entry = document.getElementById('entry');

const imageStart = 2747;
const imageEnd = 2803;

let arr = [];

for (var i = 2747; i < 2804; i++) {
  arr.push(i);
}

arr.forEach(function(el) {
  let newElement = document.createElement('img');
  newElement.setAttribute('src', `./images/IMG_${el}.jpg`);
  newElement.style.width = '90%';
  newElement.style.maxWidth = '600px';
  newElement.style.border = '1px solid #000';
  newElement.style.boxShadow = '5px 5px 5px #AAA';
  newElement.style.marginBottom = '2em';
  entry.appendChild(newElement);
});