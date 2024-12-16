// Photo counter and title changer...
const titles = document.querySelectorAll('.title');
var noOfPhotos = 100;

titles.forEach(title => {
  title.textContent = noOfPhotos + ' Views of Gulaga';
});
