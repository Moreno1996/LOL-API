# LOL-API

## Voorbereiding

1. Installeer MongoDB (https://www.mongodb.com/try/download/community)
2. Installeer Node.js en npm 
   1. https://nodejs.org/en/download/
   2. Open een terminal en run `node -v` (dit zou een versie moeten geven
   3. Open een terminal en run `npm -v` (dit zou een versie moeten geven
3. Open de terminal en run
   ```
   cd server
   npm install
   ```
4. Open de terminal en run
   ```
   cd site
   npm install
   ```

> **Zorg ervoor dat je jouw riot API key invuld in het bestand: server\constants\constants.js**
## Server
Open de terminal.
Run the server met:
``` 
cd server
npm run dev
```
Hierna is de server beschikbaar op localhost:3003  
## Site
Open de terminal.
Run the server met:
``` 
cd site
npm run dev
```
Hierna is de site beschikbaar op localhost:3000 


## URL's
### / (http://localhost:3000/)
De standaard website.
### /generate/challenger (http://localhost:3000/generate/challenger)
Een lijst met challenger spelers. 
Deze website maakt een call naar de backend, en haalt de nieuwe challenger spelers op. 
Standaard moet hij reageren binnen 1 seconde. Wil je dit langer hebben: ga dan naar server\api_endpoints\challenger_endpoints.js en pas max_generation_time naar je gewilde tijd in ms.
