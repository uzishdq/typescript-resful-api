# User API Spec

## Register User

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "",
  "password": "",
  "name": ""
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "",
    "name": ""
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Error, ...."
}
```

## Login User

Endpoint : POST /api/login

Request Body :

```json
{
  "username": "",
  "password": ""
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "",
    "name": "",
    "token": "uuid"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Error, ...."
}
```

## Get User

Endpoint : GET /api/users/current

Request Header :

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": {
    "username": "",
    "name": "",
    "token": "uuid"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Error, ...."
}
```

## Update User

Endpoint : PATCH /api/users/current

Request Header :

- X-API-TOKEN : token

Request Body :

```json
{
  "username": "", // tidak wajib
  "name": "" // tidak wajib
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "",
    "name": ""
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Error, ...."
}
```

## Logout User

Endpoint : PATCH /api/users/current

Request Header :

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": "ok"
}
```

Response Body (Failed) :

```json
{
  "errors": "Unautorized, ...."
}
```
