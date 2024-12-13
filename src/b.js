var b = 'b';
function hoc() {
  console.log('log');
  return (x) => x;
}
export default hoc()(b);
