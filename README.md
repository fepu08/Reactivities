# Reactivities

## This project based on a Udemy course called **Complete guide to building an app with .Net Core and React** by _Neil Cummings_

## Navigation

- [Technologies](#technologies)
- [Section Goals](#section-goals)
  - [Clean Architecture recommendations](#clean-architecture-recommendations)
  - [Command vs Query](#command-vs-query)

## Technologies

- <span>ASP.<span>NET Core
- React
- Axios
- MobX
- Semantic UI

## Section Goals

### Section 4 - Creating a CRUD application using the CQRS + Mediator Pattern

- Clean Architecture pattern (clean and scalable app)
- CQRS + Mediator pattern
- Creating handlers for the CRUD operators

#### Clean Architecture recommendations
- Independent from fameworks
- Testable
- Independent from the interface
- Indepndent from the database

#### Command vs Query
Command | Query
------- | -----
Does something | Answers a question
Modifies State | Does not modify State
Should not return a value | Should return a value
Optimised for Write | Optimised for Read
