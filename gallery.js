import data from './photo-data.json' assert { type: 'json' };

var photoData = JSON.parse(data);

alert(photoData[0].coords);
