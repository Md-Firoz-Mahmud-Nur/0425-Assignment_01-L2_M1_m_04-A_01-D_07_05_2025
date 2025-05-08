// P1

function formatString(input: string, toUpper?: boolean): string {
  // console.log("toUpper--", toUpper);
  if (toUpper === false) {
    return input.toLowerCase();
  }
  return input.toUpperCase();
}

// console.log(formatString("Hello")); // Output: "HELLO"
// console.log(formatString("Hello", true)); // Output: "HELLO"
// console.log(formatString("Hello", false)); // Output: "hello"

// P2

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

// console.log(filterByRating(books));
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]

// P3

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

// concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
// concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]

// console.log(concatenateArrays(["a", "b"], ["c"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));

// P4

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
// myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
// myCar.getModel();  // Output: "Model: Corolla"

// console.log(myCar.getInfo());
// console.log(myCar.getModel());


// P5

function processValue(value: string | number): number{
  if (typeof value === "string") {
    return value.length;
  }
  return value * 2;
};

// processValue("hello"); // Output: 5
// processValue(10);      // Output: 20


// console.log(processValue("hello"));
// console.log(processValue(10));

// P6

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null{
  if (products.length === 0) {
    return null;
  }
  let mostExpensiveProduct = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > mostExpensiveProduct.price) {
      mostExpensiveProduct = products[i];
    }
  }
  return mostExpensiveProduct;
};


const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];

// getMostExpensiveProduct(products);
// Output: { name: "Bag", price: 50 }

console.log(getMostExpensiveProduct(products));