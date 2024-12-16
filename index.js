// Photo counter and title changer...
const titles = document.querySelectorAll('.title');

titles.forEach(title => {
  title.textContent = noOfPhotos + ' Views of Gulaga';
});
