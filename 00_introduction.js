// Tutorial 0 - introduction.js

// Why this tutorial?
// When trying to learn Redux, I realized that I had accumulated in the past incorrect knowledge about flux through
// articles I read and personal experience. I don't mean that articles about flux are not well written
// but I just didn't grasp concepts correctly. In the end, I was just applying documentation of different
// flux framework (reflux, flummox, FB Flux) and trying to make them match with theoretical concept I read
// about (actions / actions creators, store, dispatcher, etc).
// Only when I started using Redux did I realized that flux is more simple than I thought. This is all
// thanks to Redux being very well designed and having removed a lot of "anti-boilerplate features" introduced 
// by other framework I tried before. I feel today that Redux is a much better way to learn about flux
// than many other framework. That's why I want now to share with everyone, and using my own words,
// flux concepts what I am starting to grasp, focusing on the use of Redux.

// You may have seen this diagram representing the famous unidirectional data flow of a flux application:

/*
                 _________               ____________               ___________ 
                |         |             |            |             |           |
                | Action  |------------▶| Dispatcher |------------▶| callbacks |
                |_________|             |____________|             |___________|
                     ▲                                                   |
                     |                                                   |
                     |                                                   |
 _________       ____|_____                                          ____▼____ 
|         |◀----|  Action  |                                        |         |
| Web API |     | Creators |                                        |  Store  |
|_________|----▶|__________|                                        |_________|
                     ▲                                                   |
                     |                                                   |
                 ____|________           ____________                ____▼____ 
                |   User       |         |   React   |              | Change  |
                | interactions |◀--------|   Views   |◀-------------| events  |
                |______________|         |___________|              |_________|

*/

// In this tutorial we'll gradually introduce you to concepts of the diagram above. But instead of trying
// to explain this complete diagram and the overall flow it describes, we'll take each piece separately and try to
// understand why it exists and what role it plays. In the end you'll see that this diagram makes perfect sense
// once we understood each of its parts.

// But before we start, let's speak a little bit about why flux exists and why we need it...
// Let's pretend we're building a web application. What are all web applications made of?
// 1) templates / html = View
// 2) data that will populate our views = Models
// 3) Logic to retreive data, glue all views together and to react accordingly to user events,
//    data modifications, etc. = Controller

// This is the very classic MVC that we all know about. But it actually look like concepts of flux,
// just expressed in a slightly different way:
// - Model look like store
// - user events, data modifications and their handlers look like
//   "action creators" -> action -> dispatcher -> callback
// - View look like React view (or anything else as far as Flux is concerned)

// So is flux just a matter of new vocabulary? Not exactly. But vocabulary DO matters, because by introducing 
// these new terms we are now able to express more precisely things that were regrouped under 
// various terminologies... For example, isn't a data fetch an action? just as a click is also an action?
// and a change in an input is an action too... Then we are all already used to issue action from our
// applications, we were just calling them differently. And instead of having handlers for those
// actions modifying directly Models or Views, flux ensure all actions go first through something called
// a dispatcher, then through our stores and finally all watchers of stores are notified.

// To get more clearly how MVC and Flux differs, we'll
// take a classic use-case in an MVC application:
// In a classic MVC application you could easily end up with:
// 1) user click on button "A"
// 2) a click handler on button "A" trigger a change on Model "A"
// 3) a change handler on Model "A" trigger a change on Model "B"
// 4) a change handler on Model "B" trigger a change on  view "B" that re-render itself

// Finding the source of a bug in such an environment when something goes wrong can become quite a challenge
// very quickly. This is because every View can watch every Model and every Model can watch other Models so 
// basically data can arrive from a lot of places and be changed by a lot of sources (any views or any models).

//  Whereas when using Flux and its unidirectional data flow the example above could become:
// 1) user click on button "A"
// 2) a handler on button "A" trigger an action that is dispatched and produce a change on store "A"
// 3) since all others stores are also notified about the action, Store B can react to the same action too
// 4) View "B" get notified by change in store A and B and re-render

// See how we avoid to have store A being directly linked to store B? Each store can only be 
// modified by an action and nothing else. And once all stores replied to an action, 
// views can finally update. So in the end, data always flow in one way: 
//     action -> store -> view -> action -> store -> view -> action -> ...

// Just as we started our use case above from an action, let's start our tutorial with
// actions and action creators.

// Go to next tutorial: simple-action-creator.js
