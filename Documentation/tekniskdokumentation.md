# Teknisk dokumentation

## Beskrivning

## Design

### Wireframes

### Färgschema

### Typsnitt

### Logotyp

### Prototyp

## Fil och mappstruktur

## Frontend

## Backend

### Server

### API

api.js filen ligger under `server/routes/api.js`, det är den filen som analyserar och hanterar datan som skickas från react.

#### API routes

##### POST request

| Route               | Action                     | Query (Request)               |
| ------------------- | -------------------------- | ----------------------------- |
| `/api/createuser`   | Skapar en ny användare     | User object                   |
| `/api/newdrill`     | Skapar en ny övning        | Drill object                  |
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

## Testreslultat

## Kända problem
