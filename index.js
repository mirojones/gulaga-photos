// DOM and setup...

const titles = document.querySelectorAll('.title'),
  gFigs = document.getElementById('g');

var dateFormat = "en-AU";

// Photo counter and title...
var noOfPhotos = 1;

titles.forEach(title => {
  title.textContent = noOfPhotos + ' Views of Gulaga';
});

// Query parameters...
/* add parameter to url */function insertParam(t,i){t=encodeURIComponent(t),i=encodeURIComponent(i);var n=document.location.search.substr(1).split("&");let e=0;for(;e<n.length;e++)if(n[e].startsWith(t+"=")){let l=n[e].split("=");l[1]=i,n[e]=l.join("=");break}e>=n.length&&(n[n.length]=[t,i].join("="));let a=n.join("&");document.location.search=a}
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('dt')) {
  dateFormat = urlParams.get('dt');
} else {
  insertParam('dt', dateFormat);
}

// Images...

photos.forEach(element => {
  const gFig = document.createElement('figure'),
    gFigId = element["id"],
    gFigURL = element["url"],
    gFigAdr = element["address"],
    gFigDT = element["datetime"],
    gFigDTformat = new Date(gFigDT).toLocaleString(dateFormat),
    gFigCam = element["camera"],
    gFigSet = element["settings"] ? element["settings"] : "unknown";
  const gFigCont = `<button onclick="openCap()"><img src="${gFigURL}"></button>
  <figcaption class="g-fig">
    <button onclick="closeCap()">Close</button>
    <menu class="g-fig-btns">
      <li><a href="${gFigURL}" target="_blank">Open in full</a></li>
      <li><a href="${gFigURL}" download>Download</a></li>
      <li><button onclick="openAbout()">About &amp; licence</button></li>
    </menu>
    <div class="g-fig-about">
      <button onclick="closeAbout()">Close</button>
      <table>
        <tr>
          <th>Location</th>
          <td>${gFigAdr}</td>
        </tr>
        <tr>
          <th>Date &amp; time</th>
          <td>${gFigDTformat}</td>
        </tr>
        <tr>
          <th>Camera</th>
          <td>${gFigCam}</td>
        </tr>
        <tr>
          <th>Settings</th>
          <td>${gFigSet}</td>
        </tr>
      </table>
    </div>
  </figcaption>`;
  gFigs.appendChild(gFig);
  gFig.innerHTML = gFigCont;
});
