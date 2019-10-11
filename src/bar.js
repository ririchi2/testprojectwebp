export default function bar() {
  console.log("Hello from World");
}

export function defaultParameters(height, color = "#FF0000") {
  console.log("Default parameters", height, color);
}

export function arrow() {
  return [1, 2, 3].map((n) => n + 1);
}
