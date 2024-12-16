// DOM...
const titles = document.querySelectorAll('.title'),
  gFigs = document.querySelectorAll('.g-fig');

// Photo counter and title...
var noOfPhotos = 100;

titles.forEach(title => {
  title.textContent = noOfPhotos + ' Views of Gulaga';
});

// Image gallery...
gFigs.forEach(gFig => {
  var gImg = gFig.id + ' img',
    gOpen = gFig.id + ' figure menu li .g-btn-open',
    gDownload = gFig.id + ' figure menu li .g-btn-download';
  gOpen.href = gImg.src;
  gDownload.href = gImg.src;
});
