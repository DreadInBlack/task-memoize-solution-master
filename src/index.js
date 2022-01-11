import memoize from "./memoize";

const fn = (a, b) => {
  console.log("Функция вызвана с аргументами", a, b);
  return a + b;
};

const memoizedFn = memoize(fn);

console.log(memoizedFn(1, 2));
console.log(memoizedFn(1, 3));
console.log(memoizedFn(1, 2));
