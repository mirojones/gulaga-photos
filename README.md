## Just in case...
Here's JS for selecting a random photo and putting it as the bg image of the `<header>`:
```javascript
document.querySelector("header").style.backgroundImage = `url(${photos[photos.length * Math.random() | 0]["url"]})`;
```

## Sources:
### Add URL parameter function
From [https://stackoverflow.com/a/487049](https://stackoverflow.com/a/487049)
```javascript
function insertParam(key, value) {
    key = encodeURIComponent(key);
    value = encodeURIComponent(value);

    // kvp looks like ['key1=value1', 'key2=value2', ...]
    var kvp = document.location.search.substr(1).split('&');
    let i=0;

    for(; i<kvp.length; i++){
        if (kvp[i].startsWith(key + '=')) {
            let pair = kvp[i].split('=');
            pair[1] = value;
            kvp[i] = pair.join('=');
            break;
        }
    }

    if(i >= kvp.length){
        kvp[kvp.length] = [key,value].join('=');
    }

    // can return this or...
    let params = kvp.join('&');

    // reload page with new params
    document.location.search = params;
}
```
