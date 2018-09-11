# repeat-until-async

Repeats the async function The library provides TypeScript definitions. No dependencies needed. Please be sure that your environment has Promise support (or has a polyfill).

## Installation

```sh
$ npm install repeat-until-async
```


## Usage

The simple use case is described below:

```javascript
const repeatUntil = require('repeat-until-async');

const timeOfStart = Date.now();


// Wait for some async operation to end
repeatUntil(() => {
  const timePassed = Date.now() - timeOfStart;

  return (timePassed < 500)
      && (timePassed % 2 === 0)  // Some random stuff
          ? true
          : throw new Error('Async operation failed');
}, 600)
.then((result) => {
  // Here are the operations to be done after predicate
  console.log('Async operation succeeded, predicate result = ', result);
})
.catch((error) => {
  // Here are the operations to be done if predicate didn't succeed in the timeout
  console.log('Async operation failed: ', error);
});
```


## async/await

The library is async/await compatible because it uses Promises/A+, so the example above could be rewritten:

```javascript
const repeatUntil = require('repeat-until-async');

const timeOfStart = Date.now();


// Wait for some async operation to end
try {
  const result = await repeatUntil(() => {
    const timePassed = Date.now() - timeOfStart;

    return (timePassed < 500)
        && (timePassed % 2 === 0)  // Some random stuff
            ? true
            : throw new Error('Async operation failed');
  }, 600);

  // Here are the operations to be done after predicate
  console.log('Async operation succeeded, predicate result = ', result);
} catch (error) {
  // Here are the operations to be done if predicate didn't succeed in the timeout
  console.log('Async operation failed: ', error);
}
```


## Supported arguments

```javascript
/**
 * Waits for predicate to be truthy and resolves a Promise
 *
 * @param  predicate  Function  Predicate that checks the condition
 * @param  timeout  Number  Maximum wait interval, optional, 5000ms by default
 * @param  interval  Number  Wait interval, optional, 50ms by default
 * @return  Promise  Promise to return a callback result
 */
function repeatUntil(
    predicate: Function,
    timeout: Number = 5000,
    interval: Number = 50
): Promise;
```

## Build

No building required, library is implemented with ES5 for better compatibility and shipped as is.


## License

Library is shipped "as is" under MIT License.


## Contributing

Feel free to contribute. Just raise ann issue, create a pull request covering it and don't forget to test everything properly.


