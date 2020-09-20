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

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "userName": "JohnDoe",
  "id": 123
}
```

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
