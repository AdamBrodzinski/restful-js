# Restful
An opinionated REST library for Meteor

### Check out **[restful.readme.io](https://restful.readme.io/docs)** for the full docs!

<br>
## Why
Restful aims at doing more than just providing a router with a callback. It aims to provide developer hapiness, productivity, and testability.

Restful adds the concept of controllers and an *optional* layer to munge data outside of the controller (like converting dates to a unix timestamp or wrapping with `{data:..}`) in a way that's testable. Middleware is easily added with any connect middleware on NPM.

Restful is inspired from the Phoenix framework and their take on functional programming for web frameworks.

Restful is a framework that combines the packages `restful-api`, `restful-repo`, `resful-model`, and `simple-schema` together to make one main package `restful`. Any of these can be used on their own.


Using `meteor-model` and `restful-repo` allows you to easily validate and store data while providing slim controllers. The model package provides a seamless inegration with SimpleSchema and the repo. The repo package abstracts your database and has optional methods that throw and return JSON errors automatically for resources that were expected to be present (see [project page](#) for more details).



## Installation
`meteor add skinnygeek1010:restful`  
It's best to start with a boilerplate to learn how everything works. Checkout the example app folder for this.

## Examples Repo
- `git clone https://github.com/AdamBrodzinski/meteor-restful.git`  
- `cd meteor-restful`  
- `cd examples/simple`  
- `meteor`  
- `curl -X GET localhost:3000/posts`  



### Does this work with Meteor methods and publications?

If there is enough demand for this i'll consider adding routes that call your module functions as needed. This could keep all of your websocket requests in one area so it's easy to see the entry points of the app.
