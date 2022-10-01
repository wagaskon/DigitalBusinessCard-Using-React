# DigitalBussiness Card

It is React first Solo project from Scrimba.
## Requirements:
From Scrimba: Design a busssiness card as shown in this image. (figma link was provided)

- you can make any changes to it but it should replicate the design
- you can change image, text , color.

 ![design](Design.png)  
 My design: 
 ![design](Design.png)



## Code
### HTML
Link: [Open HTML files in Editor](index.html)
OR
Quick Check here :point_down:
``` 
<!DOCTYPE html>
<html lang="en">
    <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css">
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="index.css">
        <title>Personal Dashboard</title>
    </head>
    <body>
        <main>    
            <div class="top">
                <div id="crypto">
                    <div id="crypto-top"></div>
                </div>
                <div id="weather"></div>
            </div>
            
            <h1 id="time" class="time"></h1>
            <p id="author"></p>
        </main>
        <script src="index.js"></script>
    </body>
</html>

 ```

### CSS 
Link: [Open CSS files in Editor](index.css)
OR
Quick Check here :point_down:
```
* {
    box-sizing: border-box;
}    

body {
    margin: 0;
    background: no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    text-shadow: 0px 0px 20px #242424;
}

main {
    padding: 15px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

div.top {
    display: flex;
    justify-content: space-between;
}

h1.time {
    text-align: center;
    font-size: 5rem;
}

div#crypto {
    font-size: 1.3rem;
}

div#crypto > p {
    margin: 0;
}

div#crypto-top {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
}

div#crypto-top > span {
    margin-left: 10px;
}

div#weather {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-self: flex-start;
    margin-top: -20px;
}

div#weather > img {
    width: 70px;
}

p.weather-city {
    width: 100%;
    text-align: right;
    margin: 0;
    margin-top: -10px;
    font-size: 1.2rem;
}

p.weather-temp {
    margin: 0;
    font-size: 1.7rem;
    margin-left: -10px;
}

p#author {
    font-size: 1rem;
}

```

### JavaScript
Link: [Open JavaScript files in Editor](index.js)
OR
Quick Check here :point_down:
```
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })

fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `
        document.getElementById("crypto").innerHTML += `
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => console.error(err))

function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}

setInterval(getCurrentTime, 1000)

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p class="weather-temp">${Math.round(data.main.temp)}º</p>
                <p class="weather-city">${data.name}</p>
            `
        })
        .catch(err => console.error(err))
});


```
### Manifest JSON
```
{
    "manifest_version": 3,
    "name": "Personal Dashboard",
    "version": "1.0.0",
    "description": "Just for practicing async JS",
    "action": {
        "default_icon": "icon.png"
    },
    "chrome_url_overrides": {
        "newtab": "index.html"
    }
}


```

## How to Add this Extension to Chrome
### Steps:
1) Download this repository
2) Open Chrome then setting and then click on extensions  or just copy paste this in search bar--> chrome://extensions/
3) Click on developer mode on
4) click on Load Unpack and choose folder that has been dowloaded.
5) Extension will be shown in extension panel.
