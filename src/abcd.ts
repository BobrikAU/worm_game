interface Aaa {
  x: number;
  y: number;
}

function add({ x, y }: Aaa) {
  return x + y;
}

console.log(add({ x: 5, y: 30 }));

export { add };
