const entry = document.getElementById('entry');

let arr = [];

for (var i = 2747; i < 2804; i++) {
  arr.push(i);
}

arr.forEach(function(value) {
  let newEl = document.createElement('img');
  newEl.setAttribute('src', `./images/IMG_${value}.jpg`);
  newEl.setAttribute('style', 'width:90%; display:block; border:1px solid #000; margin:0 auto 2em;');
  newEl.style.maxWidth = '600px';
  newEl.style.boxShadow = '5px 5px 5px #AAA';
  newEl.style.borderRadius = '2%';
  entry.appendChild(newEl);
});