// DOM...

const titles = document.querySelectorAll('.title'),
  gFigs = document.querySelectorAll('.g-fig');

// Photo counter and title...
var noOfPhotos = 1;

titles.forEach(title => {
  title.textContent = noOfPhotos + ' Views of Gulaga';
});

// Images...

alert("hello");
alert(photos[0]["coords"]);

photos.forEach(photo => {
  const gFig = document.createElment('figure');
  const gFigCont = `<img src="${photo["url"]}"`;
