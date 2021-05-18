# Teknisk dokumentation

## Beskrivning

## Design

### Wireframes

### Färgschema

### Typsnitt

### Logotyp

### Prototyp

## Fil och mappstruktur

Projektet är uppdelat i två olika mappar, den första är `server`, som innehåller en `express.js` server. Den Största anledningen till att jag har en server är för att hantera queries till och från databasen. Det skulle gått att göra det direkt på frontenden. Men det blir mer organiserat på detta sättet.

I `server` mappen är det två mappar och en fil som är viktiga:

| `/routes`                                                                                                            | `/public`                                                                                                                                                                  | `app.js` |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Innehåller `api.js`, vilket är apin som komminucerar med databasen och tar emot GET och Post request från fronendend | Innehåller publika bilder som används på sidan. `/public/images` innehåller tillexempel loggan och i undermappen `/drills` sparas bilderna som laddas upp från frontenden. | `app.js` innehåller express-servern. Det är också där `node.js` moduler laddas in som används på hela severn.     | 

Den andra mappen som finns heter `cilent`, som innehåller ett `react.js` project skapat med `npx create-react-app` vilket skapar en boilerplate för react. Det är ändast den väsentliga koden för att skapa en react server som är kvar, och resten har bytts ut mot egen kod.

## Frontend

## Backend

### Server

#### API

api.js filen ligger under `server/routes/api.js`, det är den filen som analyserar och hanterar datan som skickas från react.

#### API routes

##### POST request

| Route               | Action                     | Query (Request)               |
| ------------------- | -------------------------- | ----------------------------- |
| `/api/createuser`   | Skapar en ny användare     | User object                   |
| `/api/newdrill`     | Skapar en ny övning        | Drill object och bild         |
| `/api/deletedrill`  | Raderar en övning          | Drill id                      |
| `/api/updatedrill`  | Uppdaterar en övning       | Drill id                      |
| `/api/updatesesson` | Uppdaterar ett träninspass | Session id och Session object |

En post request kan se ut som följande:

```js
router.get("/route", function (req, res, next) {
  let data = req.body;
  // Dataprossessing
});
```

Ifall post requesten skulle behöva en bild ser den ut som följande:

```js
router.get("/route", upload("img"), function (req, res, next) {
  let data = req.body;
  // Data processing
});
```

Bilden kommer automatiskt att hanteras med hjälp av biblioteket `multer`.

##### GET request

| Route               | Action                                            | Query (Request)       | Response                          |
| ------------------- | ------------------------------------------------- | --------------------- | --------------------------------- |
| `/api/validateuser` | Söker efter användare i databasen                 | Username eller mail   | User object                       |
| `/api/signin`       | Söker efter användare för inlogg                  | Username och password | User object                       |
| `/api/getuser`      | Söker efter en användare                          | Username              | User object                       |
| `/api/userdrills`   | Söker efter övningar                              | Username              | Drill objects                     |
| `/api/getdrill`     | Söker efter en övning                             | Drill id              | Drill object                      |
| `/api/getdrills`    | Ger alla övningar i databasen                     |                       | Drill objects                     |
| `/api/newsession`   | Skapar en temporär databas modell för träninspass | Session object        | Session id                        |
| `/api/getsession`   | Söker efter träningspass                          | Session id            | Drill objects och Sesssion object |
| `/api/getsessions`  | Ger alla träninspass i databasen                  |                       | Session objects                   |

En GET request kan se ut som följande:

```js
router.get("/route", function (res, req, next) {
  let data = req.query;
  // Data processing
  res.send(output);
});
```

Där `data` är datan som skickas från frontend servern med hjälp av axios. ` /route` syftar på urlen som frontend server skickar sin förfrågan till. Exempelvis `http://localhost:3001/api/getuser`.

## Datalagring

Detta projektet använder sig av MongoDB som databas. MongoDb är en så kallad "no-sql" databas och använder sig av modeler via javascipt biblioteket `mongoose`.

Databasen består av tre modeller:

- User
- Drill
- Session

User-modellen sparar information om användaren.

En modell kan se ut som följnade:

```js
let SchemaName = new Schema({
  username: String,
  name: String,
  array: [],
  ...
});
```

### Bilder

Bilder lagras på servern i mappen `public/images/drills`.

## Testreslultat

## Kända problem
