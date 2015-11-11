# Restful
An opinionated REST library for Meteor

<br>
## Why
Do we need yet another serverside router for Meteor? Restful aims at doing more than just providing a router with a callback. It aims to provide developer hapiness, productivity, and testability.

Restful adds the concept of controllers and an *optional* layer to munge data outside of the controller (like converting dates to a unix timestamp or wrapping with `{data:..}`) in a way that's testable. Middleware is easily added with any connect middleware on NPM.

It also works really well with `meteor-repo` and `meteor-repo-model` to validate and store data while providing slim controllers. The repo abstracts your database and has optional methods that throw and return JSON errors automatically for resources that were expected to be present (see [project page](#) for more details).


## Installation
`meteor add skinnygeek1010:restful` *(not live yet)*
It's best to start with a boilerplate to learn how everything works. Checkout the example app folder for this.


### Router
TODO

### Controller
TODO

##### Connection Tranformation Helpers
TODO Use these helpers to transform the response connection in the controller.

### Views (optional)
TODO

#### Error handling
TODO

#### Model Validations and Data Persistence (Optional)
TODO (tie in separate packages to do this)


### Does this work with Meteor methods and publications?

If there is enough demand for this i'll consider adding routes that call your module functions as needed. This could keep all of your websocket requests in one area so it's easy to see the entry points of the app.
