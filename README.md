# Reactivities

## This project based on a Udemy course called **Complete guide to building an app with .Net Core and React** by _Neil Cummings_

## Navigation

- [Technologies](#technologies)
- [Clean Architecture recommendations](#clean-architecture-recommendations)
- [Command vs Query](#command-vs-query)
- [Config](#config)
- [Docker](#docker)

## Technologies

- Backend
  - <span>ASP.<span>NET Core
  - Entity Framework
  - SQLite
  - Identity
  - SignalR
- Frontend
  - React
  - Axios
  - MobX
  - Semantic UI
  - Formik
  - Yup

#### Clean Architecture recommendations

- Independent from fameworks
- Testable
- Independent from the interface
- Indepndent from the database

#### Command vs Query

| Command                   | Query                 |
| ------------------------- | --------------------- |
| Does something            | Answers a question    |
| Modifies State            | Does not modify State |
| Should not return a value | Should return a value |
| Optimised for Write       | Optimised for Read    |

## Config

### Cloudinary

Inside ./backend/API/appsettings.json

```json
"Cloudinary": {
  "CloudName": "YOUR_CLOUD_NAME",
  "ApiKey": "YOUR_API_KEY",
  "ApiSecret": "YOUR_API_SECRET"
}
```

### React - package.json

Inside **./client/package.json** add script (on windows change "_mv_" to "_move_")

```json
  "postbuild": "mv build ../backend/API/wwwroot",
```

## Docker

Create docker container for **PostgreSQL**.

Don't forget to change _`<user>`_ and _`<password>`_

```
docker run --name dev -e POSTGRES_USER=<user> -e POSTGRES_PASSWORD=<password> -p 5432:5432 -d postgres:latest
```
