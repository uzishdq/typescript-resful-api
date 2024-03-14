# Address API Spec

## Create Address

Endpoint : POST /api/contacts/:idContact/adrresses

Request Header :

- X-API-TOKEN :token

Request Body :

```json
{
  "street": "",
  "city": "",
  "province": "",
  "country": "",
  "postal_code": ""
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": "",
    "street": "",
    "city": "",
    "province": "",
    "country": "",
    "postal_code": ""
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "error,..."
}
```

## Get Address

Endpoint : GET /api/contacts/:idContact/adrresses/:idAddress

Request Header :

- X-API-TOKEN :token

Response Body (Success) :

```json
{
  "data": {
    "id": "",
    "street": "",
    "city": "",
    "province": "",
    "country": "",
    "postal_code": ""
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "error, ..."
}
```

## Update Address

Endpoint : GET /api/contacts/:idContact/adrresses/

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
  "errors": "error, ..."
}
```

## Remove Address

Request Body :

```json
{
  "street": "",
  "city": "",
  "province": "",
  "country": "",
  "postal_code": ""
}
```

## List Address

Endpoint : GET /api/contacts/:idContact/adrresses/

Request Header :

- X-API-TOKEN :token

Response Body (Success) :

```json
{
  "data": [
    {
      "id": "",
      "street": "",
      "city": "",
      "province": "",
      "country": "",
      "postal_code": ""
    },
    {
      "id": "",
      "street": "",
      "city": "",
      "province": "",
      "country": "",
      "postal_code": ""
    }
  ]
}
```

Response Body (Failed) :

```json
{
  "errors": "error, ..."
}
```
