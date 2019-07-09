# simple-vectors

A library that contains some simple functions for working with vectors.

## Usage

`yarn add simple-vectors`

```js
const vector = createVector(3, 5);
const vector2 = createVector('5,10');

const x = vector.x; // 3
const y = vector.y; // 3

const newPosition = createPosition(1, 2); // {x: 1, y: 2}

const vector3 = vector.add(vector2); // {x: 8, y: 15}

const area = vector.getArea(); // 15

const isEqual = vector.isEqual(vector2); // false

const key = vector.toString(); // '3-5'
```
