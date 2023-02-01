module.exports = function reverse(n) {
  str = n.toString();
  reversed = '';
        if (str[0] == '-') {
          reversed = str.substr(1);
        } else {
          reversed = str;
        }
return reversed.split('').reverse().join('');
};

