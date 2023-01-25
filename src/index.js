module.exports = function reverse (n) {
  const str = (Math.abs(n)).toString();
  let out = '';
  const isNegative = n < 0;
  for ( let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char !== '0') {
      out = char + out;};
   else if (char === '0' && str[i+1] && str[i+1] !== '0') {
   out = char + out;}
  };
    return Number(isNegative ? out * 1 : out);
}
