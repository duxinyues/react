export function createArray(start: any, end: any, length: number) {
  let arr = [];
  for (let index = 0; index < length; index++) {
    arr.push(Math.floor(Math.random() * (end - start) + start))
  }
  return arr;
}