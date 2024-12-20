// DOM and setup...

const titles = document.querySelectorAll('.title'),
  gFigs = document.getElementById('gallery'),
  g = document.getElementById('g'),
  m = document.getElementById('m'),
  thCSS = document.getElementById("theme");

var dateFormat = "en-AU";

// Photo counter and title...
var noOfPhotos = photos.length;

titles.forEach(title => {
  title.textContent = noOfPhotos + ' Views of Gulaga';
});

// Query parameters...
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('dt')) {
  dateFormat = urlParams.get('dt');
}

if (urlParams.has('th')) {
  thCSS.textContent = `:root{--th:${urlParams.get('th')};}`;
}

photos.forEach(element => {
  const gFig = document.createElement('figure'),
    gFigId = "fig" + element["id"],
    gFigURL = element["url"],
    gFigAdr = element["address"],
    gFigDT = element["datetime"],
    gFigDTformat = new Date(gFigDT).toLocaleString(dateFormat),
    gFigCam = element["camera"],
    gFigSet = element["settings"] ? element["settings"] : "unknown";
  const gFigCont = `<button onclick="openCap('${gFigId}')" class="photo"><img src="${gFigURL}"></button>
  <figcaption style="display:none;">
    <button onclick="closeCap('${gFigId}')">Close</button>
    <menu class="g-fig-btns">
      <li><a href="${gFigURL}" target="_blank">Open in full</a></li>
      <li><a href="${gFigURL}" download>Download</a></li>
      <li><button onclick="openAbout('${gFigId}')">About &amp; licence</button></li>
    </menu>
    <div class="g-fig-about" style="display:none;">
      <button onclick="closeAbout('${gFigId}')">Back</button>
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

function closeAllCap() {
  photos.forEach(element => {
    closeAbout("fig" + element["id"]);
    closeCap("fig" + element["id"]);
  });
}
function openCap(id) {
  closeAllCap();
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
function openG() {
  m.style.display = "none";
  g.style.display = "block";
}

function openM() {
  g.style.display = "none";
  m.style.display = "block";
}

// Copyright year
var yearNow=new Date().getFullYear(),yearStart = 2024;if(yearNow!=yearStart){yearNow = yearStart + "–" + yearNow}
document.getElementById("year").textContent = yearNow;
