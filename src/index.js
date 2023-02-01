const reverse = (n) => {
    str = n.toString();
    out = '';
          if (str[0] == '-') {
            out = str.substr(1);
          } else {
            out = str;
          }
return out.reverse();
};

