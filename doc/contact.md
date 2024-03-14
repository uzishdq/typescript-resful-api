# Contact API Spec

## Create Contact

Endpoint : POST /api/contacts

Request Header :

- X-API-TOKEN:token

Request Body :

```json
{
  "first_name": "",
  "last_name": "",
  "email": "",
  "phone": ""
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": "",
    "first_name": "",
    "last_name": "",
    "email": "",
    "phone": ""
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "errors,...."
}
```

## Get Contact

Endpoint : GET /api/contacts/:id

Request Header :

- X-API-TOKEN:token

Response Body (Success) :

```json
{
  "data": {
    "id": "",
    "first_name": "",
    "last_name": "",
    "email": "",
    "phone": ""
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "errors,...."
}
```

## Update Contact

Endpoint : PUT /api/contacts/:id

Request Header :

- X-API-TOKEN:token

Request Body :

```json
{
  "first_name": "",
  "last_name": "",
  "email": "",
  "phone": ""
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": "",
    "first_name": "",
    "last_name": "",
    "email": "",
    "phone": ""
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "errors,...."
}
```

## Remove Contact

Endpoint : DELETE /api/contacts/:id

Request Header :

- X-API-TOKEN:token

Response Body (Success) :

```json
{
  "data": "ok"
}
```

Response Body (Failed) :

```json
{
  "errors": "errors,...."
}
```

## Search Contact

Endpoint : GET /api/contacts

Query Parameter :

- name : string, contact first name or last name, optional
- phone : string, contact phone, optional
- email : string, contact email, optional
- page : number, default 1
- size : number, default 10

Request Header :

- X-API-TOKEN:token

Response Body (Success) :

```json
{
  "data": [
    {
      "id": "",
      "first_name": "",
      "last_name": "",
      "email": "",
      "phone": ""
    },
    {
      "id": "",
      "first_name": "",
      "last_name": "",
      "email": "",
      "phone": ""
    }
  ],
  "paging": {
    "current_page": 1,
    "total_page": 10,
    "size": 10
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "unautorized.."
}
```
