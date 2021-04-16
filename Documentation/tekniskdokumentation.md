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

#### Get request

En get request ser ut som följande:

```js
router.get({ route }, function (res, req, next) {
  let data = req.body;
  // Data processing
  res.send(output);
});
```

Där ```data``` är datan som skickas från frontend servern med hjälp av axios. ``` {route}``` syftar på urlen som frontend server skickar sin förfrågan till. Exempelvis ```http://localhost:3001/api/getuser```.

## Datalagring

## Testreslultat

## Kända problem
