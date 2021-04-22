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

| Route              | Action                 | Query (Request) |
| ------------------ | ---------------------- | --------------- |
| `/api/createuser`  | Skapar en ny användare | User object     |
| `/api/newdrill`    | Skapar en ny övning    | Drill object    |
| `/api/deletedrill` | Raderar en övning      | Drill id        |

##### GET request

| Route               | Action                            | Query (Request)       | Response      |
| ------------------- | --------------------------------- | --------------------- | ------------- |
| `/api/validateuser` | Söker efter användare i databasen | Username eller mail   | User object   |
| `/api/signin`       | Söker efter användare för inlogg  | Username och password | User object   |
| `/api/getuser`      | Söker efter en användare          | Username              | User object   |
| `/api/userdrills`   | Söker efter övningar              | Username              | Drill objects |
| `/api/getdrill`     | Söker efter en övning             | Drill id              | Drill object  |


En get request ser ut som följande:

```js
router.get({ route }, function (res, req, next) {
  let data = req.body;
  // Data processing
  res.send(output);
});
```

Där `data` är datan som skickas från frontend servern med hjälp av axios. ` {route}` syftar på urlen som frontend server skickar sin förfrågan till. Exempelvis `http://localhost:3001/api/getuser`.

## Datalagring

## Testreslultat

## Kända problem
