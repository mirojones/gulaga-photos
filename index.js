// DOM...

const titles = document.querySelectorAll('.title'),
  gFigs = document.getElementById('g');

// Photo counter and title...
var noOfPhotos = 1;

titles.forEach(title => {
  title.textContent = noOfPhotos + ' Views of Gulaga';
});

// Images...
// alert(photos[0]["coords"]);

photos.forEach(index => {
  const gFig = document.createElment('figure'),
    gFigURL = photos[index]['url'],
    gFigAdr = photos[index]['address'],
    gFigDT = photos[index]['datetime'],
    gFigCont = `<img src="${gFigURL}">
  <figcaption>
    <button>Close</button>
    <menu>
      <li><a href="${gFigURL}" target="_blank">Open in full</a></li>
      <li><a href="${gFigURL}" download>Download</a></li>
      <li><button>About &amp; licence</button></li>
    </menu>
    <div>
      <button>Close</button>
      <table>
        <tr>
          <th>Location</th>
          <td>${gFigAdr}</td>
        </tr>
        <tr>
          <th>Date &amp; time</th>
          <td>${gFigDT}</td>
        </tr>
      </table>
    </div>
  </figcaption>`;
  gFigs.appendChild(gFig);
  gFig.innerHTML = gFigCont;
});
