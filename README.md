# Pramp - Search Autocomplete

## Description

This website is a solution to a front end interview challenge provided by Pramp. The challenge was to implement a search autocomplete input to search for movie titles, loading its data from a simulated remote service endpoint. 

## Demo

See live website here: https://eunicode.github.io/pramp-autocomplete/

## Develop

Run `gulp` to start live reloading local development server. 

## Deploy

Run `npm run deploy` to deploy to GitHub pages.

## Lessons learned

- How to select DOM nodes with `querySelector()`
- The DOM `input` event
- How to register event listeners
- The event listener callback function accepts an object based on `Event`
- How to access input text with `event.target.value`. (This enables us to pass the input text to the `apiCall` function).
- How to deal with async API calls by using `Promises` and `then()`. (When an asynchronous operation completes, a `Promise` object resolves to a value. The fulfillment of a `Promise` calls `then()`'s `onFulfilled` function).
- How to create and append nodes (`createElement()`, `appendChild()`)
- How to clear all child nodes with innerHTML