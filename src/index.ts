/*
Primitive Types:
    - number: used for all numbers, including integers, decimals, and floats.
    - string: used for string literals, simple text, or storing any text values.
    - boolean: used for true or false values.
    - bigint: used for large integer values, introduced in ECMAScript 2020.
    - symbol: used for unique identifiers.
    - undefined: used for variables that have not been assigned a value.
    - null: used for variables that have an intentional absence of any object value.

    Note: TypeScript is a superset of JavaScript, so all JavaScript primitive types are also supported in TypeScript.
    In addition, TypeScript provides some special types, such as unknown, which is a type-safe counterpart of any, and never, which means a function never returns a value.
    (cannot assign unknown to any other type, as it is a type-safe type)
*/

// TUPLES
// ==============================
// hsla - hue, saturation, luminance, alpha
let hsla: [number, string, string, number];
hsla = [200, "100%", "50%", 1];

// coordinates
let xy: [number, number];
xy = [94.7, 20.1];

function useCoords(): [number, number] {
  // get coords
  const lat = 100;
  const long = 50;
  return [lat, long];
}
const [lat, long] = useCoords();

// named tuples
let user: [name: string, age: number];
user = ["John", 30];

// INTERFACES
// ==============================
interface User {
  name: string;
  age: number;
}

let user1: User = {
  name: "John",
  age: 30,
};

interface Post {
  title: string;
  body: string;
  id: number;
}

const newPost: Post = {
  title: "New Post",
  body: "This is a new post",
  id: 1,
};

// as function argument type
function createPost(post: Post): void {
  console.log(post);
}
createPost(newPost);

// with arrays
interface Car {
  make: string;
  model: string;
  year: number;
}
let cars: Car[] = [
  { make: "Ford", model: "Fusion", year: 2019 },
  { make: "Chevy", model: "Malibu", year: 2018 },
];
