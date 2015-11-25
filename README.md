# Restful
An opinionated REST library for Meteor

### Check out **[restful.readme.io](https://restful.readme.io/docs)** for the full docs!

<br>
## Why

Restful aims at doing more than just providing a router with a callback. It aims to provide developer happiness, productivity, and testability. It does things the 'Unix' way by providing several small functions that can be composed together.

By leveraging functional programming over OO, we end up with a system that is very easy to test. Every function takes an input, the `connection` object and returns a value, again the `connection` object. 

The middleware, router, controller, and optional view (serialization) layers form a composable  pipeline with each layer each taking a `conn`, transforming it, and passing it down to another layer until it's finally sent to the client.

You can think of the 'functional' pipeline conceptually like this:

```
Request - localhost/posts
               V
               V
Middleware (transforms all connections)
               V
               V
Router - (Dispatches matching route to controller)
               V
               V        
Controller (side effects and data mutation)
               V
               V        
View (transform payload eg, wrapping with 'data', omitting fields, or conv. timestamps)
               V
               V            
```




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
