import data from './photo-data.json' assert { type: 'json' };

var photoData = JSON.parse(data);

document.getElementById("gallery").innerHTML = `<p>${photoData[0].coords}</p>`;
