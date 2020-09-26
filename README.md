[![CodeFactor](https://www.codefactor.io/repository/github/bartek-figat/hapi--mongodb/badge)](https://www.codefactor.io/repository/github/bartek-figat/hapi--mongodb)

<h1 align="center"> Hapi-Mongodb </h1> <br>

## Installation

```javascript
$ npm i -S
```

```javascript
$ npm run watch:server
```

### Built With

- [x] node.js
- [x] @hapi/hapi
- [x] mongodb

<br>

### Application will run by default on port:`8080`

<br>
<h3 align=""> API </h3> <br>

| Function name | Description |
| ------------- | ----------- |
| `get()`       | "/"         |
| `post()`      | "/post"     |

<br>

### Insert JSON Data

<br>

# Folder Structure

```javascript

app
├── config                      # Environment Specific Variables (local/dev/production)
│   └── config.js
│
├── controllers                 # Controllers (functions)
│   └── db.controllers.js
│
│
├── models                      # Models (usually database models)
│   └── models.schema.js
│
├── routes                      # Routing (Routing refers to how an application’s endpoints (URIs) respond to client requests)
│   └── index.router.js
│
├── .env                        # Env (The process.env property returns an object containing the user environment)
│
│
├── .gitignore                  # Gitignore (specifies intentionally untracked files to ignore)
│
├──  package.json               # Project Description & Dependencies
│
│
├──  server.js                  # Index (your server starts here)


```

```json
  {

    "isActive": true,
    "age": 38,
    "eyeColor": "green",
    "company": "ZENTIME"
  },
  {

    "isActive": false,
    "age": 26,
    "eyeColor": "brown",
    "company": "EXOTERIC"
  },
  {

    "isActive": false,
    "age": 26,
    "eyeColor": "green",
    "company": "ZIPAK"
  },
  {

    "isActive": true,
    "age": 25,
    "eyeColor": "brown",
    "company": "REMOTION"
  },
  {

    "isActive": false,
    "age": 29,
    "eyeColor": "brown",
    "company": "COWTOWN"
  },
  {

    "isActive": false,
    "age": 22,
    "eyeColor": "brown",
    "company": "OVATION"
  },
  {

    "isActive": true,
    "age": 25,
    "eyeColor": "green",
    "company": "PHEAST"
  },
  {

    "isActive": true,
    "age": 23,
    "eyeColor": "blue",
    "company": "GRONK"
  },
  {

    "isActive": false,
    "age": 30,
    "eyeColor": "green",
    "company": "GEOLOGIX"
  },
  {

    "isActive": true,
    "age": 23,
    "eyeColor": "brown",
    "company": "RONELON"
  },
```
