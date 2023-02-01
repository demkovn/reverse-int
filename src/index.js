module.exports = function reverse(n) {
  str = n.toString();
  reversed = '';
        if (str[0] == '-') {
          out = str.substr(1);
        } else {
          out = str;
        }
return reversed.split('').reverse().join('');
};

