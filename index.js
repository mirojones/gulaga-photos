// DOM and setup...

const titles = document.querySelectorAll('.title'),
  gFigs = document.getElementById('gallery'),
  g = document.getElementById('g'),
  m = document.getElementById('m');

var dateFormat = "en-AU";

// Photo counter and title...
var noOfPhotos = photos.length;

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

// Gallery...

photos.forEach(element => {
  const gFig = document.createElement('figure'),
    gFigId = "fig" + element["id"],
    gFigURL = element["url"],
    gFigAdr = element["address"],
    gFigDT = element["datetime"],
    gFigDTformat = new Date(gFigDT).toLocaleString(dateFormat),
    gFigCam = element["camera"],
    gFigSet = element["settings"] ? element["settings"] : "unknown";
  const gFigCont = `<button onclick="openCap('${gFigId}')"><img src="${gFigURL}"></button>
  <figcaption style="display:none;">
    <button onclick="closeCap('${gFigId}')"><i class="ico ico-close" role="img"></i></button>
    <menu class="g-fig-btns">
      <li><a href="${gFigURL}" target="_blank">Open in full</a></li>
      <li><a href="${gFigURL}" download>Download</a></li>
      <li><button onclick="openAbout('${gFigId}')">About &amp; licence</button></li>
    </menu>
    <div class="g-fig-about" style="display:none;">
      <button onclick="closeAbout('${gFigId}')"><i class="ico ico-back" role="img"></i></button>
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
  gFig.setAttribute("id", gFigId);
});

function openCap(id) {
  document.querySelector(`#${id} figcaption`).style.display = "block";
  document.querySelector(`#${id} > button`).style.display = "none";
}
function closeCap(id) {
  document.querySelector(`#${id} figcaption`).style.display = "none";
  document.querySelector(`#${id} > button`).style.display = "block";
}
function openAbout(id) {
  document.querySelector(`#${id} .g-fig-about`).style.display = "block";
  document.querySelector(`#${id} .g-fig-btns`).style.display = "none";
}
function closeAbout(id) {
  document.querySelector(`#${id} .g-fig-about`).style.display = "none";
  document.querySelector(`#${id} .g-fig-btns`).style.display = "block";
}

// Navigation...
