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
  const gFig = document.createElment('figure'),
    gFigURL = photo['url'],
    gFigAdr = photo['address'],
    gFigDT = photo['datetime'],
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
