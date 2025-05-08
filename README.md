# TypeScript Blog: Understanding `keyof` and Enums

## 01. What is the use of the `keyof` keyword in TypeScript?

In TypeScript, the `keyof` keyword is used to create a **union type** of all keys in an object type. It helps make code **type-safe**, flexible, and dynamic when working with object properties.

### Syntax:

```ts
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person; // "name" | "age"
```

### Example use-case:

```ts
type Person = {
  name: string;
  age: number;
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: Person = {
  name: "John",
  age: 25,
};

const userName = getProperty(user, "name"); // type: string
const userAge = getProperty(user, "age"); // type: number
```

With keyof, the function becomes type-aware, and you get auto-suggestions and compile-time error checking. For example, getProperty(user, "email") would give an error because email is not a key in Person.

### What is the use of Enums in TypeScript?

Enums (short for “enumerations”) are a special feature in TypeScript that allows you to define a set of named constants. Enums make your code more readable and organized, especially when dealing with fixed sets of values.

```ts
enum Direction {
  North, // 0
  East, // 1
  South, // 2
  West, // 3
}

const move = Direction.East;
console.log(move); // Output: 1
```

By default, numeric enums start from 0 and increment by 1. You can also assign custom numbers:

```ts
enum StatusCode {
  OK = 200,
  NotFound = 404,
  ServerError = 500,
}
```

### String Enum:

```ts
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

const favoriteColor = Color.Green;
console.log(favoriteColor); // Output: "GREEN"
```

String enums are helpful when you need to serialize or display the values directly.

### Why Use Enums?

1.  Code is cleaner and more self-documenting.

2.  Prevents typos in strings or magic numbers.

3.  Allows easy updates in one place.

These powerful features (keyof and enum) make TypeScript development more robust, error-free, and scalable for real-world applications.
