// var a = 'a';
// export default a;

export function square(x) {
  return x.a // 引用了x.a， 有副作用
}
/*#__PURE__*/square({ a: 123 })

export function cube(x) {
  return x * x * x
}
