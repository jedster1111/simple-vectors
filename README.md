# simple-vectors

A library that contains some simple functions for working with vectors.

## Usage

`yarn add simple-vectors`

```js
const vector = createVector(3, 5);
const vector2 = createVector('5-10');

const position = vector.position; // {x: 3, y: 5}

const newPosition = createPosition(1, 2); // {x: 1, y: 2}

const vector3 = vector.add(vector2.position); // {x: 8, y: 15}

const area = vector.getArea(); // 15

const isEqual = vector.isEqual(vector2.position); // false

const isSmaller = vector.isSmaller(vector2.position); // true

const key = vector.toString(); // '3-5'
```
