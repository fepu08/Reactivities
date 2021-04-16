# Reactivities

## This project based on a Udemy course called **Complete guide to building an app with .Net Core and React** by _Neil Cummings_

## Navigation

- [Technologies](#technologies)
- [Clean Architecture recommendations](#clean-architecture-recommendations)
- [Command vs Query](#command-vs-query)
- [Config](#config)

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
`"Cloudinary": { "CloudName": "YOUR_CLOUD_NAME", "ApiKey": "YOUR_API_KEY", "ApiSecret": "YOUR_API_SECRET" }`
